describe('work&co headline check', () => {
  it('passes', () => {
    cy.visit('https://work.co/');
    cy.get('.Header1.HeaderTop-header1').should('have.text','We design and ship digital products that transform companies.');
  })
})