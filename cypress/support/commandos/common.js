Cypress.Commands.add('verificarMensagemToast', mensagem => {
   cy.get('.toast').should('have.text', mensagem)
})

Cypress.Commands.add('selecionarOpcaoDeTranferencia', (opçãoDeTranferencia, cliente) => {
    cy.get(`label[for=${opçãoDeTranferencia}]`).parent().as(`campo-${opçãoDeTranferencia}`)
    cy.get(`@campo-${opçãoDeTranferencia}`).click()
    cy.get(`@campo-${opçãoDeTranferencia}`).contains(cliente).click()

})


