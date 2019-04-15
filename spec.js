const login_helper = require("./elements/login-help");
describe ('create facebook account', function () {
    it ('should create facebook account', function () {
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    browser.get('https://www.facebook.com/');
    browser.sleep(1000);
    login_helper.NameField.sendKeys(login_helper.Name);
    login_helper.SurnameField.sendKeys(login_helper.Surname);
    login_helper.EmailField.sendKeys(login_helper.Email);
    login_helper.PasswordField.sendKeys(login_helper.Password);
    browser.element(by.id('u_0_a')).click();
    browser.sleep(4000);
    login_helper.EmailRepeatField.sendKeys(login_helper.Email);
    browser.element(by.id('u_0_u')).click();
    browser.sleep(3000);
    browser.element(by.cssContainingText('._42ft' , 'Yes')).click();
    browser.sleep(30000);
    })
})