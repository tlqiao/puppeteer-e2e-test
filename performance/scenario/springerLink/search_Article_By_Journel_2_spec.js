describe("scenario_002 for springerLink test", () => {
    it("Search Article by Journel", () => {
        cy.visit("https://link.springer.com");
        cy.get('li a[ href="//link.springer.com/journals/a/1"]').click()
        cy.url().should('include','journals')
        cy.get('li a[class="c-atoz-navigation__link"]').contains('C').click()
        cy.url().should('include','c')
        cy.get('input[id="search-springerlink-journals"]').clear();
        cy.get('input[id="search-springerlink-journals"]').type('Computer');
        // cy.get('input[title="Submit"]').click({{force: true}}
        cy.get('input[type="submit"]').last().click({force:true });
        cy.get('h2 a[href="/journal/10860"]').click()
        cy.url().should('include','10860')



    })
});