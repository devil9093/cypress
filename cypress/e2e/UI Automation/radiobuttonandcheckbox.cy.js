describe('interaction with UI', ()=>{
 it('radiobutton', () =>{
    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get('#male').should('be.visible')
    //check is used to select radio button 
    cy.get('#male').check().should('be.checked')
    //assertion of correct radio button selected
    cy.get('#male').should('be.checked')
    cy.get('#female').should('not.be.checked')

 })

 it('checkbox', () =>{
    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get('#sunday').should('be.visible')
    //check and uncheck sunday check box
    cy.get('#sunday').check().should('be.checked')
    cy.get('#sunday').uncheck().should('not.be.checked')

    //check and uncheck monday check box
    cy.get('#monday').should('be.visible')
    cy.get('#monday').check().should('be.checked')
    cy.get('#monday').uncheck().should('not.be.checked')


})
})