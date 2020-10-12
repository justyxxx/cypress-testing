describe('Tests for reqres.in', () => {
    it('Positive: DELETE request - DELETE users data', () => {
        cy.request({
            method: 'DELETE',
            url: '/api/users/2',
            body: {},
        }).then((response) => {
            expect(response.status).to.eq(204)
        })
    })
})
