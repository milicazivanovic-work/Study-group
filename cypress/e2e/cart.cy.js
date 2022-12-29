import LandingPage from "../support/page-objects/landing-page";
import InventoryPage from "../support/page-objects/inventory-page";
import CartPage from "../support/page-objects/cart-page";
import CheckoutPage from "../support/page-objects/checkout-page";

describe('Swag Labs cart tests', () => {
  beforeEach(() => {
    LandingPage.open();
    LandingPage.login('standard_user', 'secret_sauce');
  })

  it('Goes to the Cart and tries to checkout without filling user information', () => {
    // go to the cart
    InventoryPage.shoppingCart.click();
    // click on the checkout
    CartPage.checkoutBtn.click();
    // click on the continue, no data entered
    CheckoutPage.continueBtn.click();
    CheckoutPage.errorMsg.should('have.text','Error: First Name is required');
})

  it('Verifies an empty cart, adds an item to the cart, successfully finishes the shopping and checks for the empty cart', () => {
    // verify there's no cart badge
    InventoryPage.shoppingCartBadge.should('not.exist')
    // add a backpack to the cart
    InventoryPage.sauceLabsBackpack.click();
    // verify the cart badge is visible & displays 1
    InventoryPage.shoppingCartBadge.should('be.visible')
    InventoryPage.shoppingCartBadge.should('contain', 1)
    // go to the cart
    InventoryPage.shoppingCart.click();
    // verify the cart content
    CartPage.itemName.should('have.text','Sauce Labs Backpack')
    CartPage.cartQuantity.should('have.text', 1)
    CartPage.itemPrice.should('have.text', '$29.99')
    // verify the remove, continue & checkout links are enabled
    CartPage.removeSauceLabsBackpack.should('be.enabled')
    CartPage.continueShopping.should('be.enabled')
    CartPage.checkoutBtn.click();
    // enter checkout information
    CheckoutPage.firstName.type('John')
    CheckoutPage.lastName.type('Doe')
    CheckoutPage.postalCode.type('32211')
    CheckoutPage.continueBtn.click();
    // verify checkout overview
    CheckoutPage.checktoutHeader.should('have.text','Checkout: Overview')
    CheckoutPage.itemName.should('have.text','Sauce Labs Backpack')
    CheckoutPage.cartQuantity.should('have.text', 1)
    CheckoutPage.itemPrice.should('have.text', '$29.99')
    // finish the order, verify the header and url
    CheckoutPage.finishBtn.click();
    CheckoutPage.completeHeader.should('have.text','THANK YOU FOR YOUR ORDER')
    cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
    // return to products list, verify url and that cart badge doesn't exist
    CheckoutPage.backHomeBtn.click();
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    InventoryPage.shoppingCartBadge.should('not.exist');
    })

  it('Adds an item to the cart, removes the item, cheks for the empty bag', () => {
    // add a bike light to the cart
    InventoryPage.sauceLabsBikeLight.click();
    // verify the cart badge is visible & displays 1
    InventoryPage.shoppingCartBadge.should('be.visible')
    InventoryPage.shoppingCartBadge.should('contain', 1)
    // go to the cart
    InventoryPage.shoppingCart.click();
    // remove bike light from the cart and verify cart badge doesn't exist
    CartPage.removeSauceLabsBikeLight.click();
    CartPage.shoppingCartBadge.should('not.exist');
  })

  it('Adds an item to the cart, goes to cart and continues shopping, verifies bag still has 1 item', () => {
    // add a bike light to the cart
    InventoryPage.sauceLabsBikeLight.click();
    // go to the cart
    InventoryPage.shoppingCart.click();
    // click continue to navigate back to inventory page
    CartPage.continueShopping.click();
    // verify url and cart badge to display 1
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    InventoryPage.shoppingCartBadge.should('have.text','1');
  })
})