const data = require('../data/zoo_data');

function countAnimals(parameter) {
  if (parameter === undefined) {
    const numbersOfResidents = data.species.map((element) =>
      ({ [element.name]: element.residents.length }));
    const newObject = Object.assign(...numbersOfResidents);
    return newObject;
  }
  const { specie, sex } = parameter;
  if (sex) {
    return data.species.find((especies) => especies.name === specie).residents
      .filter(({ sex: sex2 }) => sex2 === sex).length;
  }
  return data.species.find((nameAnimal) => nameAnimal.name === specie).residents.length;
}

console.log(countAnimals({ specie: 'elephants' }));

module.exports = countAnimals;

/* { specie: 'elephants', sex: 'male' }
{ specie: 'penguins' }

/*   Retorne a quantidade de animais residentes no zoológico da espécie passada por parâmetro. Por exemplo:
*/
