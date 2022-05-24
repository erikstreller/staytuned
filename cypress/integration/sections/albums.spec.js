describe('Top Album Section', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/json', { fixture: 'albums.json' })
    cy.visit('/')
  })

  it('should render all albums', () => {
    cy.get('#topAlbums').children().should('have.length', 3)
  })

  it('should render all tags', () => {
    cy.get('#tags').children().should('have.length', 2)
  })

  it('should render searched albums', () => {
    cy.get('input').type('al')
    cy.get('#topAlbums').children().should('have.length', 2)
  })

  it('should render albums with tag', () => {
    cy.get('#tags').contains('Blues').click()
    cy.get('#topAlbums').children().should('have.length', 1)
  })
})
