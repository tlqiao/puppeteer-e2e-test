const baseTest = require('../calculation/baseTest')
describe("this is multiple tab scenario", async () => {
    it("change to another tab with multiple page object", async() => {
        await page.goto("http://juliemr.github.io/protractor-demo/");
        const page2= await browser.newPage();
        await page2.goto("https://angular.realworld.io/");
        await page.bringToFront();
        await expect(page).toFill('input[ng-model="first"]','5');
        await expect(page).toSelect('select[ng-model="operator"]','SUBTRACTION');
        await expect(page).toFill('input[ng-model="second"]',  '3');
        await expect(page).toClick('#gobutton');
        await expect(page).toMatchElement('h2',{text:'2'});

        await page2.bringToFront();
        await expect(page2).toClick('app-layout-header li a',{text:'Sign in'});
        await expect(page2).toFill('app-auth-page form input[formcontrolname="email"]','e2etest@163.com');
        await expect(page2).toFill('app-auth-page form input[formcontrolname="password"]','12345678');
        await expect(page2).toClick('app-auth-page button[type="submit"]');
    });

    it.only("change to another tab after click action", async() => {
        await page.goto("https://freshdesignweb.com/jquery-html5-file-upload/");
        const newPagePromise = new Promise(x => browser.once('targetcreated', target => x(target.page())));
        await expect(page).toClick('a[href="https://codepen.io/bi11johnston/pen/bsGDf"]');
        await baseTest.sleep(15000);
        const newPage= await newPagePromise;
        await newPage.waitForSelector('a[href="/login"]');
        await newPage.click('a[href="/login"]');
        // await expect(newPage).toFill('#login-email-field','testUser');
        // await expect(newPage).toFill('#login-password-field_','testPassword');
    })
});