exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable()
      users.string('password', 200).notNullable()
      users.timestamps(false, true)
    })

       // plants TABLE
       .createTable('plants', table => {
        table.increments('id')
        table.string('species', 128).notNullable()
        table.string('nick_name', 128).notNullable()
        table.binary('image', 255)
        table.decimal('h2o_frequency', 2, 1)
        table
          .integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
      })
}

exports.down = async (knex) => {
  await knex.schema
   .dropTableIfExists('plants')
   .dropTableIfExists('users')
}
