import { indexHeadline } from '../../const'

describe('Hero Section', () => {
  it('should display headline on index page', () => {
    cy.visit('/')
    cy.get('h1').should('contain', indexHeadline)
  })
})
