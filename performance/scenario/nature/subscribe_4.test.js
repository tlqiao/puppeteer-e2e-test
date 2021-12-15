const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');
const generate = require('../../generateReport')
const path = require("path");
let configs;
let browser;
let page;
let har;
describe("use puppeteer to get har file ", () => {
    it("subscribe_4.test", async () => {
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
        await har.start({path: path.join(path.resolve(), configs.natureReportPath.scenario4+'1.har')});
        //Visit URL
        await page.goto("https://www.nature.com/siteindex");
        await page.waitFor(10000)
        await har.stop();
        // searchFormTextInput
        /*
    * har2
    * */
        await har.start({path: path.join(path.resolve(), configs.natureReportPath.scenario4+'2.har')});
        const continue_btn=await page.$('a[data-track-action="Bone Research"]')
        await continue_btn.click()
        await page.waitFor(10000)
        await har.stop();
        /*
    *
    * */
        await page.close();
        await browser.close();
    });
});