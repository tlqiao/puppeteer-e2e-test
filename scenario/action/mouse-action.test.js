describe("mouse action demo", () => {
    it("mouse action ", async () => {
        await page.goto('https://devexpress.github.io/testcafe/example/');
        const x = await page.evaluate(() => document.querySelector('#developer-name').x);
        const y = await page.evaluate(() => document.querySelector('#developer-name').y);
        await console.log("this is log" + x);
        await page.mouse.click(x, y, {'button': 'right'});
        const example = await page.$('#example');
        await example.click({
            button: 'right',
        });
    });
});