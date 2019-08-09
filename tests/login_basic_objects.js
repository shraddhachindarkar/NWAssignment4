
module.exports = {
    'Login Page Initial Render': function (browser) {
        var login = browser.page.simpleLogin();

        login.navigate()
            .waitForElementVisible('body', 1000)
            .verify.visible('@username')
            .verify.visible('@password')
            .verify.value('@submit', 'Login')
            .verify.elementNotPresent('@error')

        browser.end();
    },
    



    'Try to login with no username or password': function (browser) {
        var login = browser.page.simpleLogin();

        login.navigate()
            .waitForElementVisible('body', 1000)
            .click('@submit')
            .verify.visible('@error')
            .verify.containsText('@error', 'User name or password is not correct.')
            .verify.valueContains('@username', '')
            .verify.valueContains('@password', '')

        browser.end();
    },



    'Try to login with a username and no password': function (browser) {
        var login = browser.page.simpleLogin();

        login.navigate()
            .waitForElementVisible('body', 1000)
            .setValue('@username', 'ShraddhaC@hexaware.com')
            .click('@submit')
            .verify.visible('@error')
            .verify.containsText('@error', 'User name or password is not correct.')
            .verify.valueContains('@username', '')
            .verify.valueContains('@password', '')

        browser.end();
    },



    'Try to login with a password and no username': function (browser) {
        var login = browser.page.simpleLogin();

        login.navigate()
            .waitForElementVisible('body', 1000)
            .setValue('@password', 'ShraddhaCc')
            .click('@submit')
            .verify.visible('@error')
            .verify.containsText('@error', 'User name or password is not correct.')
            .verify.valueContains('@username', '')
            .verify.valueContains('@password', '')

        browser.end();
    },



    'Enter wrong username and password': function (browser) {
        var login = browser.page.simpleLogin();

        login.navigate()
            .waitForElementVisible('body', 1000)
            .setValue('@username', 'ShraddhaC@hexaware.com')
            .setValue('@password', 'ShraddhaCc')
            .click('@submit')
            .verify.visible('@error')
            .verify.containsText('@error', 'User name or password is not correct.')
            .verify.valueContains('@username', '')
            .verify.valueContains('@password', '')

        browser.end();
    }


};
