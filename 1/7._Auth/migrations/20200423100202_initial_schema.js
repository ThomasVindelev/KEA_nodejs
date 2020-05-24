
exports.up = function(knex) {

    return knex.schema
    .createTable('roles', (table) => {
        table.increments('id').notNullable()
        table.string('role').unique().notNullable()
    })
    .createTable('users', (table) => {

        table.increments('id').notNullable() // notnull is redundant
        table.string('username').unique().notNullable()
        table.string('password').notNullable()
        table.integer('age')
        table.integer('role_id').unsigned().notNullable()
        table.foreign('role_id').references('roles.id')
        table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))

    });
};

// columnA

exports.down = function(knex) {
  // DDL
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('roles')
};

