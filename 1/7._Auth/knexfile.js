// Update with your config settings.
const creds = require("./config/mysql_credentials.js")
const { knexSnakeCaseMappers} = require('objection');

console.log(creds)

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: creds.user,
      host: creds.database,
      user: creds.user,
      password: creds.password
    },
    // ...knexSnakeCaseMappers
  }

};
