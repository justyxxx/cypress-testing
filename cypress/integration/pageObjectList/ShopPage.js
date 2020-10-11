class ShopPage {
    openShopPage() {
        cy.visit('http://practice.automationtesting.in/shop/')
    }

    getProductCategory() {
        cy.get('[href="http://practice.automationtesting.in/product-category/javascript/"]')
            .should('be.visible')
            .should('have.text', 'JavaScript')
            .click()
    }
    checkProductCount() {
        cy.get('.masonry-done > li').should('have.length', 3)
    }
    addProductToBasket() {
        cy.get('[href="/product-category/javascript/?add-to-cart=180"]').click()
        cy.get('#menu-icon').click()
        cy.get('[href="http://practice.automationtesting.in/basket/"]').should('be.visible').first().click()
        cy.get('.shop_table').should('have.length', 2)
        cy.get('.remove').click()
        cy.get('.cart-empty').should('be.visible').contains('Your basket is currently empty')
    }
}
export default new ShopPage()
