// Importing the necessary Libraries

import { test, expect } from '@playwright/test';
import { userProfileData } from './userProfileCreation.testData';
import UserCreateForm from '../../page/UserCreateForm';



test.describe('User Profile Creation - Blank Form Submission Test', () => {
  test('TC001 - Submit blank form and check for error messages', async ({ page }) => {
    // Navigate to the User Profile Creation form page
    await page.goto('https://playwright-lab.web.app/');

    // Create an instance of the UserCreateForm class
    const form = new UserCreateForm(page);

    // Fill the form with blank mandatory fields
    await form.fillMandatoryFields({
      firstName: userProfileData.blankData.firstName,
      lastName: userProfileData.blankData.lastName,
      email: userProfileData.blankData.email,
      password: userProfileData.blankData.password,
      confirmPassword: userProfileData.blankData.confirmPassword,
    });
 // Submit the form and check for error messages
    const errorMessage = await form.submitFormAndCheckForErrors();

    // Assert that at exactly five error messages are present
      expect(errorMessage).toHaveLength(5);
      });
});



test.describe('User Profile Creation - Test form Submission without any entry in the Optional Fields', () => {
  test('TC010 - Form submission without any entry in the Optional Field', async ({ page }) => {

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
          // Submit the form and get the error messages
          const errorMessage = await form.submitFormAndCheckForErrors();

          // Assert that the errorMessages array is empty
          expect(errorMessage).toHaveLength(0);
  });
});




test.describe('User Profile Creation - Test Form with all the input fields filled including Optional fields', () => {
  test('TC020 - Test a completely filled form', async ({ page }) => {

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
        gender: userProfileData.optional.gender,
        phoneNumber: userProfileData.optional.phoneNumber,
        address: userProfileData.optional.address,
        linkedin: userProfileData.optional.linkedin,
        github: userProfileData.optional.github
      });
          // Submit the form and get the error messages
          const errorMessage = await form.submitFormAndCheckForErrors();

          // Assert that the errorMessages array is empty
          expect(errorMessage).toHaveLength(0);

  });
});
