const data = require('../data/zoo_data');

function nomeAnimal(nome) {
  const alvo = data.species.find((element) => element.name === nome);
  return alvo.availability;
}
function weekDay(day) {
  if (day === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  const animaisDoDia = data.species.filter((element) => element.availability.includes(day));
  const arrayOfTheDay = (Object.entries(data.hours).find((element) => element.includes(day)));
  const hoursArray = Object.values(arrayOfTheDay);
  const officeHour = `Open from ${hoursArray[1].open}am until ${hoursArray[1].close}pm`;
  return {
    [day]: {
      officeHour,
      exhibition: animaisDoDia.map((element) => element.name),
    },
  };
}

function funcOfficeHour(dia) {
  const diaEscolhido = Object.entries(data.hours);
  const arrayDay = diaEscolhido.find((element) => element.includes(dia));
  console.log(arrayDay);
  return `Open from ${arrayDay[1].open}am until ${arrayDay[1].close}pm`;
}
function funcExib(dia) {
  return data.species.filter((element) => element.availability
    .includes(`${dia}`)).map((element) => element.name);
}
function allDays(weekDays) {
  const objeto = {};
  for (let i = 0; i < weekDays.length; i += 1) {
    if (weekDays[i] === 'Monday') {
      objeto[weekDays[i]] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      objeto[weekDays[i]] = {
        officeHour: funcOfficeHour(weekDays[i]),
        exhibition: funcExib(weekDays[i]),
      };
    }
  }
  return objeto;
}
function getSchedule(scheduleTarget) {
  const animais = ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs',
    'snakes', 'elephants', 'giraffes'];
  const dias = [
    'Monday', 'Tuesday',
    'Wednesday', 'Thursday',
    'Friday', 'Saturday',
    'Sunday',
  ];
  if (animais.includes(scheduleTarget)) {
    const result = nomeAnimal(scheduleTarget);
    return result;
  } if (dias.includes(scheduleTarget)) {
    const result = weekDay(scheduleTarget);
    return result;
  }
  return allDays(dias);
}

module.exports = getSchedule;
