import 'cypress-iframe'
describe('handle iframe',() => {
it('by creating cutom command', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.getIframe('#mce_0_ifr').type('welcome')
     
})
it('by adding iframe plugins', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.frameLoaded('#mce_0_ifr');
    cy.iframe('#mce_0_ifr').type('vishal frame')
})
})