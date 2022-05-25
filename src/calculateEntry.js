const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((agesChild) => agesChild.age < 18).length;
  const adult = entrants.filter((agesAdults) =>
    (agesAdults.age >= 18) && (agesAdults.age < 50)).length;
  const senior = entrants.filter((agesAdults) => agesAdults.age >= 50).length;
  if (entrants) {
    return {
      child,
      adult,
      senior,
    };
  }
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  //  const valueTicket = countEntrants();
  // const valueKids = data.prices.child;
  // const valueAdult = data.prices.adult;
  // const valueSenior = data.prices.senior;

  Object.entries(countEntrants(entrants)).reduce((acc, curr) => acc[1] + curr[1]);
}

/* const entrants1 = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]; */
// const entrants2 = [{ name: 'Lara Carvalho', age: 5 }];
// const entrants3 = [{ name: 'Núbia Souza', age: 18 }];
// const entrants4 = [{ name: 'Carlos Nogueira', age: 50 }];

// console.log(countEntrants(entrants1));

// console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
