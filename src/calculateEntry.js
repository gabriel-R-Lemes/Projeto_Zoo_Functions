const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  const newArrayOfAges = entrants.map((element) => element.age);
  newArrayOfAges.map((element) => {
    if (element < 18) {
      child += 1; return child;
    } if (element >= 18 && element < 50) {
      adult += 1; return adult;
    }
    senior += 1; return senior;
  });
  return {
    adult,
    child,
    senior,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) {
    return 0;
  }
  const workObject = countEntrants(entrants);
  const arrayNumbers = Object.values(workObject);
  return ((arrayNumbers[1] * 20.99) + (arrayNumbers[0] * 49.99) + (arrayNumbers[2] * 24.99));
}

module.exports = { calculateEntry, countEntrants };
