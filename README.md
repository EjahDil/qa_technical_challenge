# qa_technical_challenge

### This repository provides a comprehensive solution to the QA challenge outlined in the QAChallengeTask folder. The challenge included:

- Visual (UI) Testing: Comparing three interfaces by evaluating the Figma design (expected interface) against the developer's implementation.

- Exploratory Analysis on the User Profile Creation web form found at href{https://playwright-lab.web.app/}, which resulted in a detailed test and bug report.

- Playwright Test Automation using the test cases designed during Exploratory testing.



# Project Setup

- Make sure you have node.js installed on your local computer. To check if node.js is installed on your local, move to your CLI and type

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

- Once in the qa_technical_challenge folder run the following commands:

- To install required depedencies you run

`
npm install
`

- To install the necessary browsers for playwright to run it test effectively you run

`
npx install Playwright --with-deps
`

- To run the test run the following command

`
npx install Playwright test tests/end-2-end
`


