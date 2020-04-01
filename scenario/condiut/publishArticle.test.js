describe("condiut test scenario", async () => {
    it("should publish article successfully", async () => {
        await page.goto("https://angular.realworld.io/");
        await expect(page).toClick('app-layout-header li a',{text:'Sign in'});
        await expect(page).toFill('app-auth-page form input[formcontrolname="email"]','e2etest@163.com');
        await expect(page).toFill('app-auth-page form input[formcontrolname="password"]','12345678');
        await expect(page).toClick('app-auth-page button[type="submit"]');
        await expect(page).toClick('app-layout-header ul li>a[routerlink="/editor"]');

    });
});