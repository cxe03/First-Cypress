Feature: This feature ensures that the login functionality to the quales app works appropriately

As a user i want to be able to visit the login page and create courses successfully

Scenario: Verify that a user can login successfully
Given A user is on the quales landing page
When The user types in their correct username and password
Then The user should be logged in to the app


Scenario: Verify that a user cannot login to the app with wrong credentials
Given A user is on the quales landing page
When The user types an incorrect username and password
Then An error login message should be displayed