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
            configs = generate.getConfigs().windows;
        } else {
            configs = generate.getConfigs().macOrLinux;
        }
        browser = await puppeteer.launch({slowMo: '1000', headless: false, executablePath: configs.chromePath,args: [`--window-size=1920,1080`]});
        page = await browser.newPage();
        har = new PuppeteerHar(page);
        await page.setDefaultTimeout(configs.timeout)
        /*
       * har1
        * */
        await har.start({path: path.join(path.resolve(), configs.bmcReportPath.scenario1+'1.har')});
        await page.goto("https://www.biomedcentral.com/");
        // await page.waitFor(5000)
        await har.stop();
        /*
        * har2
        * */
        await har.start({path: path.join(path.resolve(), configs.bmcReportPath.scenario1+'2.har')});

        //get DOM element whose innertext is Search and clcik
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('span')];
            const targetElement = elements.find(e => e.innerText == 'Search');
            if (targetElement) targetElement.click();
        });
        await page.$eval('#publisherSearch', el => el.value = 'carbon neutral');
        await page.keyboard.press('Enter');
        // await page.waitFor(5000)
        await har.stop();
        /*
        *
        * */
        await page.close();
        await browser.close();
    });
});