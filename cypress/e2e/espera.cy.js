const url = 'localhost:3000/espera'

describe('pagina de esperar las solicitudes', () => {
    it('should /espera exists', () => {
        cy.visit(url)
    })

    it('should text soporte', ()=>{
        cy.visit(url)
        cy.contains('Soporte')
        cy.contains('Solicitudes')
    })

    it('should', ()=>{
        const data = {
            oficina: 'test',
            usuario: 'cypress test',
            descripcion: 'problema cypress test',
            coordinacion: 'test'
        }

        cy.visit('localhost:3000/solicitud')

        cy.get('[name="oficina"]').type(data.oficina)
        cy.get('[name="coordinacion"]').type(data.coordinacion)
        cy.get('[name="usuario"]').type(data.usuario)
        cy.get('[name="descripcion"]').type(data.descripcion)

        cy.contains('Enviar').click()
        cy.visit(url)

        cy.contains(data.oficina)
        cy.contains(data.usuario)
        cy.contains(data.coordinacion)
        cy.contains(data.descripcion)
    })
})
