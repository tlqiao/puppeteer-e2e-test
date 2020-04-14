describe("dialog demo", async () => {
    it("simulate click close on alert dialog", async () => {
        page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.dismiss();
        });
        await page.goto('https://devexpress.github.io/testcafe/example/');
        await expect(page).toClick('#populate');
    });
    it("simulate click ok button on alert dialog", async() => {
        page.on('dialog', async dialog => {
            console.log(dialog.accept());
        });
        await page.goto("https://chercher.tech/practice/popups");
        await expect(page).toClick('input[name="alert"]');
    });

    it("simulate click ok button on confirm dialog", async() => {
        page.on('dialog', async dialog => {
            console.log(dialog.accept());
        });
        await page.goto("https://chercher.tech/practice/popups");
        await expect(page).toClick('input[name="confirmation"]');
    });

    it.only("simulate input text on promote dialog", async() => {
        page.on('dialog', async dialog => {
            dialog.defaultValue("type things");
            console.log(dialog.accept());
        });
        await page.goto("https://chercher.tech/practice/popups");
        await expect(page).toClick('input[name="prompt"]');
    })
});