const puppeteer = require('puppeteer-extra');
const devtools = require('puppeteer-extra-plugin-devtools')();
async function demo(){
    await puppeteer.use(devtools);
    await puppeteer.launch({
        headless: false,
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    }).then(async browser => {
        const tunnel = await devtools.createTunnel(browser);
        console.log("this is url " + tunnel.url);
        const newPage = await browser.newPage();
        await newPage.goto('https://www.google.com');
        await newPage.waitFor(60 * 1000);
        await browser.close()
    })
}
demo();