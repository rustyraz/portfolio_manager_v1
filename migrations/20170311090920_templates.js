exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('templates', (table) => {
    table.increments();
    table.string('name').notNullable().unique();
    table.float('price').notNullable().defaultTo(0);
    table.boolean('active').defaultTo(true);
    table.timestamps();
    //additional fields CATEGORY, VERSION
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('templates');
};
