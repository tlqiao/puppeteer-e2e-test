describe("scenario_003 for BMP test", () => {
    it("explore journal by letter", () => {
        cy.visit("https://www.biomedcentral.com/journals-a-z");
        cy.get('a[href="#jump-to-C"]').contains('C').click();
        cy.get('li a[href="//cancerandmetabolism.biomedcentral.com"]').contains('Cancer & Metabolism').click();
    })
});