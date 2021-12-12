describe("scenario_005 for BMP test", () => {
    it("download pdf", () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
        cy.visit("https://www.biomedcentral.com/search?query=&searchType=publisherSearch");
        cy.get('li a[href="//pathogeneticsjournal.biomedcentral.com/articles/10.1186/1755-8417-1-1"]').first().click();
        cy.get('a[href="//pathogeneticsjournal.biomedcentral.com/track/pdf/10.1186/1755-8417-1-1.pdf"]').first().click({force:true});
    })
});