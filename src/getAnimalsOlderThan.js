const data = require('../data/zoo_data');

//residents.age >  parametro age
//data.species.name === animal 
function getAnimalsOlderThan(animal, age) {
  const checkingName = data.species.filter((element => element.name === animal))
  const checkingAge = checkingName.every((element) => {
    let result = [];
    for(let i = 0; i <element.residents.length; i+= 1){
      if(element.residents[i].age >= age){
        result.push(element);
      } else {
        return false;
      }
    }
    return result
  })
  return checkingAge;
}
// console.log(data.species)
console.log(getAnimalsOlderThan('otters', 7))

module.exports = getAnimalsOlderThan;
