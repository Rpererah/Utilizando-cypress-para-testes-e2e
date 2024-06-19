describe('SignUp Form',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000');
    })
    it('User must complete the register',()=>{
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('rafael')
        cy.getByData('email-input').type('rafael@gmail.com')
        cy.getByData('senha-input').type('12345678')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-sucesso').should('exist').and('have.text','Usuário cadastrado com sucesso!')
    })

    
})