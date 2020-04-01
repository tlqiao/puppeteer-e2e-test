const baseTest = require('../calculation/baseTest');
describe("multiple tab demo", async () => {
    it("change to another tab after click action way two", async () => {
        browser.on('targetcreated', async (target) => {
            if (target.type() === 'page') {
                page = await target.page();
                // const url = page.url();
                // if (url.search('site.com') == -1){
                //     await page.close();
                // }
            }
        });
        await page.goto("https://freshdesignweb.com/jquery-html5-file-upload/");
        await expect(page).toClick('a[href="https://codepen.io/bi11johnston/pen/bsGDf"]');
        await baseTest.sleep(10000);
        await page.waitForSelector('a[href="/login"]');
        await page.click('a[href="/login"]');
        await expect(page).toFill('#login-email-field', 'testUser');
        await expect(page).toFill('#login-password-field_', 'testPassword');
    })
});