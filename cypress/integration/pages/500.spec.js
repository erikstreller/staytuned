import { backHome, indexHeadline } from '../../const'

describe('500 Page', () => {
  it('should display 500 page', () => {
    cy.request({ url: '/500', failOnStatusCode: false })
      .its('status')
      .should('equal', 500)
    cy.visit('/500', { failOnStatusCode: false })
    cy.get('p').should('contain', '500')
  })

  it('should navigate to index page', () => {
    cy.visit('/500', { failOnStatusCode: false })
    cy.get('a[href*="/"]').contains(backHome).click()
    cy.url().should('include', '/')
    cy.get('h1').contains(indexHeadline)
  })
})
