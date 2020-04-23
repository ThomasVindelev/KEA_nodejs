// Update with your config settings.
const creds = require("./config/mysql_credentials.js")

console.log(creds)

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: creds.database,
      user: creds.user,
      password: creds.password
    }
  },

};
