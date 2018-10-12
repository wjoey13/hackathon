
exports.up = function(knex, Promise)   {
    return knex.schema.createTable('home_page', (home) => {
        home.increments('id');
        home.date('startDate');
        home.date('endDate');         
    })
};


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('home_page');
};
