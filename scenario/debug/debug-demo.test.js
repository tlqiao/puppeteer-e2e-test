describe("debug demo", ()=> {
    it('should debug with debugger successfully', async()=> {
        page.goto("https://angular.realworld.io/");
        page.click('li a[href="/login"]');
        page.goBack();
        page.goForward();
        page.click('li a[href="/register"]');
        page.evaluate(()=> {document.querySelector('li a[href="/login"]').click()})
    })
});