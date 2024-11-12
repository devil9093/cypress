describe('fixtures',() =>{
    // it('direct access',() =>{
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //     cy.fixture('example.json').then((data)=>{

    //     cy.title().should('include', 'Orange')
    //     .and('eq', 'OrangeHRM')
    //     .and('contain', 'Orange')
    //     .and('not.contain', 'orangeHRM')
    //     cy.get('.orangehrm-login-branding >img').should('be.visible')
    //     cy.get("[name = 'username']").type(data.name);
    //     cy.get("[name = 'password']").type(data.pass);
    //     cy.get("[type = 'submit']").should('be.enabled').click();
    //     //element should be exist on dom
    //     cy.get('.oxd-userdropdown-tab').should('exist')
    //     })
    // })
    let username;
    let password;

    before(()=>{
        cy.fixture('example.json').then((data)=>{
            username = data[1].name
            password = data[1].pass
        })

    })
    it('using hooks with neagtive test or multiple data',() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('contain', 'Orange')
        .and('not.contain', 'orangeHRM')
        cy.get('.orangehrm-login-branding >img').should('be.visible')
        cy.get("[name = 'username']").type(username);
        cy.get("[name = 'password']").type(password);
        cy.get("[type = 'submit']").should('be.enabled').click();
        //element should be exist on dom
        cy.get('.oxd-userdropdown-tab').should('not.exist')
    })

})