export class LandingPage {

    open() {
        cy.visit('/')
    }

    get username() {
        return cy.get('[data-test="username"]');
    }
    get password(){
        return cy.get('[data-test="password"]');
    }
    get loginButton(){
        return cy.get('[data-test="login-button"]');
    }
    get error(){
        return cy.get('[data-test="error"]');
    }    
    get menuBtn(){
        return cy.get('#react-burger-menu-btn');
    }
    get logoutLink(){
        return cy.get('#logout_sidebar_link');
    }

    login(username,password){
        this.username.type(username)
        this.password.type(password)
        this.loginButton.click()  
    }

}

export default new LandingPage();