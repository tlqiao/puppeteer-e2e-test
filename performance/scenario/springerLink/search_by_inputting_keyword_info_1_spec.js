describe("scenario_001 for springerLink test", () => {
    it("search by inputting Computer", () => {
        cy.visit("https://link.springer.com");
        cy.get('input[id="query"]').clear();
        cy.get('input[id="query"]').type('Computer');
        cy.get('input[id=search]').click()
        cy.url().should('include','Computer')
    })
});