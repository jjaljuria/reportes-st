describe('template spec', () => {
  const url = 'localhost:3000/supporter'

  it('should show page', () => {
    cy.visit('localhost:3000/supporter')
  })

  it('should show filed "nombre" and button "Enviar"', ()=>{
    cy.visit(url)
    cy.get("[name='name']")
    cy.contains('Enviar')
  })

  it('should add supporter and delete this supporter', ()=>{
    const supporter = 'Cypress test'
    
    cy.visit(url)
    cy.get("[name='name']").type(supporter)
    cy.contains('Enviar').click()

    const li = cy.contains(supporter)
    li.contains('Eliminar').click()

    cy.contains(supporter).should('not.exist')
    
  })
})