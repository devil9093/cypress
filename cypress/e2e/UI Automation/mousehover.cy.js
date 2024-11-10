import '@4tw/cypress-drag-drop'
describe('mouse actions',()=>{
   it('mouseHover',()=>{
    cy.visit('https://demo.opencart.com/')
    cy.get('#narbar-menu>ul>li:nth-child(1)>a').trigger('mouseover').click();
   })

   it('rightClick',()=>{
    cy.visit('https://demo.opencart.com/')
    //by using trigger
    //cy.get('#content>div.row.row-cols-1.row-cols-sm-2.row-cols-md-3.row-cols-xl-4>div:nth-child(2)>div>div.content>div>h4>a').trigger('contextmenu');
    //by using rightclick
    cy.get('#content>div.row.row-cols-1.row-cols-sm-2.row-cols-md-3.row-cols-xl-4>div:nth-child(2)>div>div.content>div>h4>a').rightclick();

   })

   it('double click',()=>{
    cy.visit('https://demo.opencart.com/')
    //by using trigger
    //cy.get('#content>div.row.row-cols-1.row-cols-sm-2.row-cols-md-3.row-cols-xl-4>div:nth-child(2)>div>div.content>div>h4>a').trigger('dblclick');
    //by using rightclick
    cy.get('#content>div.row.row-cols-1.row-cols-sm-2.row-cols-md-3.row-cols-xl-4>div:nth-child(2)>div>div.content>div>h4>a').dblclick();
   })

   it('drag and drop',()=>{
    cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette')
    cy.get('#box3').drag('#box103',{force:true})
    cy.wait(3000)
    cy.get('#box6').drag('#box106',{force:true})

   })

   it.only('scrolling page',()=>{
    
    cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
    //india flag
    cy.get('#content>div.container>div:nth-child(2)>table:nth-child(1)>tbody>tr:nth-child(86)>td:nth-child(1)>img').scrollIntoView({duration:2000})
    cy.get('#content>div.container>div:nth-child(2)>table:nth-child(1)>tbody>tr:nth-child(30)>td:nth-child(1)>img').scrollIntoView({duration:2000})
    cy.get('#content>div.container>div:nth-child(2)>table:nth-child(1)>tbody>tr:nth-child(100)>td:nth-child(1)>img').scrollIntoView({duration:2000})

   })
})