
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function(table){
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('email').notNullable().unique();
    table.string('password_digest').notNullable();
    table.boolean('activated').notNullable().defaultTo(false);
    table.string('activation_code');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
