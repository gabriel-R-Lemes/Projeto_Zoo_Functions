const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  const animais = [
    'lions',    'tigers',
    'bears',    'penguins',
    'otters',   'frogs',
    'snakes',   'elephants',
    'giraffes'
  ]
  const dias = [
    'Monday', 'Tuesday',
    'Wednesday', 'Thursday',
    'Friday', 'Saturday',
    'Sunday'
  ]
  if (animais.includes(scheduleTarget)){
    const alvo = data.species.find((element) => element.name === scheduleTarget)
    return alvo.availability;
  } if (dias.includes(scheduleTarget)){
    const animaisDoDia = data.species.filter((element) => element.availability.includes(scheduleTarget));
    const arrayOfTheDay = (Object.entries(data.hours).find((element) => element.includes(scheduleTarget)))
    const hoursArray = Object.values(arrayOfTheDay);
    const officeHour = `Open from ${hoursArray[0]} until ${hoursArray[1]}`
    return{
      scheduleTarget: {
        officeHour,
        exhibition: animaisDoDia,
      }
    }
  }
  return {
    Tuesday: {
      officeHour: `Open from ${data.hours.Tuesday.open} until ${data.hours.Tuesday.close}`,
      exhibition: data.species.filter((element) => element.availability.includes('Tuesday')),
    },
    Wednesday: {
      officeHour: `Open from ${data.hours.Wednesday.open} until ${data.hours.Wednesday.close}`,
      exhibition: data.species.filter((element) => element.availability.includes('Wednesday')),
    },
    Thursday: {
      officeHour: `Open from ${data.hours.Thursday.open} until ${data.hours.Thursday.close}`,
      exhibition: data.species.filter((element) => element.availability.includes('Thursday')),
    },
    Friday: {
      officeHour: `Open from ${data.hours.Friday.open} until ${data.hours.Friday.close}`,
      exhibition: data.species.filter((element) => element.availability.includes('Friday')),
    },
    Saturday: {
      officeHour: `Open from ${data.hours.Saturday.open} until ${data.hours.Saturday.close}`,
      exhibition: data.species.filter((element) => element.availability.includes('Saturday')),
    },
    Sunday: {
      officeHour: `Open from ${data.hours.Sunday.open} until ${data.hours.Sunday.close}`,
      exhibition: data.species.filter((element) => element.availability.includes('Sunday')),
    },
    Monday: { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' },

  }
}
const actual = data.species.filter((element) => element.availability.includes('Friday'))
const expected = [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ];

console.log(actual.map((element) => element.name));
module.exports = getSchedule;
