const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');
const generate = require('../../generateReport')
const path = require("path");
let configs;
let browser;
let page;
let har;
//wait for debug
describe("use puppeteer to get har file ", () => {
    it("download_article_4", async () => {
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
        /*
    * har1
     * */
        await har.start({path: path.join(path.resolve(), configs.bmcReportPath.scenario4 + '1.har')});
        //Visit URL
        await page.goto("https://www.biomedcentral.com/search?query=&searchType=publisherSearch");
        await page.waitFor(5000)
        await har.stop();
        /*
    *
     * */
        await har.start({path: path.join(path.resolve(), configs.bmcReportPath.scenario4 + '2.har')});
        const Full_Text_btn=await page.$('a[href="//pathogeneticsjournal.biomedcentral.com/articles/10.1186/1755-8417-1-1"]')
        await Full_Text_btn.click()
        await page.waitFor(5000)
        await har.stop();
        /*
*
* */

        await har.start({path: path.join(path.resolve(), configs.bmcReportPath.scenario4 + '3.har')});
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('span')];
            const targetElement = elements.find(e => e.innerText == 'Download PDF');
            if (targetElement) targetElement.click();
        });
        await page.waitFor(10000)
        await har.stop();
        await page.close();
        await browser.close();

    });
});