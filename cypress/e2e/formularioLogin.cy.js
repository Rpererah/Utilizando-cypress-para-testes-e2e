describe('Login Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })
    it('Cannot enter with wrong email', () => {
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('rafael@gmail')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
    })

    it('Cannot send a email with blank inputs',()=>{
        cy.getByData('botao-login').click()
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório')
    })
})