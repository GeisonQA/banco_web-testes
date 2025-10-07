describe('transferencia', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.fixture('credenciais').then(credenciais => {
            cy.get('#username').click().type(credenciais.validas.username)
            cy.get('#senha').click().type(credenciais.validas.senha)
        })
        cy.contains('button', 'Entrar').click()
    })

    it('Deve realizar transferencia com dados válidos', () => {
         cy.get('label[for="conta-origem"]').parent().as('campo-contaOrigem')
         cy.get('@campo-contaOrigem').click()
        cy.fixture('usuarios').then(usuarios =>{
            cy.get('@campo-contaOrigem').contains(usuarios.usuario1.Geison).click()
        }) 
         

         cy.get('label[for="conta-destino"]').parent().as('campo-contaDestino')
         cy.get('@campo-contaDestino').click()
         cy.get('@campo-contaDestino').contains('João Silva').click()

         cy.get('#valor').click().type('10')
         cy.contains('button', 'Transferir').click()

         cy.get('.toast').should('have.text','Transferência realizada!')
    });

    it('Deve negar a transferência com valor abaixo de 10 reais', () => {
         cy.get('label[for="conta-origem"]').parent().as('campo-contaOrigem')
         cy.get('@campo-contaOrigem').click()
         cy.get('@campo-contaOrigem').contains('Geison').click()

         cy.get('label[for="conta-destino"]').parent().as('campo-contaDestino')
         cy.get('@campo-contaDestino').click()
         cy.get('@campo-contaDestino').contains('João Silva').click()

         cy.get('#valor').click().type('9.99')
         cy.contains('button', 'Transferir').click()

         cy.get('.toast').should('have.text','O valor da transferência deve ser maior ou igual a R$10,00.')
    })
});