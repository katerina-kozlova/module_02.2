'use strict';

export const activeCheckbox = () => {
    const form = document.querySelector('.modal__form');
    const modalCheckbox = form.querySelector('.modal__checkbox');
    const inputDiscountCount = form.querySelector('.modal__input_discount');
    modalCheckbox.addEventListener('change', () => {
        if (modalCheckbox.checked) {
            inputDiscountCount.disabled = false;
            inputDiscountCount.required = true;
        } else {
            inputDiscountCount.value = '';
            inputDiscountCount.disabled = true;
        }
    });
};