export class CheckoutPage {

    open() {
        cy.visit('/checkout-step-one.html')
    }

    get continueBtn(){
        return cy.get('[data-test="continue"]');
    }
    get errorMsg(){
        return cy.get('[data-test="error"]');
    }
    get firstName(){
        return cy.get('[data-test="firstName"]');
    }
    get lastName(){
        return cy.get('[data-test="lastName"]');
    }
    get postalCode(){
        return cy.get('[data-test="postalCode"]');
    }
    get checktoutHeader(){
        return cy.get('.header_secondary_container');
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
    get finishBtn(){
        return cy.get('[data-test="finish"]');
    }
    get completeHeader(){
        return cy.get('.complete-header');
    }
    get backHomeBtn(){
        return cy.get('[data-test="back-to-products"]');
    }

}

export default new CheckoutPage();

