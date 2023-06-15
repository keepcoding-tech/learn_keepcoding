beforeEach(() => cy.task('db:reset') && cy.task('db:seed'));
afterEach(() => cy.task('db:disconnect'));

describe('Comprehensive testing of all user pages', () => {
  it('Attempt to sign in using invalid data', () => {
    // navigate to login page
    cy.visit('/api/auth/signin');
    cy.contains('Sign in with Credentials');

    // fill out the login form with invalid data
    cy.get('input[id="input-email-for-credentials-provider"]').type(
      'invalid@email.com'
    );
    cy.get('input[id="input-password-for-credentials-provider"]').type(
      'invalid password'
    );

    // submit login data that is intentionally invalid and
    // confirm that the system does not grant access
    cy.get('button:eq(1)').click();
    cy.contains('Sign in failed.');
    cy.contains('Check the details you provided are correct.');
  });

  it('Verify the ability to sign in successfully', () => {
    // navigate to login page
    cy.visit('/api/auth/signin');
    cy.contains('Sign in with Credentials');

    // fill out the login form with correct data
    cy.get('input[id="input-email-for-credentials-provider"]').type(
      'normal@example.com'
    );
    cy.get('input[id="input-password-for-credentials-provider"]').type(
      'password'
    );

    // submit the login data and ensure that upon successful
    // authentication, the user is redirected to the home page as intended
    cy.get('button:eq(1)').click();
    cy.contains('C programming can be fun again');
  });

  it('Restrict permissions for regular users', () => {
    // navigate to register page
    cy.visit('/user/signup');

    // a 403 page error page should appear
    cy.contains('403');
    cy.contains('ACCESS FORBIDEN');
    cy.contains("(I'm sorry boddy...)");
  });

  it('Should not allow users to proceed without a password or email', () => {
    // first, signin as admin
    cy.login('admin@example.com', 'password');

    // navigate to register page
    cy.visit('/user/signup');
    cy.contains('CREATE USER');

    // fill out the register form without email
    cy.get('input[id="name"]').type('Test User');
    cy.get('input[id="email"]').clear();
    cy.get('input[id="password"]').type('password');

    // submit data, should not be able to click the button
    cy.get('button[id="submit"]').should('be.disabled');

    // fill out the register form without password
    cy.get('input[id="name"]').type('Test User');
    cy.get('input[id="email"]').type('test_user@mail.com');
    cy.get('input[id="password"]').clear();

    // submit data, should not be able to click the button
    cy.get('button[id="submit"]').should('be.disabled');
  });

  it('Signup should fail if the email is already in use', () => {
    // first, signin as admin
    cy.login('admin@example.com', 'password');

    // navigate to register page
    cy.visit('/user/signup');
    cy.contains('CREATE USER');

    // fill out the register form
    cy.get('input[id="name"]').type('Test User');
    cy.get('input[id="email"]').type('normal@mail.com');
    cy.get('input[id="password"]').type('password');

    // an error should appear with detaild
    cy.get('button[id="submit"]').click();
    cy.contains('Email is already in use!');
  });

  it('Verify the ability to sign up successfully', () => {
    // first, signin as admin
    cy.login('admin@example.com', 'password');

    // navigate to register page
    cy.visit('/user/signup');
    cy.contains('CREATE USER');

    // fill out the register form
    cy.get('input[id="name"]').type('Test User');
    cy.get('input[id="email"]').type('test_user@mail.com');
    cy.get('input[id="password"]').type('password');

    // submit data for registering
    cy.get('button[id="submit"]').click();
    cy.contains('User created succesfully!!');
  });
});

// Add an empty 'export {}'
// statement to make it a module
export {};
