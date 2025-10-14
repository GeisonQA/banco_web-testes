Cypress.Commands.add('fazerLoginComCredenciaisValidas', () => {
    cy.fixture('credenciais').then(credenciais => {
        cy.get('#username').click().type(credenciais.validas.username)
        cy.get('#senha').click().type(credenciais.validas.senha)
    })
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('fazerLoginComCredenciaisInvalidas', () => {
    cy.fixture('credenciais').then(credenciais => {
        cy.get('#username').click().type(credenciais.invalidas.username)
        cy.get('#senha').click().type(credenciais.invalidas.senha)
    })
    cy.contains('button', 'Entrar').click()
})


