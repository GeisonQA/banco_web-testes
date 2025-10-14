
describe('Login', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  it('Login com dados validos deve permitir acesso ao site do banco web', () => {
    
    cy.fazerLoginComCredenciaisValidas()
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  }),

    it.only('Login com dados invalidos não deve permitir acesso ao site do banco web', () => {
      cy.fazerLoginComCredenciaisInvalidas()
      cy.verificarMensagemToast('Erro no login. Tente novamente.') 
    })
})