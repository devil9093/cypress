// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types ="Cypress"/>
/// <reference types ="cypress-xpath"/>
Cypress.Commands.add('getIframe',(locator)=>{
    return cy.get(locator)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
})
Cypress.Commands.add('rightClickAction',(locator)=>{
        return cy.get(locator).rightclick()
})
Cypress.Commands.add('doubleClickAction',(locator)=>{
    return cy.get(locator).dblclick()
})
Cypress.Commands.add('ClickAction',(locator)=>{
    if(locator.startsWith('//')||locator.startsWith('.//')){
        return cy.xpath(locator).click()
    }else{
        return cy.get(locator).click()
    }
})