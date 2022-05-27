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
  if (scheduleTarget === undefined || species.find((animal) => animal.name) !== scheduleTarget) {
    return schedule;
  }
}

console.log(getSchedule('penguins'));

module.exports = getSchedule;

// DICAS:
// 3 ifs
// if (scheduleTarget === undefined || (schedule condição  && schedule condição ))

// caso os parâmetros não seja um animal e dia, retorna um objeto com os horários do dia e os animais em exibição
// getSchedule('qualquercoisa')
