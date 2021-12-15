// describe("scenario_006  for Nature test", () => {
//     it("submit a research article", () => {
//         cy.visit("https://author-welcome.nature.com/41598/");
//         cy.get('input[id="regular_submission"]').click();
//         cy.wait(1000);
//         cy.get('input[value="Continue"]').click();
//         cy.get('input[value="Start submission"]').click();
//     })
// });
//
// // maybe error, execute it manually if error

//
// describe("scenario_003 for Nature test", () => {
//     it("search by journal", () => {
//         cy.visit("https://www.nature.com/siteindex");
//         cy.get('li a[href="/boneres"]').click();
//     })
// });

const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');
const generate = require('../../generateReport')
const path = require("path");
let configs;
let browser;
let page;
let har;
describe("use puppeteer to get har file ", () => {
    it("submit_research_article_6.test", async () => {
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
        await har.start({path: path.join(path.resolve(), configs.natureReportPath.scenario6+'1.har')});
        //Visit URL
        await page.goto("https://author-welcome.nature.com/41598/");
        await page.waitFor(5000)
        await har.stop();


        const search_btn = await page.$('label[for=\"regular_submission\"]');
        await search_btn.click();
        await page.click('#update-old-subjects')
        await page.waitFor(10000)
        await page.$eval('#login-email', el => el.value = 'yiran.zhang@thoughtworks.com');
        const email_btn= await page.$('button[class="u-button u-button--primary u-button--small"]');
        await email_btn.click()
        // await email_btn.waitForNavigation();
        await page.waitFor(5000);
        await page.$eval('#login-password',el =>el.value='zyrqwer1234567890');
        const pwd_btn =await page.$('button[class="u-button u-button--primary u-button--small"]');
        await har.start({path: path.join(path.resolve(), configs.natureReportPath.scenario6+'2.har')});
        await pwd_btn.click();
        await page.waitFor(5000);
        await har.stop();


        await har.start({path: path.join(path.resolve(), configs.natureReportPath.scenario6+'3.har')});
        const start_submission=await page.$('input[value="Start submission"]');
        await start_submission.click()
        await page.waitFor(3000);
        await har.stop();


        /*
    *
    * */
        await page.close();
        await browser.close();
    });
});
