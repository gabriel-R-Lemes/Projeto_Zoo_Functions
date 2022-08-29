const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Testa se ao colocar o parametro certo retorna correto', () => {
    const end = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    }
    expect(getOpeningHours()).toStrictEqual(end);
  });
  it('Testa se o zoologico estará fechado na Segunda', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Testa se o zoologico estará fechado na Segunda', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  //erros
  it('Testa se da erro ao colocar um dia inválido', () => {
    expect(() => getOpeningHours('Birthday', '10:00-AM')).toThrow('The day must be valid. Example: Monday');
  })
  it('Testa se da erro ao colocar horas e minutos errado', () => {
    expect(() => getOpeningHours('Tuesday', '15:00-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Tuesday', '11:77-AM')).toThrow('The minutes must be between 0 and 59');   
  })
  it('Testa se da erro ao colocar um dia inválido', () => {
    expect(() => getOpeningHours('Birthday', '10:00-AM')).toThrow('The day must be valid. Example: Monday');
  })
});
