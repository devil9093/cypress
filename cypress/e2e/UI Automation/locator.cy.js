describe('locator',() =>{
    it('cssselector',() =>{
        cy.visit('www.facebook.com');
        cy.get('#email').type('vkd9093@gmail.com');
        cy.get('#passContainer').type('Vkd9093@9093');
        cy.get("[name='login']").click();
        cy.end();
    })
    it('Xpath',() =>{
        cy.visit('www.amazon.in');
        cy.xpath('//*[@id="twotabsearchtextbox"]').type('shirt');
        cy.ClickAction('//*[@id="nav-search-submit-button"]')
        //cy.xpath('//*[@id="nav-search-submit-button"]').click().end();
        //cy.get('nav-logo-sprites').contains('amazon').end();
    })

})