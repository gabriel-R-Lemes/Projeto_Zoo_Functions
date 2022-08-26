// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// site utilizado entender a utilização do método includes()
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

function getSpeciesByIds(...ids) {
  const result = data.species.filter((element) => ids.includes(element.id));
  return result;
}

module.exports = getSpeciesByIds;
