
exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('user_templates', (table) => {
    table.increments();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id').onDelete('CASCADE');
    table.integer('template_id').unsigned();
    table.foreign('template_id').references('templates.id').onDelete('CASCADE');
    table.enu('status', [0,1,2]).defaultTo(0); //0=in-cart :: 1=bought :: 2=inactive 
    table.timestamps();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('user_templates');
}
