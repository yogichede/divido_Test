Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@yogichede 
dividohq
/
fe-react-chg-ts
Public
Code
Pull requests
2
Actions
Security
Insights
fe-react-chg-ts/cypress/integration/homepage.spec.ts /
@mattietea
mattietea test(homepage): include navigation test
Latest commit 3873584 on Apr 22, 2021
 History
 1 contributor
 48 lines (40 sloc)  1.17 KB
   
type LenderFixture = {
  initialValues: {
    first_name?: string;
    last_name?: string;
    email?: string;
    monthly_income?: string;
    date_of_birth?: string;
    gender?: string;
    address?: string;
  };
  name: string;
  slug: string;
};

context('Home Page', () => {
  before(() => {
    cy.fixture('lenders').then((lenders: LenderFixture) => {
      this.lenders = lenders;
    });
  });

  beforeEach(() => {
    const host = Cypress.config()['host'];
    cy.visit(host);
  });

  it('will check if all important elements are in place:', () => {
    this.lenders.forEach((lender: LenderFixture) => {
      cy.get(`[data-testid="${lender.slug}"]`)
        .should('be.visible')
        .should('contain', lender.name);
    });
  });

  it('will check if all important links are in place and take the user to correct URL', () => {
    this.lenders.forEach((lender: LenderFixture) => {
      cy.get(`[data-testid="${lender.slug}"]`).as('lenderLink');

      cy.get('@lenderLink').should('be.visible').should('contain', lender.name);

      cy.get('@lenderLink').click();

      cy.location('pathname').should('contain', `/${lender.slug}`);

      cy.go('back');
    });
  });
});
