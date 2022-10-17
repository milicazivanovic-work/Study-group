# What is the test about

The **spec.cy.js** test is opening opening the Work & Co website in a browser and checking if the headline mathes the given text.

##Commands:

First, use nvm to ensure the correct Node.js version (specified 
in .nvmrc)
```
nvm use
```
Install dependencies:
```
npm install
```
Open Cypress runner:
```
npx cypress open
```
Run all tests (default browser is headless Electron):
```
npx cypress run
```
Run all tests in Chrome:
```
npx cypress run --browser chrome
```
