import { deleteCall, getCall, patchCall, postCall, putCall } from '../../utility/apiUtility'
let postPayload,putPayload,patchPayload
before('get data from fixture',()=>{
    cy.fixture('example.json').then((data) =>{
        postPayload = data[2],
        putPayload = data[3],
        patchPayload = data[4]
    })
})
describe('API calls', ()=> {
    it('get call', ()=>{
        getCall ('https://jsonplaceholder.typicode.com/posts',200);
    })
    it('post call', ()=>{
        postCall ('https://jsonplaceholder.typicode.com/posts', postPayload);
        getCall ('https://jsonplaceholder.typicode.com/posts/1',200);
    })
    it('put call', ()=>{
        putCall ('https://jsonplaceholder.typicode.com/posts/1', putPayload);
        getCall ('https://jsonplaceholder.typicode.com/posts/1',200);
    })
    it('patch call', ()=>{
        patchCall ('https://jsonplaceholder.typicode.com/posts/1', patchPayload);
        getCall ('https://jsonplaceholder.typicode.com/posts/1',200);
    })
    it('delete call', ()=>{
        deleteCall ('https://jsonplaceholder.typicode.com/posts/1');
    })
})