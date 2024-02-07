
class LoginPage{
    elements = {
        openApp: () => cy.visit("/login"),
    usernameInputField: () => cy.get('[data-testid="EmailAddress"]'),
    passwordInputField: () => cy.get('[data-testid="Password"]'),
    loginBtn: () => cy.get('.MuiButton-contained'),
    listCourses: () => cy.contains('List of Courses'),
    addCourseBtn: () =>        cy.contains('Add Course'),
    homeBtn: () =>        cy.contains('Home'),
    errorLoginMsg: () => cy.contains("Invalid Login Credential"),
    };
    
    visitQualesApp () {
        this.elements.openApp ();
    }
    
    typeUsernameAndPassword(){
        this.elements.usernameInputField().type(Cypress.env("username"));
        this.elements.passwordInputField().type(Cypress.env("password"));
    }


    typeIncorrectUsernameAndPassword(){
        this.elements.usernameInputField().type("at@mail.com");
        this.elements.passwordInputField().type(Cypress.env("password"));
        this.elements.loginBtn().click();
    }
    
    clickLoginButton(){
        this.elements.loginBtn().click();
    }
    verifySuccessfulLogin() {
        this.elements.listCourses().should("be.visible");
        this.elements.addCourseBtn().should("be.visible");
        this.elements.homeBtn().should("be.visible");
        
    }

    verifyUnSuccessfulLogin() {
        this.elements.errorLoginMsg().should("be.visible");
        
    }
    };
    
    export const loginPage = new LoginPage();
    