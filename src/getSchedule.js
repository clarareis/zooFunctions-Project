const { species, hours } = require('../data/zoo_data');

const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Monday } = hours;

const programation = {
  Tuesday: {
    officeHour: `Open from ${Tuesday.open}am until ${Tuesday.close}pm`,
  },
  Wednesday: {
    officeHour: `Open from ${Wednesday.open}am until ${Wednesday.close}pm`,
  },
  Thursday: {
    officeHour: `Open from ${Thursday.open}am until ${Thursday.close}pm`,
  },
  Friday: {
    officeHour: `Open from ${Friday.open}am until ${Friday.close}pm`,
  },
  Saturday: {
    officeHour: `Open from ${Saturday.open}am until ${Saturday.close}pm`,
  },
  Sunday: {
    officeHour: `Open from ${Sunday.open}am until ${Sunday.close}pm`,
  },
  Monday: {
    officeHour: `Open from ${Monday.open}am until ${Monday.close}pm`,
  },
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return programation;
  }
  return species.find((animal) => animal.name === scheduleTarget).availability;
}
console.log(getSchedule());

module.exports = getSchedule;

// sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis

/* {
  'Tuesday': {
    'officeHour': 'Open from 8am until 6pm',
    'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
  },
  'Wednesday': {
    'officeHour': 'Open from 8am until 6pm',
    'exhibition': [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
  }, */
