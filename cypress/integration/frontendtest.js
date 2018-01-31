describe('Goal Tracker', function () {
  it('.should() - test data buttons', function () {
    cy.visit('goaltrackerstudentprogress.herokuapp.com');
    cy.get('.student-demo button').click();
    cy.get('.modal a').click();
    cy.get('.dashboard button').eq(3).click();
    cy.get('.data-buttons button').eq(0).should('have.text','All Assignments');
    cy.get('.data-buttons button').eq(1).should('have.text','Total Grade');
    cy.get('.data-buttons button').eq(2).should('have.text','Classwork Data');
    cy.get('.data-buttons button').eq(3).should('have.text','Homework Data');
    cy.get('.data-buttons button').eq(4).should('have.text','Projects Data');
    cy.get('.data-buttons button').eq(5).should('have.text','Assessments Data');
    cy.screenshot();
  })
});


describe('Goal Tracker', function () {
  it('.should() - test add assignment', function () {
    cy.visit('goaltrackerstudentprogress.herokuapp.com');
    cy.get('.student-demo button').click();
    cy.get('.modal a').click();
    cy.get('.dashboard button').eq(1).click();
    cy.get('.add-form-container input').eq(0).type(1000);
    cy.get('.add-form-container input').eq(1).type("test");
    cy.get('.add-form-container select').eq(0).select('Classwork');
    cy.get('.add-form-container input').eq(2).type("2018-01-01");
    cy.get('.add-form-container input').eq(3).type(1000);
    cy.get('.add-form-container input').eq(4).type(1000);
    cy.get('.add-form-container input').last().click();
    cy.get('.dashboard button').eq(0).click();
    cy.get('.assignment-object').last().find('h1').contains(1000);
    cy.screenshot();
  })
});
