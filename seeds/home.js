
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('home_page').del()
    .then(function () {
      // Inserts seed entries
      return knex('home_page').insert([
        {
          startDate:[],
          endDate: []
        },
      
      ]);
    });
};
