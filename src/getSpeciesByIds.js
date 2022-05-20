const data = require('../data/zoo_data');
// console.log(data.species);

function getSpeciesByIds(...ids) { // criando um array no parametro com o ... e juntando os elementos
  if (ids.length === 0) { // se o não for passado nenhum parâmetro, retorna o array vazio []
    return ids;
  }
  return data.species.filter((element) => ids.includes(element.id)); // o filter vai localizar no arquivo data, o objeto species e filtrar cada elemento deste objeto. retornando... se no meu array, estiver incluído === ao elementopassado.id (do objeto) === true e então ele irá incluir no array com a função filter.
}

module.exports = getSpeciesByIds;
