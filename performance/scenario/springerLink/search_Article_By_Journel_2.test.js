const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');
const generate = require('../../generateReport')
const path = require("path");
let configs;
let browser;
let page;
let har;
describe("use puppeteer to get har file ", () => {
    it("search_Article_By_Journel_2.test", async () => {
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
        await har.start({path: path.join(path.resolve(), configs.springerLinkReportPath.scenario2+'1.har')});
        //Visit URL
        await page.goto("https://link.springer.com/");
        await page.waitFor(5000)
        // get element and click
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('a')];
            const targetElement = elements.find(e => e.innerText == 'Journals A - Z');
            if (targetElement) targetElement.click();
        });
        await har.stop();
        await har.start({path: path.join(path.resolve(), configs.springerLinkReportPath.scenario2+'2.har')});
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('a')];
            const targetElement = elements.find(e => e.innerText == 'C');
            if (targetElement) targetElement.click();
        });
        await har.stop();
        await har.start({path: path.join(path.resolve(), configs.springerLinkReportPath.scenario2+'3.har')});

        const input_area = await page.$("#search-springerlink-journals");
        await input_area.type("Computers")
        await page.waitFor(10000)
        await page.keyboard.press('Enter');

        await har.stop();
        await page.close();
        await browser.close();
    });
});