const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.filter((element) => element.managers)
    .find((manager) => manager === id);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}
console.log(isManager('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

module.exports = { isManager, getRelatedEmployees };
