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
    cy.get('form').submit()
    cy.get('button').contains('Make Reservation')
    cy.get('.res > :nth-child(1) > :nth-child(1)').contains('Christie')
    cy.get('.res > :nth-child(1) > :nth-child(2)').contains('12/29')
    cy.get('.res > :nth-child(1) > :nth-child(3)').contains('7:00')
    cy.get('.res > :nth-child(1) > :nth-child(4)').contains('Number Of Guest: 12')
  })
})