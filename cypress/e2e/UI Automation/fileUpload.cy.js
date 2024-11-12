import 'cypress-file-upload'

describe('file Upload', () =>{
    it('single file upload', () =>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('example.json')
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get('#content>div>h3').should('have.text','File Uploaded!')
    })
    it('file upload rename', () =>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'example.json',fileName:'myFile.json'})
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get('#uploaded-files').should('contain','myFile.json') 
        cy.get('#uploaded-files').contains('myFile.json')
    })
    it('file upload- drag and drop', () =>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('example.json',{subjectType:'drag-n-drop'})
        cy.wait(5000)
        cy.get('#drag-drop-upload').should('contain','example.json') 
    })
    it('multiple file upload', () =>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['example.json','letter.pdf','practiceletter.docx'])
        cy.wait(5000)
        cy.get('#fileList>li').should('not.have.text','No Files Selected')
        
    })
    it('file upload - shadow DOM', () =>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile(['example.json','letter.pdf','practiceletter.docx'])
        cy.wait(5000) 
        cy.get('.smart-item-name',{includeShadowDom:true}).contains('example.json')

    
    })
})