import '.e2e.ts';

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<JQuery<HTMLElement>>;
      register(
        email: string,
        password: string,
        name?: string
      ): Chainable<JQuery<HTMLElement>>;
    }
  }
}
