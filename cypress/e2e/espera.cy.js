const url = 'localhost:3000/espera'

describe('pagina de esperar las solicitudes', () => {
    it('should /espera exists', () => {
        cy.visit(url)
    })

    it('should text soporte', ()=>{
        cy.visit(url)
        cy.contains('Soporte')
    })
})
