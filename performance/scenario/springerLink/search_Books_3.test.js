// describe("scenario_003 for springerLink test", () => {
//     it("Search Article by Journel", () => {
//         cy.visit("https://link.springer.com");
//         cy.get('li a[ href="//link.springer.com/books/a/1"]').click()
//         cy.url().should('include','books')
//     cy.get('li a[href="https://link.springer.com/book/10.1007%2F978-3-642-14309-0"]').click()
//         cy.contains('A 25-Year Perspective on Logic Programming')
//         cy.get('div a[href="/chapter/10.1007/978-3-642-14309-0_1"]').click()
//         cy.url().should('include','10.1007/978-3-642-14309-0_1')
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
    it("search_Books_3.test", async () => {
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
        await har.start({path: path.join(path.resolve(), configs.springerLinkReportPath.scenario3+'1.har')});
        //Visit URL
        await page.goto("https://link.springer.com/");
        await page.waitFor(5000)
        // get element and click
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('a')];
            const targetElement = elements.find(e => e.innerText == 'Books A - Z');
            if (targetElement) targetElement.click();
        });
        await har.stop();
        //---->

        //---->
        await har.start({path: path.join(path.resolve(), configs.springerLinkReportPath.scenario3+'2.har')});
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('a')];
            const targetElement = elements.find(e => e.innerText == 'A 25-Year Perspective on Logic Programming');
            if (targetElement) targetElement.click();
        });
        await har.stop();
        //---->

        //---->
        await har.start({path: path.join(path.resolve(), configs.springerLinkReportPath.scenario3+'3.har')});
        //Logic Programming in Italy: A Historical Perspective
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('a')];
            const targetElement = elements.find(e => e.innerText == 'Logic Programming in Italy: A Historical Perspective');
            if (targetElement) targetElement.click();
        });
        await har.stop();
        //---->

        await page.close();
        await browser.close();
    });
});