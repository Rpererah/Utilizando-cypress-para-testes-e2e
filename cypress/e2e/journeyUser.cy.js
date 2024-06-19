describe('User Journey',()=>{
it('must user acess application , do transaction and logout for aplication',()=>{
    cy.visit('/')
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('rafael@gmail.com')
    cy.getByData('senha-input').type('12345678')
    cy.getByData('botao-enviar').click()

    cy.location('pathname').should('eq','/home')

    cy.getByData('select-opcoes').select('Transferência')
    cy.getByData('form-input').type(80)
    cy.getByData('realiza-transacao').click()

    cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80')

    cy.getByData('botao-sair').click()
    cy.location('pathname').should('eq','/')
})
})