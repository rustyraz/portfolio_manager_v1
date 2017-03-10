
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function(table){
    table.increments();
    table.string('email').notNullable().unique();
    table.string('password_digest').notNullable();
    table.boolean('activated').notNullable().defaultTo(false);
    table.string('activation_code');
    table.boolean('isAdmin').notNullable().defaultTo(false)
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
