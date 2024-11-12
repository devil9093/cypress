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
})