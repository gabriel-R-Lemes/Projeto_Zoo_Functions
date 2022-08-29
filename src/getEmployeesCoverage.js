const data = require('../data/zoo_data');

function getEmployeesCoverage(objeto) {
  const target = data.employees.find(({ id, firstName, lastName }) => id === objeto
    || firstName === objeto || lastName === objeto);
  // console.log(objeto);
  console.log(target);
  return 'oie';
}

console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
module.exports = getEmployeesCoverage;
