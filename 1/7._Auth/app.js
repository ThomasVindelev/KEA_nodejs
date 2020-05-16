const express = require('express');
const app = express();
const session = require("express-session")
const uuid = require("uuid-random")

// express session setup using the database
app.use(session({
    secret: require('./config/mysql_credentials.js').sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

// ratelimit
const rateLimit = require("express-rate-limit")
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 8 // limit each IP to 100 requests per windowMs
});




app.use("/login", limiter)
app.use("/signup", limiter)
app.use(express.urlencoded({extended: true}));
app.use(express.json());




/* Add Routes */
const authRoutes = require('./routes/auth.js');
const usersRoute = require('./routes/users.js');
const mailRoute = require('./routes/mail.js');
app.use(authRoutes);
app.use(usersRoute);
app.use(mailRoute);




/* Setup Objection + Knex */
const { Model } = require('objection');
const Knex = require('knex');
const knexFile = require('./knexfile.js');




// Initialize knex.
const knex = Knex(knexFile.development);
// Give the knex instance to objection.
Model.knex(knex);

app.use((req, res, next) => {
    console.log(new Date())
    next()
})




/* index path */
app.get('/', (req, res) => {
    // knex.select().from('users').then((users) => {
    //     console.log(users);
    // });
    // req.session.id = uuid()
    return res.sendFile(__dirname + "/public/index.html");
});

/* Start Server */
const PORT = 3000;

app.listen(PORT, (error) => {
    if(error) {
        console.log(error);
    }
    console.log("Server is running on port", PORT);
});