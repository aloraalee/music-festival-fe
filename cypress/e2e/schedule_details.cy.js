describe('schedule details spec', () => {
  describe('happy path', () => {
    beforeEach(() => {
      cy.intercept('GET', '**/api/v1/schedules', {
        statusCode: 200,
        fixture: "schedules"
      }).as('getSchedules')

      cy.intercept('GET', '**/api/v1/schedules/*', {
        statusCode: 200,
        fixture: "schedule_details_1"
      }).as('getScheduleDetails')

      cy.visit('http://localhost:3001/')
    })

    it('displays title on page load', () => {
      cy.wait('@getSchedules')
      cy.get('h1').contains('Music Festival Schedules')
    })

    it('displays schedule details on page load', () => {
      cy.get(".schedule-poster").first().click()
      
      cy.get('h2').contains("Alora's Thursday Schedule")
      cy.get('img').should('have.attr', 'src', '/Logo_Primavera_Sound.webp')

      cy.get('p').contains('Artist: Baby Keem')
      cy.get('p').contains('Stage: Porto Main Stage')
      cy.get('p').contains('Showtime: 2023-06-08T21:00:00.000Z')

      cy.get('p').contains('Artist: Kendrick Lamar')
      cy.get('p').contains('Stage: Porto Main Stage')
      cy.get('p').contains('Showtime: 2023-06-08T22:30:00.000Z')
    })

    it('displays updated schedule details after deleting a show', () => {
      cy.wait('@getSchedules')
      cy.get(".schedule-poster").first().click()
      cy.wait('@getScheduleDetails')

      cy.intercept('DELETE', '**/api/v1/schedules/*/remove_show/*', {
        statusCode: 200,
        fixture: "shows_after_deletion"
      }).as('deleteShow')

      cy.get(".delete-btn").first().click()
      cy.wait('@deleteShow')

      cy.get('p').should('not.contain', 'Artist: Baby Keem')
      cy.get('p').should('not.contain', 'Showtime: 2023-06-08T21:00:00.000Z')

      cy.get('p').contains('Artist: Kendrick Lamar')
      cy.get('p').contains('Stage: Porto Main Stage')
      cy.get('p').contains('Showtime: 2023-06-08T22:30:00.000Z')
    })
  })
})