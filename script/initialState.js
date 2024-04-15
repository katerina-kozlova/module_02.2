'use strict';

export const initialState = () => {
    const discountInput = document.querySelector('.modal__input_discount');
    discountInput.setAttribute('disabled', true);
    discountInput.value = '';
};