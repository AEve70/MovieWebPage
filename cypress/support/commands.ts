/// <reference types="cypress" />

// ***********************************************
// Este archivo commands.ts muestra cómo crear
// comandos personalizados y sobrescribir comandos existentes.
// ***********************************************

// Ejemplo de comandos (puedes añadir los tuyos propios):
// Cypress.Commands.add('login', (email, password) => { ... })
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Declaración global para que TypeScript reconozca tus comandos
declare global {
  namespace Cypress {
    interface Chainable {
      getBySel(selector: string, ...args: any[]): Chainable<JQuery<HTMLElement>>;
      getFirstBySel(
        parentSelector: string,
        childSelector: string,
        ...args: any[]
      ): Chainable<JQuery<HTMLElement>>;
    }
  }
}

// Definición de tus comandos personalizados
Cypress.Commands.add("getBySel", (selector, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args);
});

Cypress.Commands.add(
  "getFirstBySel",
  (parentSelector: string, childSelector: string, ...args) => {
    return cy
      .get(`[data-cy="${parentSelector}"]`)
      .find(`[data-cy="${childSelector}"]:first-child`, ...args);
  }
);

export {};
