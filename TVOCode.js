/// <reference types="cypress" />

describe('TVO Learn Automation Test Suite', () => {

    beforeEach(() => {
        // Visit the main website before each test
        cy.visit('https://tvolearn.com/')
    });

    it('Navigates to the Learning Resources dropdown', () => {
        // Scroll or focus on the navigation menu
        cy.get('nav').scrollIntoView();
        
        // Hover over the dropdown with force
        cy.get('nav').contains('Learning Resources (K-12)').trigger('mouseover', { force: true });
        
        // Assert visibility of dropdown options
        cy.contains('Grade 1').should('be.visible');
    });

    it('Selects a specific grade and verifies navigation', () => {
        // Open dropdown and click on Grade 3
        cy.get('nav').contains('Learning Resources (K-12)').trigger('mouseover', { force: true });
        cy.contains('Grade 3').click({ force: true });

        // Verify that the URL updates correctly
        cy.url().should('include', '/grade-3');
    });

    it('Scrolls to "Learn Forward in the Curriculum" section', () => {
        // Navigate to Grade 4 page
        cy.get('nav').contains('Learning Resources (K-12)').trigger('mouseover', { force: true });
        cy.contains('Grade 4').click({ force: true });

        // Scroll to the curriculum section
        cy.contains('Learn Forward in the Curriculum').scrollIntoView();

        // Verify the section is visible
        cy.contains('Learn Forward in the Curriculum').should('be.visible');
    });

    it('Clicks on a subject card and verifies navigation', () => {
        // Navigate to Grade 5 page
        cy.get('nav').contains('Learning Resources (K-12)').trigger('mouseover', { force: true });
        cy.contains('Grade 5').click({ force: true });

        // Scroll and click on the first subject card
        cy.contains('Learn Forward in the Curriculum').scrollIntoView();
        cy.get('.subject-card').first().click();

        // Verify navigation to a subject page
        cy.url().should('include', '/subject');
    });

    it('Checks if subject cards exist in the curriculum section', () => {
        // Navigate to Grade 6 page
        cy.get('nav').contains('Learning Resources (K-12)').trigger('mouseover', { force: true });
        cy.contains('Grade 6').click({ force: true });

        // Scroll to the curriculum section and check for cards
        cy.contains('Learn Forward in the Curriculum').scrollIntoView();
        cy.get('.subject-card').should('have.length.greaterThan', 0);
    });

});
