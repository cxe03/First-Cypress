class CoursePage{
    elements = {
        addCourseBtn: () => cy.contains('Add Course'),
    
        courseDescriptionBox: () => cy.get('[data-testid="Description*"]'),
        
    };
    
    fillCourseCreationForm () {
        
        const courseDescription = "Learning Cypress"




        this.elements.addCourseBtn().click();
        this.elements.courseDescriptionBox().type(courseDescription);
        

    }

    };
    
    export const coursePage = new CoursePage();
    