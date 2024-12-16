describe('Registration tests', () => {
  let email
  beforeEach('Navigate to automationexercise', () => {
    email = `muhamed${Date.now()}@example.com`
    cy.visit('https://automationexercise.com/')
  })

  it('Succesufll login after registration', () => {
    // When
    cy.get('a[href*="login"]').should('be.visible').click()

    // Then
    cy.get('.signup-form').should('be.visible')

    // When
    cy.get('[data-qa="signup-name"]').clear().type('Muhamed')
    cy.get('[data-qa="signup-email"]').clear().type(email)
    cy.get('[data-qa="signup-button"]').click()

    // Then
    cy.get('form[action*="signup"]').should('be.visible')

    // When
    cy.get('input[type="radio"]').should('be.visible').check('Mr')
    cy.get('[data-qa="email"]')
      .should('be.disabled')
      .and('have.attr', 'value', email)
    cy.get('[data-qa="password"]').clear().type('Test123')
    cy.get('[data-qa="days"]').select(22)
    cy.get('[data-qa="months"]').select(7)
    cy.get('[data-qa="years"]').select('1996')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('[data-qa="first_name"]').clear().type('Muhamed')
    cy.get('[data-qa="last_name"]').clear().type('Kljajic')
    cy.get('[data-qa="company"]').clear().type('MIZ')
    cy.get('[data-qa="address"]').clear().type('Bistrik do br. 8')
    cy.get('[data-qa="country"]').select('United States')
    cy.get('[data-qa="state"]').clear().type('New York')
    cy.get('[data-qa="city"]').clear().type('Sarajevo')
    cy.get('[data-qa="zipcode"]').clear().type('71000')
    cy.get('[data-qa="mobile_number"]').clear().type('00387123456789')
    cy.get('[data-qa="create-account"]').should('be.visible').click()

    // Then
    cy.get('[data-qa="account-created"]')
      .should('be.visible')
      .and('contain.text', 'Account Created!')

    // When
    cy.get('[data-qa="continue-button"]').should('be.visible').click()
    cy.get('a[href="/logout"]').should('be.visible').click()
    cy.get('a[href*="login"]').should('be.visible').click()
    cy.get('[data-qa="login-email"]').clear().type(email)
    cy.get('[data-qa="login-password"]').clear().type('Test123')
    cy.get('[data-qa="login-button"]').should('be.visible').click()

    // Then
    cy.get('a').contains('Logged in as Muhamed').should('be.visible')
    cy.get('a[href="/logout"]').should('be.visible')
  })
})
