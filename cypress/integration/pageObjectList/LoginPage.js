const LOGIN_PAGE_URL = 'http://practice.automationtesting.in/my-account/'
class LoginPage {
    openLohinPage() {
        cy.visit(LOGIN_PAGE_URL)
    }

    typeLogin(login) {
        const loginField = cy.get('#username')
        loginField.clear().type(login)
        return this
    }

    typePassword(password) {
        const passwordField = cy.get('#password')
        passwordField.clear().type(password)
        return this
    }

    loginSubmit() {
        cy.get('[name=login]').click()
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
