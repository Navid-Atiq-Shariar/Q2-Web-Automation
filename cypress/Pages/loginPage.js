class LoginPage {
    navigate() {
      cy.visit('https://www.shopify.com/');
    }
  
    enterCredentials(username, password) {
      cy.get('#username').type(username);
      cy.get('#password').type(password);
    }
  
    clickLogin() {
      cy.get('#login-button').click();
    }
  
    verifyDashboard() {
      cy.contains('Dashboard').should('be.visible');
    }
  
    verifyErrorMessage() {
      cy.contains('Invalid credentials').should('be.visible');
    }
  }
  
  export const loginPage = new LoginPage();
  