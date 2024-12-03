# Quality Assurance Technical Challenge

### This repository provides a comprehensive solution to the QA challenge outlined in the QAChallengeTasks folder. The challenge included:

- Visual (UI) Testing: Comparing three interfaces by evaluating the Figma design (expected interface) against the developer's implementation.

- Exploratory Analysis on the User Profile Creation web form found at https://playwright-lab.web.app/, which resulted in a detailed test and bug reports.

- Playwright Test Automation using the test cases designed during Exploratory testing.








# Project Setup
### Follow the instructions below properly to run the test on your local computer

- Make sure you have a stable and recent version of node.js installed on your local computer. To check if node.js is installed on your local, move to your CLI and type

`
node --version
`
- if node is not found, visit Node.js official website.

- Clone this project repository by running the command on your CLI

`
git clone https://github.com/EjahDil/qa_technical_challenge.git
`

- Move to your terminal and navigate to the name of this repository by running the command

`
cd qa_technical_challenge
`

- Once in the qa_technical_challenge folder run the following commands on your CLI:

    - To run the test using VS Code inbuilt CLI (Optional) you run the command below first
      
        `
         code .
        `

    - To install required depedencies you run

        `
         npm install
        `

    - To install the necessary browsers for playwright to run its test effectively, you run

        `
        npx install playwright --with-deps
        `

    - To run the test run the following command

        `
        npx install playwright test tests/end-to-end
        `


    - Incase you want to run a test on a particular test file found in the end-to-end folder, run
        
        `
        npx playwright test tests/end-to-end/<name of the test file>
        `


    - To view the test report run the following command
        
        `
        npx playwright show-report
        `



# Limitations
- During the implementation of the automated tests using Playwright, challenges were encountered with using the WebKit browser. As a result,  I disabled the functionality for running tests with the WebKit browser.

- The main issue preventing the use of WebKit browsers in the automated tests was the lack of certain dependencies on my local machine. These dependencies are required to run the tests with WebKit. To resolve this, I will need to take time to review the relevant documentation and properly install the required dependencies on my Debian Bullseye Linux operating system.
