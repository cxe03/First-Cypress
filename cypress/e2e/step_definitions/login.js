import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";

Given("A user is on the quales landing page", () => {
    loginPage.visitQualesApp();
});


When("The user types in their correct username and password", () => {
   loginPage.typeUsernameAndPassword();
   loginPage.clickLoginButton();
    });


    When("The user types an incorrect username and password", () => {
        loginPage.typeIncorrectUsernameAndPassword();
         }); 

    Then("The user should be logged in to the app", () => {
        loginPage.verifySuccessfulLogin();
    
        });

        Then("An error login message should be displayed", () => {
            loginPage.verifyUnSuccessfulLogin();
        
            });