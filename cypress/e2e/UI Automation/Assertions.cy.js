describe('assertions',() =>{
    it.only('Implicit assertion',() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //multiple assertion with should & and
        cy.url().should('include', 'orangehrmlive')
        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contains', 'orange')
        .and('not.contain', 'blue')

        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('contain', 'Orange')
        .and('not.contain', 'orangeHRM')

        //if we want to check any element is visible or not 
        cy.get('.orangehrm-login-branding >img').should('be.visible')
        cy.get("[name = 'username']").should('be.empty').type('Admin')
        cy.get("[name = 'password']").should('be.empty').type('admin123')
        cy.get("[type = 'submit']").should('be.enabled').click()
        //element should be exist on dom
        cy.get('.oxd-userdropdown-tab').should('exist')




    })
    it('Explicit assertions',() =>{
        cy.visit('www.amazon.in');
        cy.xpath('').type('shirt');
        cy.xpath('').click().end();
        //cy.get('nav-logo-sprites').contains('amazon').end();
    })

})