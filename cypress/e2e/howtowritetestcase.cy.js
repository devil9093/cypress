describe('my first step',() =>{
    it('test 1',() =>{
        console.log('my first test case')
    })
    it('test 2',function(){
        cy.visit('www.facebook.com')
        cy.title().should('eq','facebook')
    })

})