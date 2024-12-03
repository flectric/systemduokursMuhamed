describe('Contact us tests', () => {
  beforeEach('Visit page', () => {
    cy.visit('https://automationexercise.com/')
  })

  it('Navigate to contact us form', () => {
    cy.get('a[href*="contact"]').should('be.visible').click()
    cy.url().should('contain', 'contact_us')
    cy.contains('h2', 'contact us', { matchCase: false }).should('be.visible')
    cy.get('div.bg').find('h2').contains('contact us', { matchCase: false })
    cy.get('h2').first().should('be.visible') //Contact us element
    cy.get('h2').eq(1).should('be.visible') // Get in touch element
  })

  it('Send message trough contact us form', () => {
    // When
    cy.get('a[href*="contact"]').should('be.visible').click()

    // Then
    cy.url().should('contain', 'contact_us')

    // When
    cy.get('[data-qa="name"]').should('be.visible').clear().type('Muhamed')
    cy.get('[data-qa="email"]')
      .should('be.visible')
      .clear()
      .type('muhamedkljajic@example.com')
    cy.get('[data-qa="subject"]').should('be.visible').clear().type('Something')
    cy.get('[data-qa="message"]').should('be.visible').clear().type('Message')

    // And
    cy.get('[data-qa="submit-button"]').should('be.enabled').click()

    // Then
    cy.get('.alert-success').should('be.visible')
    cy.get('.alert-success').contains('Success', { matchCase: false })
  })
})
