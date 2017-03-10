
exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('skills', (table) => {
    table.increments();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id').onDelete('CASCADE');
    table.jsonb('skills_data');
    table.timestamps();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('skills');
};
