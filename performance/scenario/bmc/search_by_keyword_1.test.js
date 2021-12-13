const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');
const generate = require('../../generateReport')
const path = require("path");
let configs;
let browser;
let page;
let har;
describe("use puppeteer to get har file ", () => {
    it("use more launch properties demo", async () => {
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
        await har.start({path: path.join(path.resolve(), configs.bmcReportPath.scenario1+'1.har')});
        await page.goto("https://www.biomedcentral.com/");
        await page.waitFor(5000)
        await har.stop();
        await har.start({path: path.join(path.resolve(), configs.bmcReportPath.scenario1+'2.har')});
        //获取innertext为Search的Dom元素并点击
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('span')];
            const targetElement = elements.find(e => e.innerText == 'Search');
            if (targetElement) targetElement.click();
        });
        await page.$eval('#publisherSearch', el => el.value = 'carbon neutral');
        await page.keyboard.press('Enter');
        await page.waitFor(5000)
        await har.stop();
        await page.close();
        await browser.close();
    });
});