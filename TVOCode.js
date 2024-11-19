

describe('TVO Learn Automation Test Suite', () => {

    beforeEach(() => {
        // Visit the main website before each test
        cy.visit('https://tvolearn.com/');
    });

    it('Navigates to the Learning Resources dropdown', () => {
        // Hover over the "Learning Resources (K-12)" dropdown
        cy.get('nav').contains('Learning Resources (K-12)').trigger('mouseover', { force: true });

        // Verify dropdown options are visible
        cy.contains('Grade 1').should('be.visible');
    });

    it('Selects a specific grade and verifies navigation', () => {
        // Open dropdown and click on Grade 3
        cy.get('nav').contains('Learning Resources (K-12)').trigger('mouseover', { force: true });
        cy.contains('Grade 3').click({ force: true });

        // Verify URL update
        cy.url().should('include', '/grade-3');
    });

    it('Scrolls to "Learn Forward in the Curriculum" section', () => {
        // Navigate to Grade 4 page
        cy.get('nav').contains('Learning Resources (K-12)').trigger('mouseover', { force: true });
        cy.contains('Grade 4').click({ force: true });

        // Scroll to the curriculum section and verify
        cy.contains('Learn Forward in the Curriculum').first().scrollIntoView();
        cy.contains('Learn Forward in the Curriculum').should('be.visible');
    });

    it('Clicks on a subject card and verifies navigation', () => {
        // Navigate to Grade 5 page
        cy.get('nav').contains('Learning Resources (K-12)').trigger('mouseover', { force: true });
        cy.contains('Grade 5').click({ force: true });

        // Scroll and wait for subject cards to load
        cy.contains('Learn Forward in the Curriculum').scrollIntoView();
        cy.get('.subject-card').should('exist').first().click();

        // Verify navigation
        cy.url().should('include', '/subject');
    });

    it('Checks if subject cards exist in the curriculum section', () => {
        // Navigate to Grade 6 page
        cy.get('nav').contains('Learning Resources (K-12)').trigger('mouseover', { force: true });
        cy.contains('Grade 6').click({ force: true });

        // Scroll to curriculum section and ensure cards exist
        cy.contains('Learn Forward in the Curriculum').scrollIntoView();
        cy.get('.subject-card').should('have.length.greaterThan', 0);
    });

});
