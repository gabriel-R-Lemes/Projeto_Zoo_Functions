const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const result = data.employees.find((element) => element.firstName === employeeName || element.lastName === employeeName);
  return result;
}
module.exports = getEmployeeByName;
