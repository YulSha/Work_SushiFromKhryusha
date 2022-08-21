// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    data = JSON.parse(json);
    products = data.products;
    return products;
}

function renderProductsCards(json) {
    clearProducts();
    products = parseProducts(json);
    length = products.length;
    for (let i = 0; i < length; i += 1) {
        addProduct(products[i]);
    }
}