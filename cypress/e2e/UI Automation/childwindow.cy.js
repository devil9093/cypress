
describe('handle child window',() => {
it('by removing target attribute', () => {
    cy.visit('https://the-internet.herokuapp.com/windows')
    cy.get('.example >a').invoke('removeAttr','target').click();
    cy.url().should('include','https://the-internet.herokuapp.com/windows/new') 
})
it('by capturing href value', () => {
    cy.visit('https://the-internet.herokuapp.com/windows')
    cy.get('.example >a').then((t) =>{
        let url = t.prop('href')
        cy.visit(url)
    })
    cy.url().should('include','https://the-internet.herokuapp.com/windows/new') 
})
})