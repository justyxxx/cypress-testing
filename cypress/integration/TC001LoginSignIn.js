import loginpage from './pageObjectList/LoginPage'

beforeEach(() => {
    loginpage.openLohinPage()
})

describe('Test suite authorization ', () => {
    it('valid login/pass', () => {
        loginpage.loginAuth('qwerasdf', 'q!w@e#r$')
        loginpage.confimSubmit()
    })
    it('invalid password', () => {
        loginpage.loginAuth('qwerasdf', 'q!w@e#r$1')
        loginpage.unconfimSubmitWrongPassword()
    })
    it('invalid login', () => {
        loginpage.loginAuth('qwerasdf1', 'q!w@e#r$')
        loginpage.unconfimSubmitWrongUsername()
    })
})
