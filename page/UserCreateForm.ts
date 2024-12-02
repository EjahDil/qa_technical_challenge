import { Locator, Page } from "@playwright/test";



// page object model class in Playwright for interacting with
// the User Profile Creation Web Form

export default class UserCreateForm {
    readonly page: Page;

    readonly firstNameInput = "#first-name";
    readonly lastNameInput = "#last-name";
    readonly emailInput = "#email";
    readonly passwordInput = "#password";
    readonly confirmPasswordInput = "#confirm-password";
    readonly dobInput = "#date-of-birth";
    readonly genderRadio = 'input[name="gender"]';
    readonly phoneNumberInput = "#phone-number";
    readonly addressInput = "#address";
    readonly linkedinInput = "#linkedin-url";
    readonly githubInput = "#github-url";

     // XPath to select button with specific text
    readonly submitButton = '//button[text()="Submit"]';
    
    constructor(page: Page){
        this.page = page;

    }

    // Function to fill the mandatory fields in the form

    async fillMandatoryFields(data: { firstName: string; lastName: string; email: string; password: string; confirmPassword: string }) {
      
      // Fill each mandatory input field with its provided value
      
    await this.page.fill(this.firstNameInput, data.firstName);
    await this.page.fill(this.lastNameInput, data.lastName);
    await this.page.fill(this.emailInput, data.email);
    await this.page.fill(this.passwordInput, data.password);
    await this.page.fill(this.confirmPasswordInput, data.confirmPassword);
  }



    // Function to fill the optional fields in the form
   async fillOptionalFields(data: {
    gender?: string;
    dob?: string;
    phoneNumber?: string;
    address?: string;
    linkedin?: string;
    github?: string;
  }) {

    // Fill the optional fields with the provided values, 
    //selecting the gender option if specified

    if (data.gender) {
      // Select the gender radio button based on its value
      await this.page.locator(`${this.genderRadio}[value="${data.gender}"]`).first().click();
    }
    if (data.dob) await this.page.fill(this.dobInput, data.dob);
    if (data.phoneNumber) await this.page.fill(this.phoneNumberInput, data.phoneNumber);
    if (data.address) await this.page.fill(this.addressInput, data.address);
    if (data.linkedin) await this.page.fill(this.linkedinInput, data.linkedin);
    if (data.github) await this.page.fill(this.githubInput, data.github);
  }


  async submitFormAndCheckForErrors(): Promise<string[]> {
    // Submit the form
    await this.page.click(this.submitButton);
  
    // Wait for the form to process
    await this.page.waitForTimeout(1000);
  
    // Get all paragraph elements immediately following input fields
    const inputSelectors = ['#first-name', '#last-name', '#email', '#password', '#confirm-password'];
    const errorMessages: string[] = [];
  
    for (const selector of inputSelectors) {
      const inputField = this.page.locator(selector);
  
      // Find the paragraph element immediately following the input field
      const errorMessage = inputField.locator('xpath=following-sibling::p');
  
      if (await errorMessage.isVisible()) {
        // Capture the text content of the error message
        const messageText = await errorMessage.textContent();
        errorMessages.push(`Error for ${selector}: ${messageText}`);
      }
    }
  
    // Log the error messages for debugging purposes
    console.log('Error messages:', errorMessages);
  
    return errorMessages; // Return the error messages for external use
  }
  
};


