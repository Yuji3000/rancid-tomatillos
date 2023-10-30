describe('should open to home page', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 200,
        fixture: 'moviedata',
      }
    ).visit('http://localhost:3000');
  });
  
  it('should display the home page elements', () => {
    cy.get('.movie-card')
      .should('have.length', 40)
      .first().contains('h2', 'Black Adam')
  })

});