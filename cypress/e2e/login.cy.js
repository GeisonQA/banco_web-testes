
describe('Login', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.screenshot('login')
  });

  it('Login com dados validos deve permitir acesso ao site do banco web', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.validas.username)
      cy.get('#senha').click().type(credenciais.validas.senha)
    })
    cy.contains('button', 'Entrar').click()

    cy.contains('h4', 'Realizar Transferência').should('be.visible')
    cy.screenshot('transferencia')
  }),

    it('Login com dados invalidos não deve permitir acesso ao site do banco web', () => {
      cy.fixture('credenciais').then(credenciais => {
        cy.get('#username').click().type(credenciais.invalidas.username)
        cy.get('#senha').click().type(credenciais.invalidas.senha)
      })
      cy.contains('button', 'Entrar').click()

      cy.contains('.toast', 'Erro no login. Tente novamente').should('be.visible')
      cy.screenshot('login-erro')
    })
})