describe('React-redux-starter-kit', () => {
  it('should display the product list', () => {
    cy.visit('http://localhost:8080');
    cy.title().should('include', `Steven's Starter kit`);
  });

  it('should be able to view screenWrapper area', () => {
    cy.getByTestId('ScreenWrapper').should('have.length', 1);
  });
});

// ScreenWrapper
