describe("scenario_001 for Nature test", () => {
    it("search by keyword", () => {
        cy.visit("https://www.nature.com/");
        cy.get('header li a span').contains('Search').click();
        cy.get('input[id="keywords"]').clear();
        cy.get('input[id="keywords"]').type("chaos experiment");
        cy.get('form button').contains('Search').click();
    })
});