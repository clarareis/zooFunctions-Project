const data = require('../data/zoo_data');

// como faço para somar todos os animais?

function countAnimals(parameter) {
  const residentes = data.species;
  let counts = 0;
  for (let index = 0; index < residentes.length; index += 1) {
    if (residentes[index].name === parameter) {
     counts.push += 1;
    }
  }
}
/* data.species.map((element, index) => {
  if (parameter === undefined) {
    return console.log(element.residents.name);
  }
  return index; */
countAnimals({ specie: 'penguins' });
module.exports = countAnimals;
