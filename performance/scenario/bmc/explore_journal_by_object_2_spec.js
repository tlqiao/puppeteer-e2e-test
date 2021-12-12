describe("scenario_002 for BMP test", () => {
    it("explore journal by object", () => {
        cy.visit("https://www.biomedcentral.com/journals");
        cy.get('li a[href="#Biomedicine"]').click();
        cy.get('li a[href="//actaneurocomms.biomedcentral.com"]').contains('Acta Neuropathologica Communications').click();
    })
});