const baseTest = require('../calculation/baseTest')
describe("upload file test", async () => {
    it("should upload file successfully ", async() => {
        await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_file");
        const frame = await page.frames().find(f => f.name() === 'iframeResult');
        await console.log("this is log" + frame);
        await frame.waitForSelector('input[type=submit]');
        await frame.waitForSelector('input[type="file"]');
        const uploadFileHandle =  await frame.$('input[type="file"]');
        await uploadFileHandle .uploadFile('./test.txt')
    })
});
