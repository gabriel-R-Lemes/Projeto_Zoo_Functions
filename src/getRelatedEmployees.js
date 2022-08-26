const data = require('../data/zoo_data');

function isManager(id) {
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  if (id === stephanieId || id === olaId || id === burlId) {
    const person = data.employees.find((element) => element.managers.includes(id));
    if (Object.entries(person).length > 0) {
      return true;
    }
  }
  return false;
}

function getRelatedEmployees(managerId) {
  const veracidade = isManager(managerId);
  if (veracidade !== false) {
    const employeesUnderManager = data.employees
      .filter(({ managers }) => managers.includes(managerId));
    console.log(employeesUnderManager);
    const endGame = employeesUnderManager
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
    return endGame;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
