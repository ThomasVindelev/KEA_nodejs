
exports.up = function(knex) {
  return knex.schema
    .createTable("users")
};

// columnA

exports.down = function(knex) {
  // DDL
};
