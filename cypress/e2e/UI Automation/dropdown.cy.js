describe('interaction with UI', ()=>{
 it('dropdown with select', () =>{
    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get('#country').should('be.visible')
    //check is used to select dropdown 
    cy.get('#country').select('India').should('have.value', 'india');

 })

 it('dropdown without select', () =>{
   cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
   cy.get('#select2-billing_country-container').should('be.visible')
   //check is used to select dropdown 
   cy.get('#select2-billing_country-container').click();
   cy.get('.select2-search__field').type('Iran').type('{enter}')
})
})