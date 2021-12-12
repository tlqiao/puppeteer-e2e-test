describe("scenario_003 for springerLink test", () => {
    it("Search Article by Journel", () => {
        cy.visit("https://link.springer.com");
        cy.get('li a[ href="//link.springer.com/books/a/1"]').click()
        cy.url().should('include','books')
    cy.get('li a[href="https://link.springer.com/book/10.1007%2F978-3-642-14309-0"]').click()
        cy.contains('A 25-Year Perspective on Logic Programming')
        cy.get('div a[href="/chapter/10.1007/978-3-642-14309-0_1"]').click()
        cy.url().should('include','10.1007/978-3-642-14309-0_1')

    })
});