describe('cross domain page' ,()=> {
    it("can't visit diff domain url page", async () => {
        await page.goto("http://www.lorenzostanco.com/lab/demos/CrossDomainFragment/Demo.html");
        await expect(page).toClick('p a:nth-child(1)');
    });

    it('should visit cross domain page successfully', async () => {
        await page.goto('https://chercher.tech/practice/popups');
        await page.hover('# sub-menu');
        await expect(page).toClick('div a[href="https://google.com"]');
    })
});