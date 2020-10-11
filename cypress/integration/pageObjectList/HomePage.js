const BASE_URL = 'http://practice.automationtesting.in/'

class HomePage {
    open() {
        cy.visit(BASE_URL)
    }
}

export default new HomePage()
