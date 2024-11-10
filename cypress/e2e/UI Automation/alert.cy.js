
describe('handling alert', () =>{
    it('javascript alert', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()
        //verify alert message
        cy.on('window:alert', (alerttext) =>{
            expect(alerttext).to.contains('I am a JS Alert')
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    it('javascript confirm alert for - OK', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
        //verify alert message by defalut it select ok option
        cy.on('window:confirm', (alerttext) =>{
            expect(alerttext).to.contains('I am a JS Confirm')
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it('javascript confirm alert for - cancel', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
        //verify alert message by defalut it select ok option
        cy.on('window:confirm', (alerttext) =>{
            expect(alerttext).to.contains('I am a JS Confirm')
        })
        cy.on('window:confirm',()=> false);
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    it.only('javascript prompt alert for - ok & cancel', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((text) =>{
            cy.stub(text, 'prompt').returns('Welcome Vishal')
        })
        cy.get('[onclick="jsPrompt()"]').click()
        //for cancel option have to enable below line
        //cy.on('window:prompt',()=> false);
        cy.get('#result').should('have.text', 'You entered: Welcome Vishal')
        //for cancel option enable below line
        //cy.get('#result').should('have.text', 'You entered: null')
    })
})