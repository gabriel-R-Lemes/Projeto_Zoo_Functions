const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const personOfId = data.employees.find((element) => element.id === id);
  console.log(personOfId);
  const animalId = personOfId.responsibleFor[0];
  console.log(animalId);
  const animalObject = data.species.find((element) => element.id === animalId);
  console.log(animalObject);
  const oldestAnimal = animalObject.residents.reduce((acc, curr) => {
    console.log(acc);
    console.log(curr);
    if (acc.age > curr.age) return acc;
    return curr;
  });
  const { name, sex, age } = oldestAnimal;
  const result = [name, sex, age];
  return result;
}

module.exports = getOldestFromFirstSpecies;
