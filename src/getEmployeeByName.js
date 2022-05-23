const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  data.employees.find((getPerson) => getPerson.firstName === employeeName);
}

module.exports = getEmployeeByName;
