import LandingPage from "../support/page-objects/landing-page";


describe('Swag Labs login and logout test', () => {
  beforeEach(() => {
    LandingPage.open();
  })

    it('Opens the Swag Labs website and checks for the matching page title', () => {
      cy.title().should('eq','Swag Labs');
    })
  
    it('Enters invalid credentials and asserts the error message', () => {
      LandingPage.login('test_username', 'test_pass')
      LandingPage.error.should('have.text','Epic sadface: Username and password do not match any user in this service'); 
    })

    it('Enters valid credentials and checks the URL', () => {
      LandingPage.login('standard_user', 'secret_sauce')
      cy.url().should('include', 'inventory.html');
    })

    it('Enters valid credentials and logs out', () => {
      LandingPage.login('standard_user', 'secret_sauce')
      LandingPage.menuBtn.click();
      LandingPage.logoutLink.click();
      cy.url().should('eq', 'https://www.saucedemo.com/');
    })
  })