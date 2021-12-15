const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');
const generate = require('../../generateReport')
const path = require("path");
let configs;
let browser;
let page;
let har;
describe("use puppeteer to get har file ", () => {
    it("explore_journal_by_object_2_spec", async () => {
        if (generate.getConfigs().isWindows) {
            configs = generate.getConfigs().windows;
        } else {
            configs = generate.getConfigs().macOrLinux;
        }
        browser = await puppeteer.launch({slowMo: '1000', headless: false, executablePath: configs.chromePath,args: [`--window-size=1920,1080`]});
        page = await browser.newPage();
        har = new PuppeteerHar(page);
        await page.setDefaultTimeout(configs.timeout)
        await har.start({path: path.join(path.resolve(), configs.bmcReportPath.scenario2 + '1.har')});
        await page.goto("https://www.biomedcentral.com/journals");
        await page.waitFor(5000)
        await har.stop();
        await har.start({path: path.join(path.resolve(), configs.bmcReportPath.scenario2 + '2.har')});

        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('a')];
            const targetElement = elements.find(e => e.innerText == 'Biomedicine');
            if (targetElement) targetElement.click();
        });
        await page.waitFor(5000)
        await har.stop();
        await har.start({path: path.join(path.resolve(), configs.bmcReportPath.scenario2 + '3.har')});
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('a')];
            const targetElement = elements.find(e => e.innerText == 'Acta Neuropathologica Communications');
            if (targetElement) targetElement.click();
        });
        await page.waitFor(5000)
        await har.stop();
        await page.close();
        await browser.close();

    });
});