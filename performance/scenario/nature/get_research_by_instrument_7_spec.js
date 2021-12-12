describe("scenario_007  for Nature test", () => {
    it("get research by instrument", () => {
        cy.visit("https://www.nature.com/articles/d41586-021-03549-5");
        cy.get('a[data-track-action="institution access"]').click();
        cy.wait(2000);
        cy.get('input[id="searchFormTextInput"]').clear();
        cy.get('input[id="searchFormTextInput"]').type('Sichuan Normal');
        cy.get('button[id="institution-submit"]').click();
        cy.get('li a').contains("Sichuan Normal University").click();
    })
});
// maybe error, execute it manually if error