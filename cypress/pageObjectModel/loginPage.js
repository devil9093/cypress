const login = (username,password)=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //if we want to check any element is visible or not 
    cy.get('.orangehrm-login-branding >img').should('be.visible')
    cy.get("[name = 'username']").should('be.empty').type(username)
    cy.get("[name = 'password']").should('be.empty').type(password)
    cy.get("[type = 'submit']").should('be.enabled').click()
    //element should be exist on dom
    cy.get('.oxd-userdropdown-tab').should('exist')
}

export {
    login
};