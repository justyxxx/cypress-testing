describe('Tests for reqres.in', () => {
    it('Positive: PATCH request - UPDATE users data', () => {
        cy.request({
            method: 'PATCH',
            url: '/api/users/2',
            body: {
                name: 'morpheus',
                job: 'zion resident',
            },
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('updatedAt')
        })
    })
})
