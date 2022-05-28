const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getSpecie = employees.find((person) => person.id === id).responsibleFor
    .find((element) => element[0]);
  const animal = species.find((animals) => animals.id === getSpecie).residents;
  const oldestAnimal = animal.reduce((acc, curr) => ((acc.age > curr.age) ? acc : curr));
  return Object.values(oldestAnimal);
}

console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

module.exports = getOldestFromFirstSpecies;
