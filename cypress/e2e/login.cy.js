describe('login', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4000');
    cy.screenshot('tela-inicial')
    
  })

    it('Login com dados validos deve permitir efetuar login', () => {

      cy.get('#username').click().type('julio.lima');
      cy.get('#senha').click().type("123456");
      cy.screenshot('dados-login')
      cy.contains('button', 'Entrar').click();
      

      cy.contains('h4', 'Realizar Transferência').should('be.visible');
      cy.screenshot('tela-apos-login')
      
    });

  it('login com dados invalidos deve apresentar erro', () => {

    cy.get('#username').click().type('julio.lima');
    cy.get('#senha').click().type("12345");
    cy.contains('button', 'Entrar').click();

    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.');

  });
});