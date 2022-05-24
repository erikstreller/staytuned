import { backHome, indexHeadline } from '../../const'

describe('404 Page', () => {
  it('should display 404 page', () => {
    cy.request({ url: '/404', failOnStatusCode: false })
      .its('status')
      .should('equal', 404)
    cy.visit('/404', { failOnStatusCode: false })
    cy.get('p').should('contain', '404')
  })

  it('should navigate to index page', () => {
    cy.visit('/404', { failOnStatusCode: false })
    cy.get('a[href*="/"]').contains(backHome).click()
    cy.url().should('include', '/')
    cy.get('h1').contains(indexHeadline)
  })
})
