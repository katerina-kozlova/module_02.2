'use strict';

// Сгенерировать случайный id для товара
export const generateVendorCodeId = () => {
    const randomNumber = Math.round(Math.random() * 100000000000000); // создать рандомное число и записать в константу
    const vendorCodeId = document.querySelector('.vendor-code__id'); // найти разметку на странице, где будет записан id
    vendorCodeId.textContent = randomNumber; // записать в эту разметку значение рандомным числом
    return randomNumber; // вернем рандомное число
};