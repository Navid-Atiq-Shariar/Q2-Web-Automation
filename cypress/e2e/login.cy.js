import { loginPage } from '../pages/loginPage';

describe('Login Tests', () => {
  beforeEach(() => {
    loginPage.navigate();
  });

  it('Login with valid credentials', () => {
    loginPage.enterCredentials('valid_user', 'valid_password');
    loginPage.clickLogin();
    loginPage.verifyDashboard();
  });

  it('Login with invalid credentials', () => {
    loginPage.enterCredentials('invalid_user', 'wrong_password');
    loginPage.clickLogin();
    loginPage.verifyErrorMessage();
  });
});
