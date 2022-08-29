const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function nomeAnimal (nome) {
  const alvo = data.species.find((element) => element.name === nome)
  return alvo.availability;
}
function weekDay (day) {
  const animaisDoDia = data.species.filter((element) => element.availability.includes(day));
  const arrayOfTheDay = (Object.entries(data.hours).find((element) => element.includes(day)))
  const hoursArray = Object.values(arrayOfTheDay);
  const officeHour = `Open from ${hoursArray[1].open} until ${hoursArray[1].close}`
  return{
    day: {
      officeHour,
      exhibition: animaisDoDia.map((element)=> element.name),
    }
  }
}

function allDays () {
  return {
    Tuesday: {
      officeHour: `Open from ${data.hours.Tuesday.open} until ${data.hours.Tuesday.close}`,
      exhibition: data.species.filter((element) => element.availability
      .includes('Tuesday')).map((element) => element.name),
    },
    Wednesday: {
      officeHour: `Open from ${data.hours.Wednesday.open} until ${data.hours.Wednesday.close}`,
      exhibition: data.species.filter((element) => element.availability
      .includes('Wednesday')).map((element) => element.name),
    },
    Thursday: {
      officeHour: `Open from ${data.hours.Thursday.open} until ${data.hours.Thursday.close}`,
      exhibition: data.species.filter((element) => element.availability
      .includes('Thursday')).map((element) => element.name),
    },
    Friday: {
      officeHour: `Open from ${data.hours.Friday.open} until ${data.hours.Friday.close}`,
      exhibition: data.species.filter((element) => element.availability
      .includes('Friday')).map((element) => element.name),
    },
    Saturday: {
      officeHour: `Open from ${data.hours.Saturday.open} until ${data.hours.Saturday.close}`,
      exhibition: data.species.filter((element) => element.availability
      .includes('Saturday')).map((element) => element.name),
    },
    Sunday: {
      officeHour: `Open from ${data.hours.Sunday.open} until ${data.hours.Sunday.close}`,
      exhibition: (data.species.filter((element) => element.availability
      .includes('Sunday'))).map((element) => element.name),
    },
    Monday: { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' },
  }
}

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
    const result = nomeAnimal(scheduleTarget);
    return result
  } if (dias.includes(scheduleTarget)){
    const result = weekDay(scheduleTarget);
    return result;
  }
  return  allDays()  
}
console.log(getSchedule())

module.exports = getSchedule;