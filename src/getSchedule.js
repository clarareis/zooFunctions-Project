const { species, hours } = require('../data/zoo_data');

const dias = Object.keys(hours);
const horarios = Object.values(hours);

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

function getSchedule(scheduleTarget) {
  const getAnimal = species.find((animal) => animal.name === scheduleTarget);
  if (getAnimal) {
    return getAnimal.availability;
  }
  if (Object.prototype.hasOwnProperty.call(schedule, scheduleTarget)) {
    return { [scheduleTarget]: schedule[scheduleTarget] };
  }
  return schedule;
}

/*  Referência: Object.prototype.hasOwnProperty.call -> https://stackoverflow.com/questions/39282873/object-hasownproperty-yields-the-eslint-no-prototype-builtins-error-how-to
e
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty */

// console.log(getSchedule('Monday'));
// console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
