describe("scenario_004  for Nature test", () => {
    it("subscribe", () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
        cy.visit('https://www.nature.com/nature/subscribe');
        cy.get('button>span').contains('Subscribe').click();
        cy.get('input[id="login-username"]').clear();
        cy.get('input[id="login-username"]').type('qiaotl@163.com');
        cy.get('input[id="login-password"]').type('abc123456');
        cy.get('button[id="login-submit"]').click();
        cy.get('button[id="submitAddress"]').click();
    })
});
// maybe error, execute it manually if error