import landingPage from "../support/page-objects/landing-page";
import inventoryPage from "../support/page-objects/inventory-page";
import cartPage from "../support/page-objects/cart-page";
import checkoutPage from "../support/page-objects/checkout-page";

describe('Swag Labs cart tests', () => {
  beforeEach(() => {
    landingPage.open();
    landingPage.typeUsername('standard_user');
    landingPage.typePassword('secret_sauce');
    landingPage.clickLoginBtn();
  })

  it('Goes to the Cart and tries to checkout without filling user information', () => {
    // go to the cart
    inventoryPage.clickShoppingCart();
    // click on the checkout
    cartPage.clickCheckoutBtn();
    // click on the continue, no data entered
    checkoutPage.clickContinueBtn();
    checkoutPage.elements.errorMsg().should('have.text','Error: First Name is required');
})

  it('Verifies an empty cart, adds an item to the cart, successfully finishes the shopping and checks for the empty cart', () => {
    // verify there's no cart badge
    inventoryPage.elements.shoppingCartBadge().should('not.exist')
    // add a backpack to the cart
    inventoryPage.addSauceLabsBackpackToCart();
    // verify the cart badge is visible & displays 1
    inventoryPage.elements.shoppingCartBadge().should('be.visible')
    inventoryPage.elements.shoppingCartBadge().should('contain', 1)
    // go to the cart
    inventoryPage.clickShoppingCart();
    // verify the cart content
    cartPage.elements.itemName().should('have.text','Sauce Labs Backpack')
    cartPage.elements.cartQuantity().should('have.text', 1)
    cartPage.elements.itemPrice().should('have.text', '$29.99')
    // verify the remove, continue & checkout links are enabled
    cartPage.elements.removeSauceLabsBackpack().should('be.enabled')
    cartPage.elements.continueShopping().should('be.enabled')
    cartPage.clickCheckoutBtn();
    // enter checkout information
    checkoutPage.typeFirstName('John')
    checkoutPage.typeLastName('Doe')
    checkoutPage.typePostalCode('32211')
    checkoutPage.clickContinueBtn();
    // verify checkout overview
    checkoutPage.elements.checktoutHeader().should('have.text','Checkout: Overview')
    checkoutPage.elements.itemName().should('have.text','Sauce Labs Backpack')
    checkoutPage.elements.cartQuantity().should('have.text', 1)
    checkoutPage.elements.itemPrice().should('have.text', '$29.99')
    // finish the order, verify the header and url
    checkoutPage.clickFinishBtn();
    checkoutPage.elements.completeHeader().should('have.text','THANK YOU FOR YOUR ORDER')
    cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
    // return to products list, verify url and that cart badge doesn't exist
    checkoutPage.clickbackHomeBtn();
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    inventoryPage.elements.shoppingCartBadge().should('not.exist');
    })

  it('Adds an item to the cart, removes the item, cheks for the empty bag', () => {
    // add a bike light to the cart
    inventoryPage.addSauceLabsBikeLightToCart();
    // verify the cart badge is visible & displays 1
    inventoryPage.elements.shoppingCartBadge().should('be.visible')
    inventoryPage.elements.shoppingCartBadge().should('contain', 1)
    // go to the cart
    inventoryPage.clickShoppingCart();
    // remove bike light from the cart and verify cart badge doesn't exist
    cartPage.clickRemoveSauceLabsBikeLight();
    cartPage.elements.shoppingCartBadge().should('not.exist');
  })

  it('Adds an item to the cart, goes to cart and continues shopping, verifies bag still has 1 item', () => {
    // add a bike light to the cart
    inventoryPage.addSauceLabsBikeLightToCart();
    // go to the cart
    inventoryPage.clickShoppingCart();
    // click continue to navigate back to inventory page
    cartPage.clickContinueShopping();
    // verify url and cart badge to display 1
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    inventoryPage.elements.shoppingCartBadge().should('have.text','1');
  })
})