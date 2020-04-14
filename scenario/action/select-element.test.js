describe("select and control element", () => {
    it("get list demo", async()=> {
        await  page.goto('https://news.ycombinator.com/news');
        const stories = await page.$$eval('a.storylink', anchors => { return anchors.map(anchor => anchor.textContent).slice(0, 10) });
        console.log(stories)
    });
    it("control element and validate value", async()=> {
        await page.goto('http://juliemr.github.io/protractor-demo/');
        await expect(page).toFill('input[ng-model="first"]','5');
        await expect(page).toSelect('select[ng-model="operator"]','SUBTRACTION');
        await expect(page).toFill('input[ng-model="second"]',  '3');
        await expect(page).toClick('#gobutton');
        await expect(page).toMatchElement('h2',{text:'2'});
        await expect(page).toMatchElement('tbody tr:nth-child(1) td:nth-child(3)',{text:'2'});
        await expect(page).toFill('input[ng-model="first"]','2');
        await expect(page).toSelect('select[ng-model="operator"]','MULTIPLICATION');
        await expect(page).toFill('input[ng-model="second"]','3');
        await expect(page).toClick('#gobutton');
        await expect(page).toMatchElement('h2',{text:'6'});
        await expect(page).toMatchElement('tbody tr:nth-child(1) td:nth-child(3)',{text:'6'});
    });

    it("use puppeteer-expect under elementHandle", async() => {
        await page.goto('http://juliemr.github.io/protractor-demo/');

        //find parent element
        const elementHandle = await page.$('.container.ng-scope');
        await expect(elementHandle).toFill('input[ng-model="first"]','55');
    });

});