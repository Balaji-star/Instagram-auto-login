const assert = require('assert')
const chromedriver = require('chromedriver');
const { Given, When, Then} = require('cucumber');
const { until } = require('selenium-webdriver');
const {Builder, By} = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();
//var {setDefaultTimeout} = require('cucumber');
//setDefaultTimeout = (60*1000);  

Given("open the Google page in browser",  async () => {
    return "true"
 
})

When("entering valid search", {timeout: 20 * 5000},async()=>{
    await driver.get("https://www.google.co.in/");
    let Search = await driver.findElement(By.name('q'));
    Search.sendKeys('instagram');
    let SignInBtn = await driver.findElement(By.css('div.L3eUgb:nth-child(2) div.o3j99.ikrT4e.om7nvf:nth-child(3) div:nth-child(1) div.A8SBwf:nth-child(1) div.FPdoLc.lJ9FBc:nth-child(5) center:nth-child(1) > input.gNO89b'));
    SignInBtn.click();
    
    
})
When("hitting the first link",async()=>{
    setTimeout(async () => {
        let FirstLink = await driver.findElement(By.className('LC20lb'));
        FirstLink.click();
    })
    
});
When("opening the logIn page",()=>{return "fdsf"})

When("enter the usename as {string} and password as {string}", async (username, password) => {
    let UsernameBox = await driver.wait(until.elementLocated(By.className('_2hvTZ')));
    let passwordBox = await driver.findElement(By.name('password'));
    UsernameBox.sendKeys(username);
    passwordBox.sendKeys(password);
    let SignInBtn = await driver.findElement(
        By.className("L3NKy")
    );
    SignInBtn.click();
})

When("hit the login button", async () => {
    let SignInBtn = await driver.findElement(
        By.className("L3NKy")
    );
    SignInBtn.click();
})

/*Then("check the successful login with title {string}", async (titleString) => {
    let title = await driver.findElement(By.xpath("//head//title"))
    assert.strictEqual(title, 'Instagram');
}) */

