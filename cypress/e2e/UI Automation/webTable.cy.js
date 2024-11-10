describe('handle web tables', () => {
    beforeEach('login',() =>{
        cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')
        cy.get('#input-username').clear().type('demo')
        cy.get('#input-password').clear().type('demo')
        cy.get('[type="submit"]').click()
        cy.get('#menu-customer').should('be.visible').click()
        cy.get('#menu-customer>ul>li:first-child').should('be.visible').click()
        cy.wait(5000)
        
    })
    it('check no of row and column',() =>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10')
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','6')
    })
    it.only('check all data from specific row and column',() =>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10')
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','6')
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(4)>td:nth-child(3)')
        .contains('leduyquan25741244@gmail.com')
    })

})