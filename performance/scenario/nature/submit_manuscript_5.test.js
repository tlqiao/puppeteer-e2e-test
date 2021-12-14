const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');
const generate = require('../../generateReport')
const path = require("path");
let configs;
let browser;
let page;
let har;
describe("use puppeteer to get har file ", () => {
    it("submit_manuscript_5.test", async () => {
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
        await har.start({path: path.join(path.resolve(), configs.natureReportPath.scenario5+'1.har')});
        await page.goto("https://mts-nature.nature.com/cgi-bin/main.plex");
        await page.waitFor(5000)
        await har.stop();
        /*
    * har2
    * */
        await har.start({path: path.join(path.resolve(), configs.natureReportPath.scenario5+'2.har')});
        await page.$eval('#login', el => el.value = 'tlqiao');
        await page.$eval('#password', el => el.value = 'abc123456');
        const submit_btn = await page.$('#submit_login');
        await submit_btn.click();
        await page.waitFor(10000)
        await har.stop();
        /*
    * har3
    * */
        await har.start({path: path.join(path.resolve(), configs.natureReportPath.scenario5+'3.har')});
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('a')];
            const targetElement = elements.find(e => e.innerText == 'Submit Manuscript');
            if (targetElement) targetElement.click();
        });
        await page.waitFor(10000)
        await har.stop();
        /*
    * har4
    * */
        await har.start({path: path.join(path.resolve(), configs.natureReportPath.scenario5+'4.har')});
        const continue_btn=await page.$('input[type="SUBMIT"]')
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