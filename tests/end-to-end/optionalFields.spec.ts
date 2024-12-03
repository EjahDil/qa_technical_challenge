import UserCreateForm from "../../page/UserCreateForm";
import { userProfileData } from "./userProfileCreation.testData";
import { expect, test} from "@playwright/test";


test.describe('User Profile Creation - Phone Number Validation Tests', () => {
    test('TC012 & TC013 - Test valid and invalid phone number entries', async ({ page }) => {
  
      // Navigate to the User Profile Creation form page
      await page.goto('https://playwright-lab.web.app/');
  
      // Create an instance of the UserCreateForm class
      const form = new UserCreateForm(page);
  
  
        // Fill the form with valid phone number and ensure no error appears
        await form.fillMandatoryFields({
          firstName: userProfileData.mandatory.firstName,
          lastName: userProfileData.mandatory.lastName,
          email: userProfileData.mandatory.email,
          password: userProfileData.mandatory.password,
          confirmPassword: userProfileData.mandatory.password
        });
  
        // Use the fillOptionalFields method to fill the phone number field
        await form.fillOptionalFields({
          phoneNumber:userProfileData.optional.phoneNumber,  // Valid phone number
        });
            // Submit the form and get the error messages
            const errorMessage = await form.submitFormAndCheckForErrors();

            // Assert that the errorMessages array is empty
            expect(errorMessage).toHaveLength(0);
      
  
        // Fill the form with invalid phone number and check for error messages
        await form.fillMandatoryFields({
          firstName: userProfileData.mandatory.firstName,
          lastName: userProfileData.mandatory.lastName,
          email: userProfileData.mandatory.email,
          password: userProfileData.mandatory.password,
          confirmPassword: userProfileData.mandatory.password,
        });
  
        // Use the fillOptionalFields method to fill the invalid phone number field
        await form.fillOptionalFields({
          phoneNumber: userProfileData.invalidOptionalData.phoneNumber, // Invalid phone number
        });
  
        // Submit the form and check for error messages
       const errorMessageTwo =  await form.submitFormAndCheckForErrors();

        // Assert that at least one error message is present
         expect(errorMessageTwo).toHaveLength(1);



        // Use the fillOptionalFields method to fill the invalid phone number field
        await form.fillOptionalFields({
            phoneNumber: userProfileData.invalidOptionalDataTwo.phoneNumber, // Second Invalid phone number
          });
    
          // Submit the form and check for error messages
         const errorMessageThree =  await form.submitFormAndCheckForErrors();
  
          // Assert that at least one error message is present
           expect(errorMessageThree).toHaveLength(1);
    });
  });



  test.describe('User Profile Creation - Gender and Address Validation Tests', () => {
    test('TC011 & TC014 - Test valid gender and address entries', async ({ page }) => {
      // Navigate to the User Profile Creation form page
      await page.goto('https://playwright-lab.web.app/');
  
      // Create an instance of the UserCreateForm class
      const form = new UserCreateForm(page);
  
        // Fill the form with valid gender and ensure no error appears
        await form.fillMandatoryFields({
          firstName: userProfileData.mandatory.firstName,
          lastName: userProfileData.mandatory.lastName,
          email: userProfileData.mandatory.email,
          password: userProfileData.mandatory.password,
          confirmPassword: userProfileData.mandatory.confirmPassword
        });
  
        // Fill the optional gender field
        await form.fillOptionalFields({
          gender: userProfileData.optional.gender, // Valid gender
        });
            // Submit the form and get the error messages
            const errorMessage = await form.submitFormAndCheckForErrors();

            // Assert that the errorMessages array is empty
            expect(errorMessage).toHaveLength(0);
  
   
        // Fill the form with valid address and ensure no error appears
        await form.fillMandatoryFields({
          firstName: userProfileData.mandatory.firstName,
          lastName: userProfileData.mandatory.lastName,
          email: userProfileData.mandatory.email,
          password: userProfileData.mandatory.password,
          confirmPassword:userProfileData.mandatory.confirmPassword
        });
  
        // Fill the optional address field
        await form.fillOptionalFields({
          address: userProfileData.optional.address, // Valid address
        });
   // Submit the form and check for error messages
   const errorMessageTwo = await form.submitFormAndCheckForErrors();

   // Assert that at least one error message is present
    expect(errorMessageTwo).toHaveLength(0);
    });
  });


// //   test.describe('User Profile Creation - Valid Date of Birth Entry', () => {
// //     test('TC019 - Test for valid Date of Birth entry (YYYY-MM-DD)', async ({ page }) => {
// //       const form = new UserCreateForm(page);
  
// //       // Test valid Date of Birth
// //       const validDob = '1990-01-15'; // Example of a valid date in YYYY-MM-DD format
  
// //       // Fill the form with mandatory fields
// //       await form.fillMandatoryFields({
// //         firstName: 'John',
// //         lastName: 'Doe',
// //         email: 'john.doe@example.com',
// //         password: 'Password123',
// //         confirmPassword: 'Password123',
// //       });
  
// //       // Fill the optional Date of Birth field with a valid date
// //       await form.fillOptionalFields({
// //         dob: validDob,
// //       });
  
// //       // Submit the form and check for errors
// //       await form.submitFormAndCheckForErrors();
  
// //       // Assert that the Date of Birth field accepts the valid date
// //       const dobField = page.locator('#date-of-birth');
// //       await expect(dobField).toHaveValue(validDob);
// //     });
//   });
  
  
  