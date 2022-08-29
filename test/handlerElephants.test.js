const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it ('Testa se handlerElephants() é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  })
  it('Testa se ao receber count como parametro retorna o numero esperado', () => {
    expect(handlerElephants('count')).toBe(4);
  })
  it('Testa se ao receber names, retorna os nomes esperados', () => {
    const nomes = [ 'Ilana', 'Orval', 'Bea', 'Jefferson' ];
    expect(handlerElephants('names')).toEqual(nomes)
  })
  it('Testa se ao receber averageAge, retorna a média de idades', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  })
  it('Testa se for enviado um parametro existe, retorna o esperado', () => {
    expect(handlerElephants('location')).toBe('NW');
  })
  it ('Testa se ao receber nenhum parametro retorna undefines', () => {
    expect(handlerElephants()).toBeUndefined();
  })
  it ('Testa se recer um parametro que não é string retorna um texto', () =>{
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  })
  it('Testa o retorno caso o parâmetro enviado seja inexistente', () => {
    expect(handlerElephants('sucesso')).toBeNull();
  })
});
