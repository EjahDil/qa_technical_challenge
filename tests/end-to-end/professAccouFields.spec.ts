import UserCreateForm from "../../page/UserCreateForm";
import { userProfileData } from "./userProfileCreation.testData";
import { expect, test} from "@playwright/test";


test.describe('User Profile Creation - Valid LinkedIn URL Entry', () => {
  
test('TC015 - Test for valid LinkedIn URL entry', async ({ page }) => {

     // Navigate to the User Profile Creation form page
    await page.goto('https://playwright-lab.web.app/');


    const form = new UserCreateForm(page);

    // Fill the form with valid LinkedIn URL
    await form.fillMandatoryFields({
      firstName: userProfileData.mandatory.firstName,
      lastName: userProfileData.mandatory.lastName,
      email: userProfileData.mandatory.email,
      password: userProfileData.mandatory.password,
      confirmPassword: userProfileData.mandatory.confirmPassword,
    });

    // Fill the optional LinkedIn field
    await form.fillOptionalFields({
      linkedin: userProfileData.optional.linkedin
    });
        // Submit the form and get the error messages
        const errorMessage = await form.submitFormAndCheckForErrors();

        // Assert that the errorMessages array is empty
        expect(errorMessage).toHaveLength(0);

});
});


test.describe('User Profile Creation - Invalid LinkedIn URL Entry', () => {

test('TC016 - Test for invalid LinkedIn URL entry', async ({ page }) => {

     // Navigate to the User Profile Creation form page
    await page.goto('https://playwright-lab.web.app/');

    const form = new UserCreateForm(page);
  
    // Fill the form with mandatory fields
    await form.fillMandatoryFields({
        firstName: userProfileData.mandatory.firstName,
        lastName: userProfileData.mandatory.lastName,
        email: userProfileData.mandatory.email,
        password: userProfileData.mandatory.password,
        confirmPassword: userProfileData.mandatory.confirmPassword,
      });
  
    // Fill the optional LinkedIn field with an invalid URL
    await form.fillOptionalFields({
      linkedin: userProfileData.invalidOptionalData.linkedin
    });

   // Submit the form and check for error messages
   const errorMessage = await form.submitFormAndCheckForErrors();


   // Assert that at least one error message is present
    expect(errorMessage).toHaveLength(1);



    // Fill the form with mandatory fields
    await form.fillMandatoryFields({
      firstName: userProfileData.mandatory.firstName,
      lastName: userProfileData.mandatory.lastName,
      email: userProfileData.mandatory.email,
      password: userProfileData.mandatory.password,
      confirmPassword: userProfileData.mandatory.confirmPassword,
    });

    // Fill the optional LinkedIn field with an invalid URL
    await form.fillOptionalFields({
        linkedin: userProfileData.invalidOptionalDataTwo.linkedin
      });
    
      // Submit the form and check for error messages
      const errorMessageTwo = await form.submitFormAndCheckForErrors();


      // Assert that at least one error message is present
       expect(errorMessageTwo).toHaveLength(1);
});

});



test.describe('User Profile Creation - Valid Github URL Entry', () => {
  
    test('TC017 - Test for valid Github URL entry', async ({ page }) => {

        // Navigate to the User Profile Creation form page
        await page.goto('https://playwright-lab.web.app/');
         
        const form = new UserCreateForm(page);
    
    
        // Fill the form with valid Github URL
        await form.fillMandatoryFields({
          firstName: userProfileData.mandatory.firstName,
          lastName: userProfileData.mandatory.lastName,
          email: userProfileData.mandatory.email,
          password: userProfileData.mandatory.password,
          confirmPassword: userProfileData.mandatory.confirmPassword,
        });
    
        // Fill the optional Github field
        await form.fillOptionalFields({
          github: userProfileData.optional.github
        }); 
        
        // Submit the form and get the error messages
        const errorMessage = await form.submitFormAndCheckForErrors();

        // Assert that the errorMessages array is empty
        expect(errorMessage).toHaveLength(0);
    
    });
    });
    

    test.describe('User Profile Creation - Invalid Github URL Entry', () => {

        test('TC018 - Test for invalid Github URL entry', async ({ page }) => {

             // Navigate to the User Profile Creation form page
            await page.goto('https://playwright-lab.web.app/');

        
            const form = new UserCreateForm(page);
          
            // Fill the form with mandatory fields
            await form.fillMandatoryFields({
                firstName: userProfileData.mandatory.firstName,
                lastName: userProfileData.mandatory.lastName,
                email: userProfileData.mandatory.email,
                password: userProfileData.mandatory.password,
                confirmPassword: userProfileData.mandatory.confirmPassword,
              });
          
            // Fill the optional Github field with an invalid URL
            await form.fillOptionalFields({
              github: userProfileData.invalidOptionalData.github
            });
           // Submit the form and check for error messages
           const errorMessage = await form.submitFormAndCheckForErrors();

           // Assert that at least one error message is present
            expect(errorMessage).toHaveLength(1);

            // Fill the form with mandatory fields
            await form.fillMandatoryFields({
              firstName: userProfileData.mandatory.firstName,
              lastName: userProfileData.mandatory.lastName,
              email: userProfileData.mandatory.email,
              password: userProfileData.mandatory.password,
              confirmPassword: userProfileData.mandatory.confirmPassword,
            });
        
            // Fill the optional Github field with an invalid URL
            await form.fillOptionalFields({
                github: userProfileData.invalidOptionalDataTwo.github
              });
             // Submit the form and check for error messages
          const errorMessageTwo = await form.submitFormAndCheckForErrors();


          // Assert that at least one error message is present
           expect(errorMessageTwo).toHaveLength(1);
        });
        
        });
        