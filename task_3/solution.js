function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

    // product - объект вида {id: id, title: title, count: count, price: price}

    // сформируйте строку itemCountText вида:
    // количество × цена ₽ = стоимость ₽

    let itemCountText = `${product.count} × ${product.price} ₽ = `;
    let sum = product.count * product.price;
    itemCountText += `${sum} ₽`;

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
