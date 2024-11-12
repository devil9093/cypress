describe('custom commands',()=>{
   it('rightClick',()=>{
    cy.visit('https://demo.opencart.com/')
    //custom command
    cy.rightClickAction('#content>div.row.row-cols-1.row-cols-sm-2.row-cols-md-3.row-cols-xl-4>div:nth-child(2)>div>div.content>div>h4>a')
   })

   it('double click',()=>{
    cy.visit('https://demo.opencart.com/')
    //custom command
    cy.doubleClickAction('#content>div.row.row-cols-1.row-cols-sm-2.row-cols-md-3.row-cols-xl-4>div:nth-child(2)>div>div.content>div>h4>a')
})
})