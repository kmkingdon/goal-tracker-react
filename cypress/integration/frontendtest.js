describe('Goal Tracker', function () {
  it('.should() - test goal functionality', function () {
    cy.visit('goaltrackerstudentprogress.herokuapp.com');
    cy.get('.student-demo button').click();
    cy.get('.modal a').click();
    cy.get('.dashboard button').eq(2).click();
    cy.get('.current-goals button').as('startingGoalNumber');
    cy.get('.goals-dashboard #add').click();
    cy.get('.goal-add form select').eq(0).select('Classwork');
    cy.get('.goal-add form textarea').eq(0).type('test');
    cy.get('.goal-add form textarea').eq(1).type('test2');
    cy.get('.goal-add form textarea').eq(2).type('test3');
    cy.get('.goal-add form select').eq(1).select("false");
    cy.get('.goal-add form input').eq(0).type('test4');
    cy.get('.goal-add form input').eq(1).click();
    cy.get('.current-goals button').last().click();
    cy.get('.delete-goal button').last().click();
    cy.get('.current-goals button').should('have.length.equal','startingGoalNumber');
    cy.screenshot();
  })
});
