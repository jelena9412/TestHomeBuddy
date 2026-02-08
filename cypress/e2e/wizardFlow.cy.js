describe('ZIP code Validation Rules', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false;
    });

    beforeEach(() => {
        cy.visit('/'); // uses baseUrl from config
    });

    it("ZIP is valid", () => {
        cy.get('#zipCode').type('10001');
        cy.get('.text-white > :nth-child(2) > .zip--container > .zip--body > .rightIcon').should("be.visible");
        cy.get('.text-white > :nth-child(2) > .zip--container > .customButton').click();
    });

    it("ZIP is invalid", () => {
        cy.get('#zipCode').type('1001');
        cy.get('.text-white > :nth-child(2) > .zip--container > .customButton').click();
        cy.get('.text-white > :nth-child(2) > .zip--caption').should("contain.text", "The ZIP Code must be 5 digits with no spaces");
    })
});
