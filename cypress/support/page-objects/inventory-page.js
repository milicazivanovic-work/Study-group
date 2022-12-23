class InventoryPage {

    open() {
        cy.visit('/inventory.html')
    }

    elements = {
        shoppingCart: () => cy.get('.shopping_cart_link'),
        shoppingCartBadge: () => cy.get('.shopping_cart_badge'),
        sauceLabsBackpack: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        sauceLabsBikeLight: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
    }


clickShoppingCart() {
    this.elements.shoppingCart().click();
}

addSauceLabsBackpackToCart() {
    this.elements.sauceLabsBackpack().click();
}

addSauceLabsBikeLightToCart() {
    this.elements.sauceLabsBikeLight().click();
}

}

module.exports = new InventoryPage();

