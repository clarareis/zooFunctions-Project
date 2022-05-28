const getOpeningHours = require('../src/getOpeningHours');

const hours = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

describe('Testes da função getOpeningHours', () => {
  it('Testando a função quando não recebe parâmetros', () => {
    expect(getOpeningHours()).toEqual(hours);
  });
  it('Testando a função quando recebe "Monday", retorna a mensagem que o zoológico está fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Testando a função quando recebe "Tuesday", "09:00-AM", retorna a mensagem que o zoológico está aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Testando a função quando recebe "Wednesday", "09:00-PM", retorna a mensagem que o zoológico está fechado', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Testando a função quando recebe "Friday", "09:00-ZM", retorna a mensagem de Erro', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Testando a função quando recebe o dia abreviado e "09:00-ZM", retorna a mensagem de Erro', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError('The day must be valid. Example: Monday');
  });
  it('Testando a função quando recebe "Saturday" e "C9:00-AM", retorna a mensagem de Erro', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError('The hour should represent a number');
  });
  it('Testando a função quando recebe "Sunday" e "09:c0-AM", retorna a mensagem de Erro', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError('The minutes should represent a number');
  });
  it('Testando a função quando recebe "Tuesday" e "14:00-AM", retorna a mensagem de Erro', () => {
    expect(() => getOpeningHours('Tuesday', '14:00-AM')).toThrowError('The hour must be between 0 and 12');
  });
  it('Testando a função quando recebe "Thursday" e "09:70-AM", retorna a mensagem de Erro', () => {
    expect(() => getOpeningHours('Thursday', '09:70-AM')).toThrowError('The minutes must be between 0 and 59');
  });
});
