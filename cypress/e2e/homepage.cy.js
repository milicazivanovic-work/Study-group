describe('Work&co page title & headline check', () => {
  it('Opens the Work&Co website and checks for the matching page title and headline', () => {
    cy.visit('https://work.co/');
    cy.title().should('eq','Work & Co | Digital Product Agency')
    cy.get('[data-test-id="header-title-text"]').should('have.text','We design and ship digital products that transform companies.');
  })
})

describe('work&co click on logo and URL check', () => {
  it('Clicks on the Work&Co logo and checks the URL', () => {
    cy.visit('https://work.co/')
    cy.get('[data-test-id="global-menu-btn"]').click()
    cy.url().should('eq', 'https://work.co/grid/');
  })
})

describe('work&co click on logo, click on clients, URL check', () => {
  it('Clicks on the Work&Co logo, clikcs on clients and checks the URL', () => {
    cy.visit('https://work.co/')
    cy.get('[data-test-id="global-menu-btn"]').click()
    cy.get('[data-test-id="grid-select-clients-link"]').click()
    cy.url().should('eq', 'https://work.co/clients/');
  })
})

describe('work&co click on logo, click on Practice areas, URL check', () => {
  it('Clicks on the Work&Co logo, clikcs on Practice areas and checks the URL', () => {
    cy.visit('https://work.co/')
    cy.get('[data-test-id="global-menu-btn"]').click()
    cy.get('[data-test-id="grid-practice-areas-link"]').click()
    cy.url().should('eq', 'https://work.co/company/');
  })
})
