// Use this variable to omit duplicates
let users = 0;

// Login to an existing user
Cypress.Commands.add('login', (email: string, password: string) => {
  cy.clearCookies();

  // navigate to login page
  cy.visit('/api/auth/signin');

  // fill out the login form with correct data
  cy.get('input[id="input-email-for-credentials-provider"]').type(email);
  cy.get('input[id="input-password-for-credentials-provider"]').type(password);

  // submit data for loging
  cy.get('button:eq(1)').click();
});

// Register a new user
Cypress.Commands.add(
  'register',
  (email: string, password: string, name?: string) => {
    cy.clearCookies();

    // first, signin as admin
    cy.login('admin@example.com', 'password');

    // navigate to register page
    cy.visit('/user/signup');

    // fill out the register form
    cy.get('input[id="name"]').type(name || `User_${users++}`);
    cy.get('input[id="email"]').type(email);
    cy.get('input[id="password"]').type(password);

    // submit data for registering
    cy.get('button[id="submit"]').click();
    cy.contains('User created succesfully!!');
  }
);

// Add an empty 'export {}'
// statement to make it a module
export {};
