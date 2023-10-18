module.exports = {
    "CREATE_USER_DATA":
    {
        "id": 123,
        "username": Cypress.env('username'),
        "firstName": "Andersen",
        "lastName": "Sebastian",
        "email": "adm.andersens@gmail.com",
        "password": Cypress.env('password'),
        "phone": "089112233789",
        "userStatus": 10
    }
}