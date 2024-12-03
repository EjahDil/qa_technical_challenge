import UserCreateForm from "../../page/UserCreateForm";
import { userProfileData } from "./userProfileCreation.testData";
import { expect, test} from "@playwright/test";



test.describe('User Profile Creation - First Name Validation Tests', () => {
    test('TC002 & TC003 - Test valid and invalid first name entries', async ({ page }) => {

      // Navigate to the User Profile Creation form page
      await page.goto('https://playwright-lab.web.app/');
  
      // Create an instance of the UserCreateForm class
      const form = new UserCreateForm(page);
  
      // TC002 - Valid first name entry
      await form.fillMandatoryFields({
        firstName: userProfileData.mandatory.firstName, 
        lastName: userProfileData.mandatory.lastName,
        email: userProfileData.mandatory.email,
        password: userProfileData.mandatory.password,
        confirmPassword: userProfileData.mandatory.password,
      });
  
      // Submit the form and check for error messages
      const errorMessage = await form.submitFormAndCheckForErrors();

      // Assert that at least one error message is present
      expect(errorMessage).toHaveLength(0);
 
// This will check that there are no error messages
  
      // TC003 - Invalid first name entry with non-alphabetical characters
      await form.fillMandatoryFields({
        firstName: userProfileData.invalidMandatoryData.firstName,  // Invalid first name with numbers and special characters
        lastName: userProfileData.mandatory.lastName,
        email: userProfileData.mandatory.email,
        password: userProfileData.mandatory.password,
        confirmPassword: userProfileData.mandatory.password,
      });

     // Submit the form and check for error messages
   const errorMessageOne = await form.submitFormAndCheckForErrors();

      // Assert that at least one error message is present
      expect(errorMessageOne).toHaveLength(1);



      // Another invalid first name entry with special characters
      await form.fillMandatoryFields({
        firstName: userProfileData.invalidMandatoryDataTwo.firstName,  // Invalid first name with special characters
        lastName: userProfileData.mandatory.lastName,
        email: userProfileData.mandatory.email,
        password: userProfileData.mandatory.password,
        confirmPassword: userProfileData.mandatory.password,
      });
   // Submit the form and check for error messages
   const errorMessageTwo = await form.submitFormAndCheckForErrors();


   // Assert that at least one error message is present
    expect(errorMessageTwo).toHaveLength(1);
      
    });
  });
  


  test.describe('User Profile Creation - Last Name Validation Tests', () => {
    test('TC004 & TC005 - Test valid and invalid last name entries', async ({ page }) => {
  
      // Navigate to the User Profile Creation form page
      await page.goto('https://playwright-lab.web.app/');
  
      // Create an instance of the UserCreateForm class
      const form = new UserCreateForm(page);

  
        // Fill the form with valid last name and check if no error appears
        await form.fillMandatoryFields({
          firstName: userProfileData.mandatory.firstName,
          lastName: userProfileData.mandatory.lastName,
          email: userProfileData.mandatory.email,
          password: userProfileData.mandatory.password,
          confirmPassword: userProfileData.mandatory.password,
        });

        // Submit the form and get the error messages
        const errorMessage = await form.submitFormAndCheckForErrors();
        // Assert that the errorMessages array is empty
        expect(errorMessage).toHaveLength(0);
        



        // Fill the form with invalid last name and check for error messages
        await form.fillMandatoryFields({
          firstName: userProfileData.mandatory.firstName,
          lastName: userProfileData.invalidMandatoryData.lastName,
          email: userProfileData.mandatory.email,
          password: userProfileData.mandatory.password,
          confirmPassword: userProfileData.mandatory.password,
        });
  
        // Submit the form and check for error messages
        const errorMessageTwo = await form.submitFormAndCheckForErrors();


        // Assert that at least one error message is present
         expect(errorMessageTwo).toHaveLength(1); 




        // Fill the form with invalid last name and check for error messages
        await form.fillMandatoryFields({
            firstName: userProfileData.mandatory.firstName,
            lastName: userProfileData.invalidMandatoryDataTwo.lastName, // Second check with invalid last name
            email: userProfileData.mandatory.email,
            password: userProfileData.mandatory.password,
            confirmPassword: userProfileData.mandatory.password,
          });
    
         // Submit the form and check for error messages
         const errorMessageThree = await form.submitFormAndCheckForErrors();


         // Assert that at least one error message is present
          expect(errorMessageThree).toHaveLength(1);
    
  
    });
});

test.describe('User Profile Creation - Email Validation Tests', () => {
    test('TC006 & TC007 - Test valid and invalid email entries', async ({ page }) => {
  
      // Navigate to the User Profile Creation form page
      await page.goto('https://playwright-lab.web.app/');
  
      // Create an instance of the UserCreateForm class
      const form = new UserCreateForm(page);
  
        // Fill the form with valid email and check if no error appears
        await form.fillMandatoryFields({
          firstName: userProfileData.mandatory.firstName,
          lastName: userProfileData.mandatory.lastName,
          email: userProfileData.mandatory.email,
          password: userProfileData.mandatory.password,
          confirmPassword: userProfileData.mandatory.password,
        });
  
       // Submit the form and get the error messages
       const errorMessage = await form.submitFormAndCheckForErrors();

       // Assert that the errorMessages array is empty
       expect(errorMessage).toHaveLength(0);


        // Fill the form with invalid email and check for error messages

        await form.fillMandatoryFields({
          firstName: userProfileData.mandatory.firstName,
          lastName: userProfileData.mandatory.lastName,
          email: userProfileData.invalidMandatoryData.email,
          password: userProfileData.mandatory.password,
          confirmPassword: userProfileData.mandatory.password,
        });
  
        // Submit the form and check for error messages
        const errorMessageTwo =  await form.submitFormAndCheckForErrors();

        // Assert that at least one error message is present
        expect(errorMessageTwo).toHaveLength(1);


        // Fill the form with invalid email and check for error messages

        await form.fillMandatoryFields({
            firstName: userProfileData.mandatory.firstName,
            lastName: userProfileData.mandatory.lastName,
            email: userProfileData.invalidMandatoryDataTwo.email, // Second check with invalid email
            password: userProfileData.mandatory.password,
            confirmPassword: userProfileData.mandatory.password,
          });
    
          // Submit the form and check for error messages
          const errorMessageThree = await form.submitFormAndCheckForErrors();


        // Assert that at least one error message is present
         expect(errorMessageThree).toHaveLength(1);
    });
  });
  