const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const empregados = data.employees.filter((element) =>
      element.managers.includes(managerId));
    return empregados.map((name) =>
      `${name.firstName} ${name.lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

/* function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    data.employees.filter((element) =>
      element.managers.includes(managerId)).map((name) =>
      `'${name.firstName} ${name.lastName}'`);
  }
} */
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
// console.log(getRelatedEmployees('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

module.exports = { isManager, getRelatedEmployees };
