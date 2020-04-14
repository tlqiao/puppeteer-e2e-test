const puppeteer = require('puppeteer-extra');
const repl = require('puppeteer-extra-plugin-repl')();
describe("demo", () => {
    it("should interactive REPL success", async () => {
        await puppeteer.use(repl);
        await puppeteer.launch({
            headless: true,
            executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
        }).then(async browser => {
            const page = await browser.newPage();
            await page.goto('https://example.com');
            // Start an interactive REPL here with the `page` instance.
            await page.repl();
            // Afterwards start REPL with the `browser` instance.
            await browser.repl();
            await browser.close()
        })
    })
});