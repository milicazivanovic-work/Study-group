describe('work&co headline check', () => {
  it('Opens the Work&Co website and checks for the matching headline', () => {
    cy.visit('https://work.co/');
    cy.get('[data-test-id="header-title-text"]').should('have.text','We design and ship digital products that transform companies.');
  })
})