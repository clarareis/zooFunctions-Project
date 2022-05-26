const { species, hours } = require('../data/zoo_data');

const dias = Object.keys(hours);
const horarios = Object.values(hours);
// const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Monday } = hours;
// const animaisDeTerca = species.filter((especie) => especie.availability
//   .includes('Tuesday'))
//  .map((names) => names.name);

const schedule = {};
dias.forEach((dia, index) => {
  schedule[dia] = {
    officeHour: dia === 'Monday'
      ? 'CLOSED' : `Open from ${horarios[index].open}am until ${horarios[index].close}pm`,
    exhibition: dia === 'Monday'
      ? 'The zoo will be closed!' : species.filter((especie) => especie.availability
        .includes(dia)).map((nameAnimal) => nameAnimal.name),
  };
});
// console.log(schedule);

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return schedule;
  }
  return species.find((animal) => animal.name === scheduleTarget).availability;
}
console.log(getSchedule());

module.exports = getSchedule;

// 3 ifs

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
