describe('formulario de solicitud de soporte técnico', () => {
  it('should show page', () => {
    cy.visit('localhost:3000/solicitud')
  })

  it('should have title "Solicitud de Soporte Técnico"', () => {
    cy.visit('localhost:3000/solicitud')
    cy.contains('Solicitud de Soporte Técnico')
  })

  it('should have fields "oficina, coordinacion, usuario, solicitado por, descripcion de la solicitud" and button "Enviar"', () => {
    cy.visit('localhost:3000/solicitud')
    cy.get('[name="oficina"]').type('otic')
    cy.get('[name="coordinacion"]').type('soporte')
    cy.get('[name="usuario"]').type('jose')
    cy.get('[name="solicitado"]').type('jose')
    cy.get('[name="descripcion"]').type('problemas')

    cy.contains('Enviar').click()
  })
  
  it('should show toast with text "Solicitud Enviada"', ()=>{
    cy.visit('localhost:3000/solicitud')
    cy.get('[name="oficina"]').type('otic')
    cy.get('[name="coordinacion"]').type('soporte')
    cy.get('[name="usuario"]').type('jose')
    cy.get('[name="solicitado"]').type('jose')
    cy.get('[name="descripcion"]').type('problemas')

    cy.contains('Enviar').click()
    
    cy.contains('Solicitud Enviada')
  })
})
