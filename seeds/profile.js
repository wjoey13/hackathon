
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profile_page').del()
    .then(function () {
      // Inserts seed entries
      return knex('profile_page').insert([
        {bio:''},
        {pics:''},
        {age:[]},
        {gender:''}
        
      ]);
    });
};
