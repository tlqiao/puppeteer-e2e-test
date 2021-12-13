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
        await har.start({path: path.join(path.resolve(), configs.natureReportPath.scenario1+'1.har')});
        //Visit URL
        await page.goto("https://www.nature.com/");
        await page.waitFor(5000)
        await har.stop();
        await har.start({path: path.join(path.resolve(), configs.natureReportPath.scenario1+'2.har')});

        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('span')];
            const targetElement = elements.find(e => e.innerText == 'Search');
            if (targetElement) targetElement.click();
        });
        await page.$eval('#keywords', el => el.value = 'chaos experiment');
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('button')];
            const targetElement = elements.find(e => e.innerText == 'Search');
            if (targetElement) targetElement.click();
        });
        await page.waitFor(10000)
        await har.stop();
        await page.close();
        await browser.close();
    });
});