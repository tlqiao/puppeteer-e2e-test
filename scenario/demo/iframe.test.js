describe("iframe test", async() => {
    it("iframe test example", async() => {
            await page.goto('https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml_button_test');
            const frame = await page.frames().find(f => f.name() === 'iframeResult');
            const button = await frame.$('button');
            button.click();
        });
    });