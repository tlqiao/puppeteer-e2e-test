const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');
const generate = require('../../generateReport')
const path = require("path");
let configs;
let browser;
let page;
let har;
describe("use puppeteer to get har file ", () => {
    it("explore_journal_by_letter_3", async () => {
        if (generate.getConfigs().isWindows) {
            configs = generate.getConfigs().windows;
        } else {
            configs = generate.getConfigs().macOrLinux;
        }
        browser = await puppeteer.launch({slowMo: '1000', headless: false, executablePath: configs.chromePath});
        page = await browser.newPage();
        har = new PuppeteerHar(page);
        await page.setViewport({width: 1920, height: 1080});
        await page.setDefaultTimeout(configs.timeout)
        await har.start({path: path.join(path.resolve(), configs.bmcReportPath.scenario3 + '1.har')});
        //Visit URL
        await page.goto("https://www.biomedcentral.com/journals-a-z");
        await page.waitFor(5000)
        await har.stop();
        await har.start({path: path.join(path.resolve(), configs.bmcReportPath.scenario3 + '2.har')});
        //Click C
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('a')];
            const targetElement = elements.find(e => e.innerText == 'C');
            if (targetElement) targetElement.click();
        });
        await page.waitFor(5000)
        await har.stop();
        //Click Cancer & Metabolism
        await har.start({path: path.join(path.resolve(), configs.bmcReportPath.scenario3 + '3.har')});
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('a')];
            const targetElement = elements.find(e => e.innerText == 'Cancer & Metabolism');
            if (targetElement) targetElement.click();
        });
        await page.waitFor(10000)
        await har.stop();
        await page.close();
        await browser.close();

    });
});