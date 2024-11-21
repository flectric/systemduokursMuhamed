describe('Example tests', () => {
  beforeEach('Visit page', () => {
    cy.visit('https://automationexercise.com/')
  })

  // This test finds the "Contact Us" button, clicks on it,
  // then checks if the page where it is possible to enter a name and email has loaded.
  // It enters the name and email, clearing any pre-filled values if present.
  // After that, it clicks the "Submit" button,
  // verifies whether a success message has been displayed,
  // and then navigates back to the homepage.

  it('Navigate to Contact us', () => {
    cy.get('a[href="/contact_us"]').should('be.visible').click()
    cy.url().should('contain', 'contact_us')
    cy.get('#contact-page').contains('Contact').should('be.visible')
    cy.get('[data-qa="name"]')
      .should('be.visible')
      .and('not.be.disabled')
      .clear()
      .type('Muhamed')
    cy.get('[data-qa="email"]')
      .should('be.visible')
      .and('not.be.disabled')
      .clear()
      .type('muhamedkljajic@example.com')
    cy.get('[data-qa="submit-button').click()
    cy.get('.alert-success').should('be.visible')
    cy.contains('Home').should('be.visible').click()
  })
})