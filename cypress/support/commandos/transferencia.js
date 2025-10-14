Cypress.Commands.add('realizarTransferencia', (contaOrigem, contaDestino, valor) => {
    cy.selecionarOpcaoDeTranferencia('conta-origem', contaOrigem)
    cy.selecionarOpcaoDeTranferencia('conta-destino', contaDestino)
    cy.get('#valor').click().type(valor)
    cy.contains('button', 'Transferir').click()
})
Cypress.Commands.add('validarToken',token =>{
    cy.get('#token').click().type(token)
})
