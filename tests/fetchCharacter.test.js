require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

// estrutura padrao para descrever de forma geral os testes e usar codigos assincronos
describe('Teste a função fetchCharacter', () => {
/*   it('descricao', async () => {
    await requisicao();
  });
});

describe('descricao geral', () => {
  it('descricao', async () => {
    await reauisicao();
  }); */
  it('verifica se o nome da personage e woner woman', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toEqual('Wonder Woman');
  });

  it('verifica se retorna erro ao executar a funcao sem parametro', async () => {
    const failRequest = await fetchCharacter();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  });

  it('Verifica se retorna \ "Invalid id\" ao executar a funcao', async () => {
    const response = await fetchCharacter('parametro qualquer');
    expect(response).toBe('Invalid id');
  });

  it('Verifica se fetch e uma chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});