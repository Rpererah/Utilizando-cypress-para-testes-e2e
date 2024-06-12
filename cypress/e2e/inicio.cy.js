describe('HomePage', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/')
  })
  it('must render tag h1 with correct text', () => {
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
})