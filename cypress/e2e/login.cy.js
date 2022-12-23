import landingPage from "../support/page-objects/landing-page";

describe('Swag Labs login and logout test', () => {
  beforeEach(() => {
    landingPage.open();
  })

    it('Opens the Swag Labs website and checks for the matching page title', () => {
      cy.title().should('eq','Swag Labs');
    })
  
    it('Enters invalid credentials and asserts the error message', () => {
      landingPage.typeUsername('test_username');
      landingPage.typePassword('secret_sauce');
      landingPage.clickLoginBtn();
      landingPage.elements.error().should('have.text','Epic sadface: Username and password do not match any user in this service');
    })

    it('Enters valid credentials and checks the URL', () => {
      landingPage.typeUsername('standard_user');
      landingPage.typePassword('secret_sauce');
      landingPage.clickLoginBtn();
      cy.url().should('contains', 'inventory.html');
    })

    it('Enters valid credentials and logs out', () => {
      landingPage.typeUsername('standard_user');
      landingPage.typePassword('secret_sauce');
      landingPage.clickLoginBtn();
      landingPage.clickMenuBtn();
      landingPage.clickLogoutLink();
      cy.url().should('eq', 'https://www.saucedemo.com/');
    })
  })