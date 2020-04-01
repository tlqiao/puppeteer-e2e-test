const baseTest = require('../calculation/baseTest');
describe("should upload file ", async() => {
    it("should upload file successfully", async () => {
        // await browser.on('targetcreated', async (target) => {
        //     if (target.type() === 'page') {
        //         page = await target.page();
        //     }
        // });
        // await page.goto("https://freshdesignweb.com/jquery-html5-file-upload/");
        // await expect(page).toClick('a[href="https://codepen.io/bi11johnston/pen/bsGDf"]');
        // await baseTest.sleep(15000);
        await page.goto("https://codepen.io/bi11johnston/pen/bsGDf?__cf_chl_jschl_tk__=0b1f6a622e3db5e892397f9d5bf30a54568c9140-1585134272-0-AZYiO9hUPiIZ-DAzrSD_oAMcqBXq993fTGLlJhHlq1SvsVJiAr_uZ73IKqIcdYh-mlXlt8Wor_3DTg-rZcTQCIGvedW2CF1C2fJ_eSoNwc8uzfAI_Ou1hN3F3E2cp8pBdyV1Wt722wDuRHAWcoRd4Q_TQSh8oFUsI6LUbD8zWQ83EKiykJ4hKB3z7rLuieBnbajD3XydZ0OCCc2ASIjfJ_6Rc08X04LQ_DH2u5_Xo3KzWKqw8IrXWpu9xP27ZJFevre3VrRCmKihvpStfhMaD6dEjGy9cmpap_z681eNWeLazw-NayR0geWQfo5Ok2o9RiQMd6GmF5RncXzbT84dAUNd9wrfcFCEW7NJQFmu6JU7");
        await baseTest.sleep(10000);
          const iframe = await page.frames().find(f => f.name() === 'CodePen');
        // const elementHandle = await page.$('iframe[name="CodePen"]');
        // const iframe = await elementHandle.contentFrame();
        // await iframe.waitForSelector('.fileupload.fileupload-new');
        // await iframe.click('div.fileupload.fileupload-new');
        const uploadFileHandle = await iframe.$('input[type="file"]');
        await uploadFileHandle.uploadFile('./test.txt');
        await baseTest.sleep(10000)
    });
});
