const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return ids;
  }
  data.species.filter((ids2) => {
    if (ids2.length >= 1) {
      return ids2;
    }
    return ids2;
  });
}

// especies.residents.name -> return em um [name especies]
// destructuring

// Retorne as seguintes informações do arquivo data:

// Se a função receber apenas um id, retorne a espécie do animal referente a este id;

// Se a função receber vários ids, retorne todas as espécies referente a esses ids.

// O que será testado:

// Ao receber como parâmetro um único id, retorna um array com a espécie referente a esse id;

// Ao receber mais de um id, retorna um array com as espécies referentes aos ids.

module.exports = getSpeciesByIds;
