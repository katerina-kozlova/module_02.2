'use strict';

// Общая стоиомость всех товаров
export const calculateTotalPrice = () => {
    const totalPrice = document.querySelector('.cms__total-price');
    const goods = document.querySelectorAll('.table__body tr'); // все строки с товарами
    let totalCost = 0;
    goods.forEach((goodsRow) => {
        // в каждой строке находим столбец со стоимостью, его значение без знака $
        const cost = goodsRow.querySelector('.table__cell:nth-child(7)').textContent.replace('$', '');
        totalCost += Number(cost);
    });
    totalPrice.textContent = `$ ${totalCost}`; 
};