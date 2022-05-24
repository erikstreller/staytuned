describe('Album Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/json', { fixture: 'albums.json' })
    cy.visit('/')
  })

  it('should display album page with content', () => {
    cy.get('#topAlbums').contains('Bonnie Raitt').click()
    cy.wait(2000)
    cy.url().should('include', '/1603517564')
    cy.get('p').should('contain', 'Bonnie Raitt')
    cy.get('#price').should('contain', '$9.99')
  })
})
