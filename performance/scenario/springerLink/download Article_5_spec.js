describe("scenario_005 for springerLink test", () => {
    it("download Article", () => {
        cy.visit("https://link.springer.com/search?facet-content-type=%22Article%22");
        cy.get("li h2 a[href=\"/article/10.1007/s41095-021-0242-8\"]").click()
        cy.contains('Scene text removal via cascaded text stroke detection and erasing')
        cy.contains('Open Access')
        cy.get('div a[href="https://link.springer.com/content/pdf/10.1007/s41095-021-0242-8.pdf"]').first().click({force: true})
        cy.url().should('include','pdf')
    })
});