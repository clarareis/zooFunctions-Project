const { species } = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  if (scheduleTarget === species.name) {
    species.map((element) => element.availability);
  }
  return scheduleTarget;
}

console.log(getSchedule('lions'));
// Retorne um array com os dias da semana em que um animal está disponível para visitação caso o parâmetro da função seja um animal. Por exemplo: [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ];
