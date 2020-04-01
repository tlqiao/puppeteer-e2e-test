describe('Google', () => {
    beforeAll(async () => {
        await page.goto('https://news.ycombinator.com/news')
    })

    it('should add numbers correctly', async () => {
        const stories = await page.$$eval('a.storylink', anchors => { return anchors.map(anchor => anchor.textContent).slice(0, 10) })
        console.log(stories)

        const listUrl = await this.page.$$eval(element.listPost, list =>
            list.map(n => n.getAttribute('href'))
        );
    })
})