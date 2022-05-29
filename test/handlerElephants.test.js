const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testando a função handlerElephants quando o parâmetro não existe, retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Testando quando a função handlerElephants não recebe uma strig, retorna um Error', () => {
    expect(typeof handlerElephants(0)).toBe('string');
  });
  it('Testando o argumento count, deve retornar 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testando o argumento names, deve retornar um array de nomes dos residentes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Testando o argumento averageAge, deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Testando se o parâmetro for null, retorna null', () => {
    expect(handlerElephants('Age')).toBeFalsy();
  });
  it('Testando se o parâmetro for "residents", retorna um array com os nomes de todos os residentes', () => {
    expect(handlerElephants('residents')).toEqual([
      { name: 'Ilana', sex: 'female', age: 11 },
      { name: 'Orval', sex: 'male', age: 15 },
      { name: 'Bea', sex: 'female', age: 12 },
      { name: 'Jefferson', sex: 'male', age: 4 },
    ]);
  });
});
