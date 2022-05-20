const data = require('../data/zoo_data');
// console.log(data.species);

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return ids;
  }
  return data.species.filter((element) => ids.includes(element.id));
}

module.exports = getSpeciesByIds;
