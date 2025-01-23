describe('Main Page', () => {
  describe('happy path', () => {
    beforeEach(() => {
      cy.intercept('GET', '**/api/v1/schedules', {
        statusCode: 200,
        fixture: "schedules"
      }).as('getSchedules')
      cy.visit('http://localhost:3001/')
    })

    it('displays title on page load', () => {
      cy.wait('@getSchedules')
      cy.get('h1').contains('Music Festival Schedules')
    })

    it('displays schedule posters on page load', () => {
      cy.wait('@getSchedules')
      cy.get('.schedule-poster').should('have.length', 8)

      cy.get('.schedule-poster').first().find('img').should('have.attr', 'src', '/porto.jpg')
      cy.get('.schedule-poster').first().find('img').should('have.attr', 'alt', "Poster of Alora's Thursday Schedule")
      cy.get('h2').contains("Alora's Thursday Schedule for 2023-06-08")

      cy.get('.schedule-poster').last().find('img').should('have.attr', 'src', '/porto.jpg')
      cy.get('.schedule-poster').last().find('img').should('have.attr', 'alt', "Poster of Matt's Electric Vibes")
    })
  })

  describe('sad path', () => {
    beforeEach(() => {
      cy.intercept('**/api/v1/schedules', {
        forceNetworkError: true
      }).as('getSchedulesError')

      cy.visit('http://localhost:3001/')
    })

    it('displays an alert when the API call fails', () => {
      cy.wait('@getSchedulesError')
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('Failed to fetch Schedules. Please try again later.')
      })
    })
  })
})