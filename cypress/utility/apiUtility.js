const getCall = (
        url,
        statusCode)=>{
            cy.request({
                url: url,
                method: 'GET'
            }).then((response)=>{

                console.log(response);
                expect (response.status).to.eq(statusCode)

            })
}
const postCall = (
    url,
    payload)=>{
        cy.request({
            url: url,
            method: 'POST',
            body: payload
        }).then((response)=>{
            const {status} = response
            expect (status).to.eq(201)

        })
}

const putCall = (
    url,
    payload)=>{
        cy.request({
            url: url,
            method: 'PUT',
            body: payload
        }).then((response)=>{
            const {status} = response
            expect (status).to.eq(200)

        })
}

const patchCall = (
    url,
    payload)=>{
        cy.request({
            url: url,
            method: 'PATCH',
            body: payload
        }).then((response)=>{
            const {status} = response
            expect (status).to.eq(200)

        })
}

const deleteCall = (
    url,
    payload)=>{
        cy.request({
            url: url,
            method: 'DELETE',
        }).then((response)=>{
            const {status} = response
            expect (status).to.eq(200)

        })
}

export {
    getCall,
    postCall,
    putCall,
    patchCall,
    deleteCall
}