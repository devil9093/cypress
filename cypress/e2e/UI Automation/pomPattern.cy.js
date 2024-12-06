import { login } from '../../pageObjectModel/loginPage'
let username, password;
describe('pageobject model pattern', ()=> {
    it ('login functionality', ()=> {
        cy.fixture('example.json').then((data) =>{
            username = data[0].name;
            password = data[0].pass
            login(username,password)
        })
        
    })
    it.only('login functionality', ()=> {
        cy.visit("www.google.com")
        cy.get('#APjFqb').type("cypress").type('{enter}');
        //cy.get('#rso>div.hlcw0c>div>div>div>div>table>tbody>tr.mslg.dmenKe>td>div.usJj9c>div>div>div>h3>a').should('have.text','Documentation')
        cy.get('#rso>div.hlcw0c>div>div>div>div>table>tbody>tr.mslg.dmenKe>td>div.usJj9c>div>div>div>h3>a').check();
        cy.url().should("have.text","why-cypress")
    })
})