const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal !== undefined) {
    const teste = Object.values(animal);
    if (teste.length >= 2) {
      const specie = data.species.find((element) => element.name === teste[0]);
      const result = specie.residents.filter((element) => element.sex === teste[1]);
      return result.length;
    }
    const specie = data.species.find((element) => element.name === teste[0]);
    const result = specie.residents.length; return result;
  }
  const allSpeciesName = data.species.map((element) => element.name);
  const residentsNumber = data.species.map((element) => element.residents.length);
  const objeto = {};
  allSpeciesName.forEach((k, i) => { objeto[k] = residentsNumber[i]; });
  return objeto;
}

module.exports = countAnimals;
