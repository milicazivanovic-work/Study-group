describe('Error with no data', () => {

  before(() => {
    cy.login('standard_user', 'secret_sauce')
  })

  it('Logs in, goes to the Cart and tries to checkout without filling user information', () => {
    cy.get('#shopping_cart_container').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('have.text','Error: First Name is required');
})

describe('Successful shopping flow', () => {
  it('Logs in, verifies an empty cart, adds an item to the cart, successfully finishes the shopping and checks for the empty cart', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('#shopping_cart_container').click()
    cy.get('.cart_quantity').should('not.exist')
    cy.get('[data-test="continue-shopping"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('be.visible')
    cy.get('#shopping_cart_container').click()
    cy.get('.inventory_item_name').should('have.text','Sauce Labs Backpack')
    cy.get('.cart_quantity').should('have.text', 1)
    cy.get('.inventory_item_price').should('have.text', '$29.99')
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.enabled')
    cy.get('[data-test="continue-shopping"]').should('be.enabled')
    cy.get('[data-test="checkout"]').should('be.enabled').click()
    cy.get('[data-test="firstName"]').type('John')
    cy.get('[data-test="lastName"]').type('Doe')
    cy.get('[data-test="postalCode"]').type('32211')
    cy.get('[data-test="continue"]').click()
    cy.get('.header_secondary_container').should('have.text','Checkout: Overview')
    cy.get('.inventory_item_name').should('have.text','Sauce Labs Backpack')
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER')
    cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
    cy.get('[data-test="back-to-products"]').should('be.visible').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    cy.get('.shopping_cart_badge').should('not.exist');
    })
})

describe('Removing items from the bag', () => {
  it('Logs in, adds an item to the cart, removes the item, cheks for the empty bag', () => {
    cy.login('standard_user', 'secret_sauce')   
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('.shopping_cart_badge').should('be.visible')
    cy.get('#shopping_cart_container').click()
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
    cy.get('.shopping_cart_badge').should('not.exist');
  })
})

describe('Continue shopping', () => {
  it('Logs in, adds an item to the cart, goes to cart and continues shopping, verifies bag still has 1 item', () => {
    cy.login('standard_user', 'secret_sauce') 
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('#shopping_cart_container').click()
    cy.get('[data-test="continue-shopping"]').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    cy.get('.shopping_cart_badge').should('have.text','1');
  })

})
})