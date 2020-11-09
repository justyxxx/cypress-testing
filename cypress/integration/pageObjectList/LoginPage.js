const LOGIN_PAGE_URL = 'http://practice.automationtesting.in/my-account/'

class LoginPage {
    openLohinPage() {
        cy.visit(LOGIN_PAGE_URL)
    }

    loginSubmit() {
        cy.get('[name=login]').click()
    }

    loginAuth(login, password) {
        cy.get('#username').clear().type(login)
        cy.get('#password').click().type(password)
        this.loginSubmit()
    }

    confimSubmit() {
        cy.get('strong').should('be.visible').should('have.text', 'qwerasdf')
    }
    unconfimSubmitWrongPassword() {
        cy.get('.woocommerce-error > li').should(
            'have.text',
            'ERROR: The password you entered for the username qwerasdf is incorrect. Lost your password?'
        )
    }
    unconfimSubmitWrongUsername() {
        cy.get('.woocommerce-error > li').should('have.text', 'ERROR: Invalid username. Lost your password?')
    }
}
export default new LoginPage()
