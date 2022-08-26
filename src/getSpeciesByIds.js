//const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

//site utilizado entender a utilização do método includes()
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
function getSpeciesByIds(...ids) {
  const result = data.species.filter((element) => ids.includes(element.id))
  return result
}
console.log(data.employees)
console.log( getSpeciesByIds(
  '0938aa23-f153-4937-9f88-4858b24d6bce',
  'e8481c1d-42ea-4610-8e11-1752cfc05a46',
));
module.exports = getSpeciesByIds;
