const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');
const generate = require('../../generateReport')
const path = require("path");
let configs;
let browser;
let page;
let har;
describe("use puppeteer to get har file ", () => {
    it("search_by_inputting_keyword_info_1.test", async () => {
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
        await har.start({path: path.join(path.resolve(), configs.natureReportPath.scenario7+'1.har')});
        //Visit URL
        await page.goto("https://www.nature.com/articles/d41586-021-03549-5");
        await page.waitFor(10000)
        await har.stop();
        // searchFormTextInput
        /*
    * har2
    * */
        await har.start({path: path.join(path.resolve(), configs.natureReportPath.scenario7+'2.har')});
        await page.evaluate(() => {
            const elements = [...document.querySelectorAll('span')];
            const targetElement = elements.find(e => e.innerText == 'Access through your institution');
            if (targetElement) targetElement.click();
        });
        await page.waitFor(10000)
        await har.stop();
        /*
    *
    * */

        await page.$eval('#searchFormTextInput',el => el.value ='Sichuan Normal'  )
        await page.evaluate(()=>{
            const element =[...document.querySelectorAll('button')]
            const targetElement=element.find((e=>e.type='submit'));
            if(targetElement) targetElement.click();
            else console('error')
        })

        /*
    *
    * */

        await har.start({path: path.join(path.resolve(), configs.natureReportPath.scenario7+'3.har')});
        await page.evaluate(()=>{
            const elements=[...document.querySelectorAll('a')];
            const targetElement =elements.find(e=>e.innerText=='Sichuan Normal University');
            if(targetElement) targetElement.click();
        });
        await page.waitFor(10000)
        await har.stop()
        await page.close();
        await browser.close();
    });
});