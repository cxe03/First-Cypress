import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { coursePage } from "@pages/CoursePage";



When("The user fills the course creation form", () => {
   coursePage.fillCourseCreationForm();
    });
