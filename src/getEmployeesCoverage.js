const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const information = employees;

function getEmployeesCoverage(info) {
  return employees.find((get) => (get.firstName === info
    || get.lastName === info || get.id === info));
}

console.log(getEmployeesCoverage('Nelson'));
module.exports = getEmployeesCoverage;

/* [ sem parametros
{
"id":  "c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1",
"fullName":  "Nigel Nelson",
"species": [ "lions", "tigers" ],
"locations": [ "NE", "NW" ],
},
] */

/* E deve retornar um objeto no seguinte formato:

{
id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
fullName: "Sharonda Spry", // nome completo: firstName + lastName
species: [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
locations: [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
}
 */
