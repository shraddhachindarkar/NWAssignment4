module.exports = {
    //'@disabled' : true ,


    before: function () {
        console.log("Staring Suite")
    },

    'Test': function (browser) {
        var login = browser.page.login_page_object_with_section();
        login.navigate();
        login.expect.section('@logininput').to.be.visible;

        var logininputsection = login.section.logininput;
        logininputsection.expect.element('@username').to.be.visible;
        logininputsection.expect.element('@password').to.be.visible;

        browser.end();
    },

    'Try to login with no username or password': function (browser) {
        var login = browser.page.login_page_object_with_section();
        login.navigate();
        login.expect.section('@logininput').to.be.visible;

        var logininputsection = login.section.logininput;
        logininputsection.expect.element('@username').to.be.visible;
        logininputsection.expect.element('@password').to.be.visible;
        logininputsection.expect.element('@submit').to.be.visible;
        click('@submit');



        browser.end();
    },

    after: function () {
        console.log("Stopping suite")
    }

};


