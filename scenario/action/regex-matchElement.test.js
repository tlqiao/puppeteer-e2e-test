describe("use regex to match element",() => {
    it("find element with contain text", async()=> {
        await page.goto('https://angular.realworld.io/');
        await expect(page).toClick('app-home-page li a',{text:/.*Global Feed.*/});
        await expect(page).toClick('app-layout-header li a',{text: /.*Sign in.*/})
    });

    it('validation with regex',async()=> {
        await page.goto('https://devexpress.github.io/testcafe/example/');
        const elementHandle =await page.$('#tried-section label');
        await expect(elementHandle).toMatch('I have tried TestCafe');
        await expect(elementHandle).toMatch(/.*TestCafe.*/)
    })
});