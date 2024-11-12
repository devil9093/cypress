describe('',() => {
    before(()=>{
        cy.log('before block')
    })
    beforeEach(()=>{
        cy.log('beforeEach block')
    })
    it('test 1',() =>{
        cy.log('it block test 1 block')
    })
    it('test 2',() =>{
        cy.log('it block test 2 block')
    })
    after(()=>{
        cy.log('after block')
    })
    afterEach(()=>{
        cy.log('after each block')
    })
})