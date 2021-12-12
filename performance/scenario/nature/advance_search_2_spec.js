describe("scenario_002 for Nature test", () => {
    it("advanced search", () => {
        cy.visit("https://www.nature.com/search/advanced");
        cy.get('input[id="advanced-search-keywords"]').clear();
        cy.get('input[id="advanced-search-keywords"]').type('carbon neutral');
        cy.get('input[name="journals"]').type('Nature Aging');
        cy.wait(1000);
        cy.get('ul>li').contains('Nature Aging').click({force:true});
        cy.get('button>span').contains('Search').click();
    })
});