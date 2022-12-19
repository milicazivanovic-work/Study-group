class cartPage {

    open() {
        cy.visit('/cart.html')
    }

    elements = {
        checkoutBtn: () => cy.get('[data-test="checkout"]'),
        continueBtn: () => cy.get('[data-test="continue"]'),
        errorMsg: () => cy.get('[data-test="error"]'),
        itemName: () => cy.get('.inventory_item_name'),
        cartQuantity: () => cy.get('.cart_quantity'),
        itemPrice: () => cy.get('.inventory_item_price'),
        removeSauceLabsBackpack: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
        continueShopping: () => cy.get('[data-test="continue-shopping"]'),
        removeSauceLabsBikeLight: () => cy.get('[data-test="remove-sauce-labs-bike-light"]'),
        shoppingCartBadge: () => cy.get('.shopping_cart_badge')
    
    }


    clickCheckoutBtn() {
        this.elements.checkoutBtn().click();
    }

    clickContinueBtn() {
        this.elements.continueBtn().click();
    }

   clickRemoveSauceLabsBikeLight() {
        this.elements.removeSauceLabsBikeLight().click();
   }

   clickContinueShopping() {
        this.elements.continueShopping().click();
   }

}

module.exports = new cartPage();

