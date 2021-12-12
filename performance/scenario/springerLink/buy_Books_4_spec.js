describe("scenario_004 for springerLink test", () => {
    it("Buy Books", () => {
        cy.visit("https://link.springer.com/chapter/10.1007/978-3-030-82420-4_4");
        cy.contains('Log in')
        cy.get('button[data-track-label="buy ebook"]').click({force: true})
        cy.url().should('include','login')
        cy.get('input[id="login-form-email"]').type('yiran.zhang@thoughtworks.com')
        cy.get('input[id="login-form-password"]').type('zyrqwer123')
        cy.get('button span[class=" shell "]').contains('Log In').click()
        cy.contains('Place your order')
        cy.get('span').contains('Credit card').click()
        // cy.get('button span[class=" shell "]').contains('Buy now').click({force: true})
        // cy.contains('Payment details')

    })
});