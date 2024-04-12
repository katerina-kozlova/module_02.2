'use strict';

import goods from './goods.js';
import { openModal, closeModal, handleOverlayClose } from "./modal.js";
import { createRow } from "./createProduct.js";
import { activeCheckbox } from './checkbox.js';
import { calculateCost } from './cost.js';
import { calculateTotalPrice } from './totalPrice.js';
import { generateVendorCodeId } from './id.js';

const formAddProduct = document.querySelector('.modal__form');
const discountCheckbox = document.querySelector('#discount');
const discountInput = document.querySelector('.modal__input_discount');

const buttonOpenModal = document.querySelector('.panel__add-goods');
const buttonCloseModal = document.querySelector('.modal__close');
const overlay = document.querySelector('.overlay');
const tableBody = document.querySelector('.table__body');

overlay.classList.remove('active');

const initialState = () => {
    discountInput.setAttribute('disabled', true);
    discountInput.value = '';
};

// Обработчики открытия и закрытия модалки
buttonOpenModal.addEventListener('click', () => {
    openModal(overlay);
    initialState();
    calculateCost();
    //addGoodsPage();
    activeCheckbox();
   // createRow();
});
buttonCloseModal.addEventListener('click', () => {
    closeModal(overlay);
    overlay.classList.remove('overlay_active');
    discountInput.removeAttribute('disabled');
    discountCheckbox.checked = false;
    formAddProduct.reset();
});
overlay.addEventListener("mousedown", handleOverlayClose); 

// Перебрать массив товаров и добавить из в разметку 
const renderGoods = (goods) => {
    // пройтись по каждому объекту(товару) из массива и его индексу
    goods.map((obj, index) => {
        const row = createRow(obj, index); // создать строку 
        tableBody.append(row); // добавить в контейнер
    });
    calculateTotalPrice();
};
renderGoods(goods);

// Добавить новый товар на страницу
const addGoodsPage = (tableRow, index) => {
    const productId = document.querySelector('.table__cell-id');
    productId.textContent = generateVendorCodeId();
    //calculateCost();
    tableBody.append(createRow(tableRow, index));
};

// Добавить новый товар в массив товаров
const addGoodsData = (tableRow) => {
    //calculateCost();
    goods.push(tableRow);
};

// Отправить форму добавления нового товара
const handleFormAddSubmit = (e) => {
    e.preventDefault();
    // создать коллекцию данных
    const formData = new FormData(e.target);
    const newGoods = {
        // get(ключ) — возвращает первое значение ключа
        id: formData.get('id'),
        title: formData.get('name'),
        category: formData.get('category'),
        units: formData.get('units'),
        discount: formData.get('discount'),
        count: formData.get('count'),
        price: formData.get('price'),
        description: formData.get('description'),
    };
    const currentLength = goods.length;
    addGoodsPage(newGoods, currentLength);
    addGoodsData(newGoods);
    formAddProduct.reset();
    closeModal(overlay);
    calculateTotalPrice();
};
formAddProduct.addEventListener('submit', handleFormAddSubmit);

// Удалить строчку с товаром с помощью делегирорвания 
if (tableBody) {
    // навесить обработчик на весь контейнер строчек
    tableBody.addEventListener('click', event => {
        // использовать event.target, чтобы получить элемент, на котором произошло событие
        if (event.target.classList.contains('table__btn_del')) {
            const row = event.target.closest('tr');
            const idRow = row
                .querySelector('.table__cell_name')
                .getAttribute('data-id');
            row.remove();
            // Создать новый массив на основе существующего
            // Вернуть элемент с id, на котором произошло событие
            const index = goods.findIndex((item) => item.id === Number(idRow));
            // Удалить этот элемент из массива
            goods.splice(index, 1);
            console.log(goods);
        }
        calculateTotalPrice();
    });
}