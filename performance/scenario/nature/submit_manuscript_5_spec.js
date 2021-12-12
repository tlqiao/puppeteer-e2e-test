describe("scenario_005  for Nature test", () => {
    it("submit manual script", () => {
        cy.visit("https://mts-nature.nature.com/cgi-bin/main.plex");
        cy.get('input[id="login"]').clear();
        cy.get('input[id="login"]').type('tlqiao');
        cy.get('input[id="password"]').clear();
        cy.get('input[id="password"]').type('abc123456');
        cy.get('input[id="submit_login"]').click();
        cy.get('tbody span a').contains("Submit Manuscript").click();
        cy.get('input[name="Continue"]').click();
    })
});