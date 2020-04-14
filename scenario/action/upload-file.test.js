const waitUntil = require('../common/waitUntil');
const path = require('path');
describe("upload  file demo", () => {
    it("should upload file successfully", async () => {
        page.goto("https://chercher.tech/practice/popups");
        await page.waitForSelector('input[type="file"]');
        const uploadFileHandle = await page.$('input[type="file"]');
        await uploadFileHandle.uploadFile('./testdata/test.txt');
        await waitUntil.sleep(3000);
    });

    it("should upload file with puppeteer-expect", async () => {
        page.goto("https://chercher.tech/practice/popups");
        await waitUntil.sleep(5000);
        await expect(page).toUploadFile(
            'input[type="file"]',
            path.join('./testdata/', 'test.txt'),
        );
        await waitUntil.sleep(5000);
    })
});