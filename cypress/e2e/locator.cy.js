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
        cy.xpath('').type('shirt');
        cy.xpath('').click().end();
        //cy.get('nav-logo-sprites').contains('amazon').end();
    })

})