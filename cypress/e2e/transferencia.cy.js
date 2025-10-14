describe('transferencia', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })

    it('Deve realizar transferencia com dados válidos', () => {
        cy.realizarTransferencia('João Silva', 'Geison', '10')
    });

    it('Validar que ao tentar transferir acima de 5000,00 é necessario token', () => {
        cy.realizarTransferencia('Maria', 'Geison', '5000.01')
        cy.get('.toast').should('have.text', 'Autenticação necessária para transferências acima de R$5.000,00.')
    });

});