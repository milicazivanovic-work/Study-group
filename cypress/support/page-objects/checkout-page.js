class CheckoutPage {

    open() {
        cy.visit('/checkout-step-one.html')
    }

    elements = {
        continueBtn: () => cy.get('[data-test="continue"]'),
        errorMsg: () => cy.get('[data-test="error"]'),
        firstName: () => cy.get('[data-test="firstName"]'),
        lastName: () => cy.get('[data-test="lastName"]'),
        postalCode: () => cy.get('[data-test="postalCode"]'),
        checktoutHeader: () => cy.get('.header_secondary_container'),
        itemName: () => cy.get('.inventory_item_name'),
        cartQuantity: () => cy.get('.cart_quantity'),
        itemPrice: () => cy.get('.inventory_item_price'),
        finishBtn: () => cy.get('[data-test="finish"]'),
        completeHeader: () => cy.get('.complete-header'),
        backHomeBtn: () => cy.get('[data-test="back-to-products"]')
    }


    clickContinueBtn() {
        this.elements.continueBtn().click();
    }

    typeFirstName(firstName){
        this.elements.firstName().type(firstName);

    }

    typeLastName(lastName) {
        this.elements.lastName().type(lastName);
    }

    typePostalCode(postalCode) {
        this.elements.postalCode().type(postalCode);
    }

    clickFinishBtn() {
        this.elements.finishBtn().click();
    }

    clickbackHomeBtn() {
        this.elements.backHomeBtn().click();
    }
}

module.exports = new CheckoutPage();

