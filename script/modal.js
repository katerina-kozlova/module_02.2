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

export const calculateCost = () => {
    const form = document.querySelector('.modal__form');
    const countInput = form.querySelector('input[name="count"]'); 
    const priceInput = form.querySelector('input[name="price"]');
    const modalTotalPrice = form.querySelector('.modal__total-price');

    console.log(countInput);
    const updateTotalPrice = () => {
        const count = countInput.value;
        const price = priceInput.value;
        modalTotalPrice.textContent = `$ ${Number(count) * Number(price)}`;
    };

    countInput.addEventListener('input', updateTotalPrice); // обработчик изменения для count
    priceInput.addEventListener('input', updateTotalPrice); // и для price

    updateTotalPrice(); // обновляем данные после каждого сохранения товара
};

export const openModal = (popupElement) => {
    popupElement.classList.add('active');
    calculateCost();
    activeCheckbox();
};

export const closeModal = (popupElement) => {
    popupElement.classList.remove('active');
};

export const handleOverlayClose = (evt) => { 
    if (evt.target === evt.currentTarget) { 
        const popupOpened = document.querySelector('.active'); 
        closeModal(popupOpened); 
    } 
} ;