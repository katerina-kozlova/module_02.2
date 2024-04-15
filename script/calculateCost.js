'use strict';

export const calculateCost = () => {
    const form = document.querySelector('.modal__form');
    const countInput = form.querySelector('input[name="count"]'); 
    const priceInput = form.querySelector('input[name="price"]');
    const modalTotalPrice = form.querySelector('.modal__total-price');
    const discountInput = form.querySelector('.modal__input_discount');

    const updateTotalPrice = () => {
        const count = countInput.value;
        const price = priceInput.value;
        const discount = discountInput.value;

        const userDiscount = Number(discount * 0.01);
        const amount = Number(count) * Number(price);
        if (discount === '' || discount === '0' || discount === false) {
            modalTotalPrice.textContent = `$ ${amount}`;
        } else {
            modalTotalPrice.textContent = `$ ${amount - (amount * userDiscount)}`;
        }
        console.log(userDiscount);
        console.log(modalTotalPrice);
    };

    countInput.addEventListener('input', updateTotalPrice); // обработчик изменения для count
    priceInput.addEventListener('input', updateTotalPrice); // и для price
    discountInput.addEventListener('input', updateTotalPrice); // и для discount

    updateTotalPrice(); // обновляем данные после каждого сохранения товара
};