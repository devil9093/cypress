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
   cy.get('#select2-billing_country-container').click();
   cy.get('.select2-search__field').type('Iran').type('{enter}')
   cy.get('.select2-search__field').should('have.text', 'Iran')
})

it.only('dropdown for auto suggest', () =>{
   cy.visit("https://www.wikipedia.org/")
   cy.get('#searchInput').should('be.visible')
   cy.get('#searchInput').type('Pune');
   cy.xpath('//*[@id="typeahead-suggestions"]/div/a[4]').contains('Pune Metro').click()
})
})