Cypress.Commands.add('realizarTransferencia', (contaOrigem, contaDestino, valor) => {
    cy.selecionarOpcaoDeTranferencia('conta-origem', contaOrigem)
    cy.selecionarOpcaoDeTranferencia('conta-destino', contaDestino)
    cy.get('#valor').click().type(valor)
    cy.contains('button', 'Transferir').click()
})
Cypress.Commands.add('validarToken', token => {
    cy.get('#token').click().type(token)
})

Cypress.Commands.add('clicarProximaPagina', (pagina1,pagina2) => {
    cy.contains('button', pagina1).click()
})

Cypress.Commands.add('clicarPaginaAnterior', (pagina1,pagina2) => {
    cy.contains('button', pagina1).click()
})
Cypress.Commands.add('validarPaginas',(pagina1,pagina2)=>{
    cy.get('#transferencias-list > .collection-item').should('have.length', 5)
    cy.contains('span', pagina2).should('contain.text', pagina2)
    cy.contains('span', pagina1 ).should('contain.text', pagina1)
})