const DATA = require('../../../JSONdata/userData.js')

it('Create a user', () => {
    let body = DATA.CREATE_USER_DATA
    console.log(body)
    cy.request('POST', '/user', body).as('createUser');
    cy.get('@createUser').then(createUser => {
        expect(createUser.status).to.equal(200);
    })
})