describe('Login', () => {
  it('Login com dados validos deve permitir acesso ao site do banco web', () => {
    cy.visit('http://localhost:4000')
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()

    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  }),

    it.only('Login com dados invalidos não deve permitir acesso ao site do banco web', () => {
      cy.visit('http://localhost:4000')
      cy.get('#username').click().type('julio.lima')
      cy.get('#senha').click().type('12345')
      cy.contains('button', 'Entrar').click()

      cy.contains('.toast', 'Erro no login. Tente novamente').should('be.visible')
    })
})