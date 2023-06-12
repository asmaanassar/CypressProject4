beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleared');
    cy.reload()
});
///<reference types = "Cypress"/> 
// describe('log in', () => {
//     it('log in standard user', () => {
//        cy.visit("https://www.saucedemo.com/")
//        cy.get('[data-test="username"]').type("standard_user")
//        cy.get('[data-test="password"]').type("secret_sauce")
//        cy.get('[data-test="login-button"]').click()
//     });

//     it('add all item to card', () => {
//         cy.visit("https://www.saucedemo.com/")
//         cy.get('[data-test="username"]').type("standard_user")
//         cy.get('[data-test="password"]').type("secret_sauce")
//         cy.get('[data-test="login-button"]').click()
        // let expecteditems = 6;
        // for (let i = 0; i < expecteditems; i++) {
        //     if (i % 2 == 0) {
        //         let itemArray = cy.get('div#inventory_container').find('.btn').eq(i).click()

        //     }
        // }

//    cy.get('div.inventory_container')
//   .eq(1)
//   .click()
//   .get('div.inventory_container')
//   .eq(3)
//   .click()
//   .get('div.inventory_container')
//   .eq(5)
//   .click();

describe('Standard User Test', () => {
    it('Login and Add Items to Cart', () => {
      cy.visit('https://www.saucedemo.com/');
  
      // Login as a standard user
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('.btn_action').click();
      // Add items to cart
      cy.get('.inventory_item')
        .first()
        .find('.btn_inventory')
        .click();
      cy.get('.inventory_item')
        .eq(2)
        .find('.btn_inventory')
        .click();
      cy.get('.inventory_item')
        .eq(4)
        .find('.btn_inventory')
        .click();
  
      // Assert that three items are added to the cart
      cy.get('.shopping_cart_badge').should('contain.text', '3');
    });
  });



//     })
// });