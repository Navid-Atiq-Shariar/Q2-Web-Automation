import { productPage } from '../pages/productPage';

describe('Product CRUD Tests', () => {
  beforeEach(() => {
    productPage.navigate();
  });

  it('Create a new product', () => {
    productPage.createProduct('Test Product', 100);
    productPage.verifyProduct('Test Product');
  });

  it('Update a product', () => {
    productPage.updateProduct('Test Product', 'Updated Product');
    productPage.verifyProduct('Updated Product');
  });

  it('Delete a product', () => {
    productPage.deleteProduct('Updated Product');
    productPage.verifyProductNotExists('Updated Product');
  });
});
