// @ts-nocheck
describe("Home Page", () => {
  before(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  it('should load and display the title "Entertainment"', () => {
    cy.visit("http://localhost:3000");
    cy.contains("Entertainment").should("be.visible");
  });

  it("should navigate to www.rtl.nl or www.rtlboulevard.nl when the first article link is clicked", () => {
    cy.visit("http://localhost:3000");

    cy.get("a.article-link")
      .first()
      .should("have.attr", "href")
      .then((href) => {
        expect(href).to.match(/https:\/\/www\.(rtl\.nl|rtlboulevard\.nl)/); // Verify the href attribute value

        if (href) {
          const originUrl = new URL(href as any).origin;

          cy.origin(originUrl, { args: { href } }, ({ href }) => {
            cy.visit(href);
            cy.url()
              .should("match", /https:\/\/www\.(rtl\.nl|rtlboulevard\.nl)/)
              .then(() => {
                Cypress.currentTest.retries(0);
              });
          });
        }
      });
  });
});
