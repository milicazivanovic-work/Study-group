class landingPage {

    open() {
        cy.visit('/')
    }


    elements = {
        
        username: () => cy.get('[data-test="username"]'),
        password: () => cy.get('[data-test="password"]'),
        loginBtn: () => cy.get('[data-test="login-button"]'),
        error: () => cy.get('[data-test="error"]'),
        menuBtn: () => cy.get('#react-burger-menu-btn'),
        logoutLink: () => cy.get('#logout_sidebar_link')
    }

    typeUsername(username){
        this.elements.username().type(username);

    }

    typePassword(password){
        this.elements.password().type(password);
        
    }

    clickLoginBtn(){
        this.elements.loginBtn().click();
        
    }

    clickMenuBtn(){
        this.elements.menuBtn().click();
    }

    clickLogoutLink(){
        this.elements.logoutLink().click();
    }



}

module.exports = new landingPage();