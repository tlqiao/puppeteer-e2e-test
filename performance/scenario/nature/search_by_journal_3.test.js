// describe("scenario_003 for Nature test", () => {
//     it("search by journal", () => {
//         cy.visit("https://www.nature.com/siteindex");
//         cy.get('li a[href="/boneres"]').click();
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
    it("search_by_journal_3.test", async () => {
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
    * har1
    * */
        await har.start({path: path.join(path.resolve(), configs.natureReportPath.scenario3+'1.har')});
        //Visit URL
        await page.goto("https://www.nature.com/siteindex");
        await page.waitFor(5000)
        await har.stop();
        /*
    * har2
    * */
        await har.start({path: path.join(path.resolve(), configs.natureReportPath.scenario3+'2.har')});
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('a')];
            const targetElement = elements.find(e => e.innerText == 'Bone Research');
            if (targetElement) targetElement.click();
        });
        await page.waitFor(10000)
        await har.stop();
        /*
    *
    * */
        await page.close();
        await browser.close();
    });
});