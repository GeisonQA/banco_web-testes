describe('transferencia', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })
    it('Deve realizar transferencia com dados válidos', () => {
        cy.realizarTransferencia('João da Silva', 'Maria', '100')
        cy.get('.toast').should('have.text', 'Transferência realizada com sucesso!')
    })

    it('Deve realizar transferencia com dados válidos', () => {
        cy.realizarTransferencia('João Silva', 'Geison', '9.99')
        cy.get('.toast').should('have.text', 'O valor da transferência deve ser maior ou igual a R$10,00.')
    })

    it('Validar que ao tentar transferir acima de 5000,00 é necessario token', () => {
        cy.realizarTransferencia('Maria', 'Geison', '5000.01')
        cy.get('.toast').should('have.text', 'Autenticação necessária para transferências acima de R$5.000,00.')
    })

    it('Validar mensagem de erro para transferência com token inválido.', () => {
        cy.realizarTransferencia('Maria', 'Geison', '5000.01')
        cy.validarToken('1234')
        cy.get('.toast').should('have.text', 'Autenticação necessária para transferências acima de R$5.000,00.')

    })

    it('Validar que transferencia é realizada com token valido', () => {
        cy.realizarTransferencia('Maria', 'Geison', '6000')
        cy.validarToken('123456')
        cy.contains('button', 'Transferir').click()
        cy.get('.green').should('have.text', 'Transferência realizada com sucesso!')

    })


});