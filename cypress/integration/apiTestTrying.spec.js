describe('Tests for reqres.in', () => {
    it('Positive: POST request - create user endpoint (values from file)', () => {
        cy.fixture('user').then((user) => {
            cy.request('POST', '/api/users', user).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('name', user.name)
                expect(response.body).to.have.property('job', user.job)
            })
        })
    })

    it('Negative: POST request - login unsuccessful', () => {
        cy.request({
            method: 'POST',
            url: '/api/login',
            failOnStatusCode: false,
            body: { email: 'asdasdas@kasdasd' },
        }).then((response) => {
            expect(response.status).to.eq(400)
        })
    })
})
