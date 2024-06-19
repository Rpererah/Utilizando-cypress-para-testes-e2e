describe('SignUp Form',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000');
    })
    it('User cannot use the same email to register',()=>{
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('rafael')
        cy.getByData('email-input').type('rafael@gmail.com')
        cy.getByData('senha-input').type('12345678')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','E-mail já cadastrado!')
    })

    it('User cannot put a blank name to register',()=>{
        cy.getByData('botao-cadastro').click()
        cy.getByData('email-input').type('rafael@gmail.com')
        cy.getByData('senha-input').type('12345678')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O campo de nome é obrigatório')
    })

    //test fail need to fixed the code
    it('User cannot put a blank email to register',()=>{
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('rafael')
        cy.getByData('senha-input').type('12345678')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O campo de email é obrigatório')
    })

    //test fail need to fixed the code
    it('User cannot put a blank password to register',()=>{
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('rafael')
        cy.getByData('email-input').type('rafael123@gmail.com')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O campo de senha é obrigatório')
    })
})