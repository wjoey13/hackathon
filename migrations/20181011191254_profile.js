
exports.up = function(knex, Promise) {
    return knex.schema.createTable('profile_page', (profile) => {
        profile.increments('id');
        profile.text('bio');
        profile.text('pics');
        profile.integer('age');
        profile.string('gender');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('profile_page');
};
