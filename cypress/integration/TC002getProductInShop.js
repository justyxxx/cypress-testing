import ShopPage from './pageObjectList/ShopPage'

describe('Test suite getting product flow ', () => {
    it('simple get product and decline case', () => {
        ShopPage.openShopPage()
        ShopPage.getProductCategory()
        ShopPage.checkProductCount()
        ShopPage.addProductToBasket()
    })
})
