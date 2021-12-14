// describe("scenario_001 for springerLink test", () => {
//     it("search by inputting Computer", () => {
//         cy.visit("https://link.springer.com");
//         cy.get('input[id="query"]').clear();
//         cy.get('input[id="query"]').type('Computer');
//         cy.get('input[id=search]').click()
//         cy.url().should('include','Computer')
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
    it("search_by_inputting_keyword_info_1.test.js", async () => {
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
        /*
        *
        * */
        await har.start({path: path.join(path.resolve(), configs.springerLinkReportPath.scenario1+'1.har')});
        await page.goto("https://link.springer.com/");
        await page.waitFor(5000)
        await har.stop();
        /*
        *
        * */
        await har.start({path: path.join(path.resolve(), configs.springerLinkReportPath.scenario1+'2.har')});
        await page.$eval('#query', el => el.value = 'Computer');
        const search_btn = await page.$('#search');
        await search_btn.click();
        await page.waitFor(5000)
        await har.stop();
        /*
        *
        * */
        await page.close();
        await browser.close();
    });
});