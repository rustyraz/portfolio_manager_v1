
exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('hobbies', (table) => {
    table.increments();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id').onDelete('CASCADE');
    table.jsonb('hobbies_data');
    table.timestamps();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('hobbies');
};
