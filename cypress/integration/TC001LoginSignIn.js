import loginpage from './pageObjectList/LoginPage'

beforeEach(() => {
    loginpage.openLohinPage()
})

describe('Test suite authorization ', () => {
    it('valid login/pass', () => {
        loginpage.typeLogin('qwerasdf')
        loginpage.typePassword('q!w@e#r$')
        loginpage.loginSubmit()
        loginpage.confimSubmit()
    })
    it('invalid password', () => {
        loginpage.typeLogin('qwerasdf')
        loginpage.typePassword('q!w@e#r$1')
        loginpage.loginSubmit()
        loginpage.unconfimSubmitWrongPassword()
    })
    it('invalid login', () => {
        loginpage.typeLogin('qwerasdf1')
        loginpage.typePassword('q!w@e#r$')
        loginpage.loginSubmit()
        loginpage.unconfimSubmitWrongUsername()
    })
})
