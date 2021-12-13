// describe("scenario_004 for springerLink test", () => {
//     it("Buy Books", () => {
//         cy.visit("https://link.springer.com/chapter/10.1007/978-3-030-82420-4_4");
//         cy.contains('Log in')
//         cy.get('button[data-track-label="buy ebook"]').click({force: true})
//         cy.url().should('include','login')
//         cy.get('input[id="login-form-email"]').type('yiran.zhang@thoughtworks.com')
//         cy.get('input[id="login-form-password"]').type('zyrqwer123')
//         cy.get('button span[class=" shell "]').contains('Log In').click()
//         cy.contains('Place your order')
//         cy.get('span').contains('Credit card').click()
//         // cy.get('button span[class=" shell "]').contains('Buy now').click({force: true})
//         // cy.contains('Payment details')
//
//     })
// });


const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');
const generate = require('../../generateReport')
const path = require("path");
let configs;
let browser;
let page;
let har;
describe("use puppeteer to get har file ", () => {
    it("buy_Books_4.test", async () => {
        if (generate.getConfigs().isWindows) {
            configs=generate.getConfigs().windows;}
        else {
            configs=generate.getConfigs().macOrLinux;
        }
        browser = await puppeteer.launch({slowMo: '1000', headless: false, executablePath: configs.chromePath});
        page = await browser.newPage();
        har = new PuppeteerHar(page);
        await page.setViewport({width: 1920, height: 1080});
        await page.setDefaultTimeout(configs.timeout)

        //---->
        await har.start({path: path.join(path.resolve(), configs.springerLinkReportPath.scenario4+'1.har')});
        //Visit URL
        await page.goto("https://link.springer.com/chapter/10.1007/978-3-030-82420-4_4");
        await page.waitFor(5000)
        await har.stop()
        //---->


        // get element:buy ebook and click
        await har.start({path: path.join(path.resolve(), configs.springerLinkReportPath.scenario4+'2.har')});
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('button')];
            const targetElement = elements.find(e => e.innerText == 'Buy eBook');
            if (targetElement) targetElement.click();
        });
        await har.stop();
        //---->

        //---->
        await har.start({path: path.join(path.resolve(), configs.springerLinkReportPath.scenario4+'3.har')});
        await page.$eval('#login-form-email', el => el.value = 'yiran.zhang@thoughtworks.com');
        await page.$eval('#login-form-password', el => el.value = 'zyrqwer123');
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('button')];
            const targetElement = elements.find(e => e.innerText == 'Log In');
            if (targetElement) targetElement.click();
        });
        await page.waitFor(5000)
        await har.stop();
        //---->

        //---->
        await har.start({path: path.join(path.resolve(), configs.springerLinkReportPath.scenario4+'3.har')});
        //Logic Programming in Italy: A Historical Perspective
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('span')];
            const targetElement = elements.find(e => e.innerText == 'Credit card');
            if (targetElement) targetElement.click();
        });

        await har.stop();
        //---->

        //---->
        await har.start({path: path.join(path.resolve(), configs.springerLinkReportPath.scenario4+'4.har')});
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('span')];
            const targetElement = elements.find(e => e.innerText == 'Buy now');
            if (targetElement) targetElement.click();
        });
        await page.waitFor(10000)
        await har.stop();
        //---->log out status
        // await page.goto("https://link.springer.com/chapter/10.1007/978-3-030-82420-4_4");
        // const lgb = await page.$("#button-Dropdown-MenuAdmin-dropdown");
        // await lgb.click()
        // await page.evaluate(() => {
        //     const elements = [...document.querySelectorAll('span')];
        //     const targetElement = elements.find(e => e.innerText == 'Log out');
        //     // '<br>No additional fees apply.');
        //     if (targetElement) targetElement.click();
        // });

        await page.close();
        await browser.close();
    });
});