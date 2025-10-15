describe('Funcionalidade: Transferência Bancária', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.fazerLoginComCredenciaisValidas()
  })

  it('Deve realizar transferência com dados válidos e exibir mensagem de sucesso', () => {
    cy.realizarTransferencia('João da Silva', 'Maria', '100')
    cy.get('.toast').should('have.text', 'Transferência realizada com sucesso!')
  })

  it('Deve exibir erro ao tentar realizar transferência com valor menor que R$10,00', () => {
    cy.realizarTransferencia('João Silva', 'Geison', '9.99')
    cy.get('.toast').should('have.text', 'O valor da transferência deve ser maior ou igual a R$10,00.')
  })

  it('Deve exigir token de autenticação para transferências acima de R$5.000,00', () => {
    cy.realizarTransferencia('Maria', 'Geison', '6000')
    cy.get('.toast').should('have.text', 'Autenticação necessária para transferências acima de R$5.000,00.')
  })

  it('Deve exibir erro ao informar token de autenticação inválido', () => {
    cy.realizarTransferencia('Maria', 'Geison', '6000')
    cy.validarToken('999999')
    cy.get('.toast').should('have.text', 'Autenticação necessária para transferências acima de R$5.000,00.')
  })

  it('Deve realizar transferência com sucesso ao informar token válido', () => {
    cy.realizarTransferencia('Maria', 'Geison', '6000')
    cy.validarToken('123456')
    cy.contains('button', 'Transferir').click()
    cy.get('.green').should('have.text', 'Transferência realizada com sucesso!')
  })

});
