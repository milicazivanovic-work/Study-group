export class CartPage {

    open() {
        cy.visit('/cart.html')
    }

    get checkoutBtn(){
        return cy.get('[data-test="checkout"]');
    }
    get continueBtn(){
        return cy.get('[data-test="continue"]');
    }
    get errorMsg(){
        return cy.get('[data-test="error"]');
    }
    get itemName(){
        return cy.get('.inventory_item_name');
    }
    get cartQuantity(){
        return cy.get('.cart_quantity');
    }
    get itemPrice(){
        return cy.get('.inventory_item_price');
    }
    get removeSauceLabsBackpack(){
        return cy.get('[data-test="remove-sauce-labs-backpack"]');
    }
    get continueShopping(){
        return cy.get('[data-test="continue-shopping"]');
    }
    get removeSauceLabsBikeLight(){
        return cy.get('[data-test="remove-sauce-labs-bike-light"]');
    }
    get shoppingCartBadge(){
        return cy.get('.shopping_cart_badge');
    }
    
}

export default new CartPage();

