/* eslint-disable no-undef */
/// <reference types="cypress">

const vacancyFields = {
  "salary": 1500,
  "jobTitle": "Titulo da vaga",
  "processSteps": "Etapas do processo seletivo",
  "activities": "Atividades do cargo",
  "requiredSkills": "Habilidades necessárias",
  "requiredExperience": "Experiência Necessária",
  "benefits": "Beneficios da vaga",
};

describe('User fill fields', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/new')

    Object.keys(vacancyFields).forEach((key) => {
      cy.get(`[id=${key}]`).type(vacancyFields[key]);
    })
  })

  it('can create a vancancy with valid field', () => {
    cy.intercept("POST", "**/vacancies", "sucess")
    cy.get('[id=submit]').click();
    cy.url().should("eq", "http://localhost:8080/")
  })

  it('cant create a new vacancy with empty salary', () => {
    cy.get('[id=salary]').clear();
    cy.get('[id=submit]').click();
    cy.get(".input-error-message").should("have.text", "Esse campo deve ser preenchido");
  })

  it('cant create a new vacancy with empty job title', () => {
    cy.get('[id=jobTitle]').clear();
    cy.get('[id=submit]').click();
    cy.get(".input-error-message").should("have.text", "Esse campo deve ser preenchido");
  })

  it('cant create a new vacancy with empty process steps', () => {
    cy.get('[id=processSteps]').clear();
    cy.get('[id=submit]').click();
    cy.get(".input-error-message").should("have.text", "Esse campo deve ser preenchido");
  })

  it('cant create a new vacancy with empty activities', () => {
    cy.get('[id=activities]').clear();
    cy.get('[id=submit]').click();
    cy.get(".input-error-message").should("have.text", "Esse campo deve ser preenchido");
  })

  it('cant create a new vacancy with empty required skills', () => {
    cy.get('[id=requiredSkills]').clear();
    cy.get('[id=submit]').click();
    cy.get(".input-error-message").should("have.text", "Esse campo deve ser preenchido");
  })

  it('cant create a new vacancy with empty required experience', () => {
    cy.get('[id=requiredExperience]').clear();
    cy.get('[id=submit]').click();
    cy.get(".input-error-message").should("have.text", "Esse campo deve ser preenchido");
  })

  it('cant create a new vacancy with empty benefits', () => {
    cy.get('[id=benefits]').clear();
    cy.get('[id=submit]').click();
    cy.get(".input-error-message").should("have.text", "Esse campo deve ser preenchido");
  })

  it('cant create a new vacancy with empty process steps', () => {
    cy.get('[id=processSteps]').clear();
    cy.get('[id=submit]').click();
    cy.get(".input-error-message").should("have.text", "Esse campo deve ser preenchido");
  })
})
