describe('test homepage', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      fixture: 'example.json'
    }
    )
    .visit('http://localhost:3000/')
  })

  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.app-title').contains('Turing Cafe Reservations')
    cy.get('[placeholder="Name"]')
  })
})