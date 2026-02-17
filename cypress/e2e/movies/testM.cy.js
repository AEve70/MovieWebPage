describe("Movie details", () => {
  it("should go to the home page", () => {
    cy.visit("/");
    cy.location("pathname").should("eq", "/");

    cy.visit("/movies");
    cy.location("pathname").should("eq", "/movies");

    cy.get("[data-cy='movie-card']").its("length").should("be.greaterThan", 0);
    cy.get("[data-cy='movie-card']").first().should("be.visible").click();

    cy.get("[data-cy='movie-poster']").should("be.visible");

    
    cy.get("[data-cy='movie-title']", { timeout: 10000 }).should("be.visible");
  });
});
