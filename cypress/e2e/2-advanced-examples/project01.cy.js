/// <reference types="cypress" />
describe("Homework01 - Cypress-Project-01", () => {
  beforeEach(() => {
    cy.visit("https://techglobal-training.com/frontend/project-1");
  });

  it("Test Case 01 - Validate the Contact Us information", () => {
    cy.get('.is-size-3').should("have.text", "Contact Us");
    cy.get('#address').should("have.text", "2800 S River Rd Suite 310, Des Plaines, IL 60018");
    cy.get('#email').should("have.text", "info@techglobalschool.com");
    cy.get('#phone-number').should("have.text", "(224) 580-2150");

  });

  it("Test Case 02 - Validate the Full name input box", () => {
    cy.get('.input[placeholder="Enter your full name"]').should('be.visible');
    cy.get('.input').first().should('have.attr', 'required');
    cy.get('.input').first().should('have.attr', 'placeholder', 'Enter your full name');
    cy.get('[for="name"]').should('be.visible');

  });
  it("Test Case 03 - Validate the Gender radio button", () => {
    cy.get('.control>.label').should("have.text", "Gender *");
    cy.get('.radio>input').should('have.attr', 'required');
    cy.get('.radio>input').should('not.be.checked')
      .check().should('be.checked')
    // 5,6,7 validate in one block
    cy.get('.radio>input').each(($radioButton, index) => {
      cy.wrap($radioButton).should('not.be.checked')
      cy.wrap($radioButton).click()
      cy.wrap($radioButton).should('be.checked')
      cy.get('.radio>input').each(($otherRadioButton, otherIndex) => {
        if (otherIndex !== index) {
          cy.wrap($otherRadioButton).should('not.be.checked')
        }
      })
    })
  });

  it("Test Case 04 - Validate the Address input box", () => {
    cy.get('.input').eq(1).should('be.visible');
    cy.get('.input').eq(1).should('not.have.attr', 'required');
    cy.get('.label').eq(2).should("have.text", "Address");
    cy.get('.input').eq(1).should('have.attr', 'placeholder', 'Enter your address');
  });

  it("Test Case 05 - Validate the Email input box", () => {
    cy.get('.input').eq(2).should('be.visible');
    cy.get('.input').eq(2).should('have.attr', 'required');
    cy.get('.label').eq(3).should("have.text", "Email *");
    cy.get('.input').eq(2).should('have.attr', 'placeholder', 'Enter your email');
  });

  it("Test Case 06 - Validate the Phone input box", () => {
    cy.get('.input').eq(3).should('be.visible');
    cy.get('.input').eq(3).should('not.have.attr', 'required');
    cy.get('.label').eq(4).should("have.text", "Phone");
    cy.get('.input').eq(3).should('have.attr', 'placeholder', 'Enter your phone number');
  });

  it("Test Case 07 - Validate the Message text area", () => {
    cy.get('.textarea').should('be.visible');
    cy.get('.textarea').should('not.have.attr', 'required');
    cy.get('.label').last().should("have.text", "Message");
    cy.get('.textarea').should('have.attr', 'placeholder', 'Type your message here...');
  });

  it("Test Case 08 - Validate the Consent checkbox", () => {
    cy.get('.checkbox').should('have.text', ' I give my consent to be contacted.');
    cy.get('.checkbox>input').should('have.attr', 'required');
    cy.get('.checkbox>input').should('not.be.checked');
    cy.get('.checkbox>input').click().should('be.checked');
    cy.get('.checkbox').click().get('.checkbox>input').should('not.be.checked');
    cy.get('.checkbox').click().get('.checkbox>input').should('be.checked');
  });

  it("Test Case 09 - Validate the SUBMIT button", () => {
    cy.get('.is-link').should('be.visible');
    cy.get('.is-link').should('not.be.disabled');
    cy.get('.is-link').should('have.text', 'SUBMIT');
  });


  it.only("Test Case 10 - Validate the form submission", () => {
    cy.visit("https://techglobal-training.com/frontend/project-1");
    cy.get('.input').first().type('John Doe');
    cy.get('.mr-1').first().click();
    cy.get('.input').eq(1).type('2800 S River Rd Suite 310, Des Plaines, IL 60018');
    cy.get('.input').eq(2).type('chicago@gmail.com');
    cy.get('.input').eq(3).type('(224) 580-2150');
    cy.get('.textarea').type('Hello World!!!');
    cy.get('.checkbox').click();
    cy.get('.is-link').click(); // (uncaught exception) I turned off all uncaught exception handling add script in e2e.js
    cy.get('.mt-5').should('have.text', 'Thanks for submitting!');

  });

});
