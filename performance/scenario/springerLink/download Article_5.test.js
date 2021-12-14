const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');
const generate = require('../../generateReport')
const path = require("path");
let configs;
let browser;
let page;
let har;
describe("use puppeteer to get har file ", () => {
    it("download Article_5.test", async () => {
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
        await har.start({path: path.join(path.resolve(), configs.springerLinkReportPath.scenario5+'1.har')});
        //Visit URL
        await page.goto("https://link.springer.com/search?facet-content-type=%22Article%22");
        await page.waitFor(5000)
        await har.stop()
        //---->


        // get element:buy ebook and click
        await har.start({path: path.join(path.resolve(), configs.springerLinkReportPath.scenario5+'2.har')});
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('a')];
            const targetElement = elements.find(e => e.innerText == 'Scene text removal via cascaded text stroke detection and erasing');
            if (targetElement) targetElement.click();
        });
        await page.waitFor(5000)
        await har.stop();
        //---->

        //---->
        await har.start({path: path.join(path.resolve(), configs.springerLinkReportPath.scenario5+'3.har')});
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('span')];
            const targetElement = elements.find(e => e.innerText == 'Download PDF');
            if (targetElement) targetElement.click();
        });
        await page.waitFor(50000)
        await har.stop();
        //---->
        await page.close();
        await browser.close();
    });
});