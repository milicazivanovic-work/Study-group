describe('Swag Labs login and logout test', () => {
    it('Opens the Swag Labs website and checks for the matching page title', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.title().should('eq','Swag Labs');
    })
  
    it('Enters invalid credentials and asserts the error message', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').click()
      cy.get('[data-test="username"]').type('milica.zivanovic@work.co')
      cy.get('[data-test="password"]').click()
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service');
    })

    it('Enters valid credentials and checks the URL', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').click()
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').click()
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.url().should('contains', 'inventory.html');
    })

    it('Enters valid credentials and logs out', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').click()
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').click()
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.get('#react-burger-menu-btn').click()
      cy.get('#logout_sidebar_link').click();
    })
  })