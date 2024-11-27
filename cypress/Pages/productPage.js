class ProductPage {
    navigate() {
      cy.visit('https://www.shopify.com/products');
    }
  
    createProduct(name, price) {
      cy.get('#add-product-button').click();
      cy.get('#product-name').type(name);
      cy.get('#product-price').type(price);
      cy.get('#save-button').click();
    }
  
    updateProduct(oldName, newName) {
      cy.contains(oldName).click();
      cy.get('#product-name').clear().type(newName);
      cy.get('#save-button').click();
    }
  
    deleteProduct(name) {
      cy.contains(name).parent().find('.delete-button').click();
    }
  
    verifyProduct(name) {
      cy.contains(name).should('be.visible');
    }
  
    verifyProductNotExists(name) {
      cy.contains(name).should('not.exist');
    }
  }
  
  export const productPage = new ProductPage();
  