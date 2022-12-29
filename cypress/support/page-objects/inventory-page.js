export class InventoryPage {

    open() {
        cy.visit('/inventory.html')
    }

    get shoppingCart() {
        return cy.get('.shopping_cart_link');
    }
    get shoppingCartBadge(){
        return cy.get('.shopping_cart_badge');
    }
    get sauceLabsBackpack(){
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
    }
    get sauceLabsBikeLight(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]');
    }

}

export default new InventoryPage();

