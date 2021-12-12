describe("scenario_003 for Nature test", () => {
    it("search by journal", () => {
        cy.visit("https://www.nature.com/siteindex");
        cy.get('li a[href="/boneres"]').click();
    })
});