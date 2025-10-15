describe('Funcionalidade: Login do Usuário', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  it('Deve permitir acesso ao sistema quando o usuário informar credenciais válidas', () => {
    cy.fazerLoginComCredenciaisValidas()
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Deve exibir mensagem de erro quando o usuário informar credenciais inválidas', () => {
    cy.fazerLoginComCredenciaisInvalidas()
    cy.verificarMensagemToast('Erro no login. Tente novamente.')
  })

})
