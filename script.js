'use strict';

{
    const productName = 'coffee';
    const quantityGoods = 3;
    const productCategory = 'food';
    const productPrice = 1000;

    console.log(productName);
    console.log(quantityGoods*productPrice);
}

{
const item = prompt('Введите наименование товара', '');
const count = prompt('Введите количество товара', '');
const category = prompt('Введите категорию товара', '');
const price = prompt('Введите цену товара', '');

if (isFinite(count) && isFinite(price)) {
    console.log(`На складе ${count} единицы товара ${item} на сумму ${price} деревянных`);
} else {
    alert('Вы ввели некорректные данные');
}
}
