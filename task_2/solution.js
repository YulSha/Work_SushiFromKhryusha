function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку

    let shippingSum; // сумма доставки

    if(productsSum == 0 || productsSum >= freeShippingMinSum) {
        shippingSum = 0;
    }else {
        shippingSum = shippingPrice;
    }

    console.log(shippingSum);

    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

    let discountSum; // сумма скиидки

    if(productsSum >= discountMinSum) {
        discountSum = productsSum * discountPart / 100;
    }else {
        discountSum = 0;
    }

    console.log(discountSum);

    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    let totalSum; // итоговая сумма
    
    totalSum = productsSum - discountSum;
    
    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice);

    totalSum = totalSum + shippingSum;

    let freeShipping; // бесплатная доставка
    freeShipping = !Boolean(shippingSum);
    console.log(freeShipping);

    console.log(totalSum);

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
