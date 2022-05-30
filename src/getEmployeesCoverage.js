const { employees } = require('../data/zoo_data');

const functionForParameterGetId = (id) => employees.find((idElement) => idElement).id;
const functionForParameterGetName = (name) => employees.find((nameElement) => nameElement.name === name);
console.log(functionForParameterGetName('Nigel'));
function getEmployeesCoverage(info) {

}

// console.log(getEmployeesCoverage('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
module.exports = getEmployeesCoverage;

/* [ sem parametros retorna todos os funcionários, com o parâmetro, localiza o funcionário com as informações abaixo.
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
