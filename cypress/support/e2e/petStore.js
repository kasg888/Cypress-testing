const DATA = require('../../../JSONdata/userData.js')

describe('PetStore API Inventory Testing', () => {
    it('Create a user', () => {
        let body = DATA.CREATE_USER_DATA
        console.log(body)
        cy.request('POST', '/user', body).as('createUser');
        cy.get('@createUser').then(createUser => {
            expect(createUser.status).to.equal(200);
        })
    })

    const loginUser = {
        method : 'GET',
        url : '/user/login',
        qs : {
            username : Cypress.env('username'),
            password : Cypress.env('password')
        }
    }
    it('login registered user', () => {
        cy.request(loginUser).as('loginUser');
        cy.get('@loginUser').then(loginUser => {
            expect(loginUser.status).to.equal(200);
        })
    })
})