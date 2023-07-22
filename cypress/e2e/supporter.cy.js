describe('template spec', () => {
  const url = 'localhost:3000/supporter'

  it('should show page', () => {
    cy.visit('localhost:3000/supporter')
  })

  it('should show filed "nombre" and button "Enviar"', ()=>{
    cy.visit(url)
    cy.get("[type='text', name='name']")
    cy.contains('Enviar')
  })
})