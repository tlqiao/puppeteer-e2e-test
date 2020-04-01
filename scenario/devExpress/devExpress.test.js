const baseTest = require('../calculation/baseTest');
const dragElement = require('./dragElement');
describe("devExpress web page test", async () => {
    it("assert practice", async ()=> {
        page.on('dialog',  async dialog => {
            console.log(dialog.message());
            await dialog.dismiss();
    });
        await page.goto('https://devexpress.github.io/testcafe/example/');
        await expect(page).not.toMatchElement('#abc');
        expect(await page.$eval('#submit-button', el => {return el.getAttribute('disabled')})).toEqual('disabled');
        await expect(page).toFill('#developer-name','abc');
        expect(await page.$eval('#submit-button', el => {return el.getAttribute('disabled')})).toBeFalsy();

        await expect(page).toClick('#populate');

        expect(await page.$eval('#windows',el=> {return el.checked})).toBeFalsy();
        await expect(page).toClick('#windows');
        expect(await page.$eval('#windows',el=> {return el.checked})).toBeTruthy();

        expect(await page.$eval('#main-form #remote-testing',el=> {return el.checked})).toBeFalsy();
        await expect(page).toClick('#main-form #remote-testing');
        expect(await page.$eval('#main-form #remote-testing',el=> {return el.checked})).toBeTruthy();

        await expect(page).toClick('#tried-test-cafe');
        // await baseTest.sleep(2000);
        // await dragElement.dragAndDrop('.slider-container #slider span','.slider-container.slider-value:nth-child(1)',page)

    });

    it("keyboard action practice",async ()=> {
        await page.goto('https://devexpress.github.io/testcafe/example/');
        await page.focus('#developer-name');
        await page.keyboard.down('Shift');
        await page.keyboard.press('KeyA');
        await page.keyboard.up('Shift');
        await page.keyboard.press('Tab');
        await page.focus('#developer-name');
        await page.keyboard.press('Shift','abc')
    });

    it.only("mouse action practice",async() => {
        await page.goto('https://devexpress.github.io/testcafe/example/');
        const x = await page.evaluate(() => document.querySelector('#developer-name').x);
       const y=await page.evaluate(() => document.querySelector('#developer-name').y);
        await console.log("this is log" +x);
        await page.mouse.click(x,y,{'button':'right'});
        const example = await page.$('#example');
        await example.click({
            button: 'right',
        });
    })
});