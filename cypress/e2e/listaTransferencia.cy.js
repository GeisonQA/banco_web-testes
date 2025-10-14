describe('listaTransferencia', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()

    })

    it('validar que a tela de transferencia exibe uma lista de transferencias validas e pagina 1', () => {
        cy.contains('h4', 'Lista de Transferências').should('be.visible')
        cy.contains('span', 'Página 1').should('be.visible')
    })

    it('Validar que ao clicar na proxima pagina de transferencias, ela apresenta pagina 2', () => {
        cy.contains('button', 'Próxima Página').click()
        cy.contains('span', 'Página 2').should('contain.text', 'Página 2')
    })

    it('Validar que ao clicar em pagina anterior, ela apresenta pagina 1', () => {
        cy.contains('button', 'Próxima Página').click()
        cy.contains('button', 'Página Anterior').click()
        cy.contains('span','Página 1' ).should('contain.text', 'Página 1')

    })

})