const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // eslint-disable-next-line no-unused-expressions
  // const getName = data.species;
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((element) =>
    element.firstName === employeeName || element.lastName === employeeName);
}
console.log(getEmployeeByName('Nigel'));

getEmployeeByName('Nigel');
module.exports = getEmployeeByName;
// => getPerson.firstName === employeeName;
