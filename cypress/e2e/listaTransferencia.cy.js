describe('Funcionalidade: Listagem de Transferências', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.fazerLoginComCredenciaisValidas()
  })

  it('Deve exibir lista de transferências válidas e indicar que está na página 1', () => {
    cy.contains('h4', 'Lista de Transferências').should('be.visible')
    cy.contains('span', 'Página 1').should('contain.text', 'Página 1')
  })

  it('Deve avançar para a página 2 ao clicar no botão "Próxima Página"', () => {
    cy.clicarProximaPagina('Próxima Página')
    cy.validarPaginas('Página 2', 'Página 2')
  })

  it('Deve retornar para a página 1 ao clicar no botão "Página Anterior"', () => {
    cy.clicarProximaPagina('Próxima Página')
    cy.clicarPaginaAnterior('Página Anterior')
    cy.validarPaginas('Página 1', 'Página 1')
  })

})
