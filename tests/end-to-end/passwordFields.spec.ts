import UserCreateForm from "../../page/UserCreateForm";
import { userProfileData } from "./userProfileCreation.testData";
import { expect, test} from "@playwright/test";



test.describe('User Profile Creation - Password Validation Tests', () => {
    test('TC008 & TC009 - Test valid passwords and password mismatch', async ({ page }) => {
  
      // Navigate to the User Profile Creation form page
      await page.goto('https://playwright-lab.web.app/');
  
      // Create an instance of the UserCreateForm class
      const form = new UserCreateForm(page);
  
        // Fill the form with valid password and confirm password, ensuring no error appears
        await form.fillMandatoryFields({
          firstName: userProfileData.mandatory.firstName,
          lastName: userProfileData.mandatory.lastName,
          email: userProfileData.mandatory.email,
          password: userProfileData.mandatory.password,
          confirmPassword: userProfileData.mandatory.password, // The confirm password matches the password
        });
  
        // Submit the form and ensure no error message appears
         await form.submitFormAndCheckForErrors();

  
      // Fill the form with mismatched passwords and check for error message
      await form.fillMandatoryFields({
        firstName: userProfileData.mandatory.firstName,
        lastName: userProfileData.mandatory.lastName,
        email: userProfileData.mandatory.email,
        password: userProfileData.mandatory.password,
        confirmPassword: userProfileData.invalidMandatoryData.password, // Mismatched confirm password
      });
         // Submit the form and check for error messages
          const errorMessage = await form.submitFormAndCheckForErrors();
         // Assert that at least one error message is present
          expect(errorMessage.length).toBeGreaterThan(0);
    });
  });
  