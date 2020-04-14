async function demo(){
    page.goto("https://angular.realworld.io/");
page.evaluate(() => {
    debugger;
    document.querySelector('li a[href="/login"]').click()
})
}
demo();