'use strict';

import goods from './goods.js';

const modalTitle = document.querySelector('.modal__title');
const formAddProduct = document.querySelector('.modal__form');
const discountCheckbox = document.querySelector('#discount');
const discountInput = document.querySelector('.modal__input_discount');

const buttonOpenModal = document.querySelector('.panel__add-goods');
const buttonCloseModal = document.querySelector('.modal__close');
const overlay = document.querySelector('.overlay');

overlay.classList.remove('active');

const openModal = () => {
    overlay.classList.add('active');
};
buttonOpenModal.addEventListener('click', () => {
    openModal();
});

const closeModal = () => {
    overlay.classList.remove('active');
};
buttonCloseModal.addEventListener('click', () => {
    closeModal();
});
overlay.addEventListener('click', (e) => {
    const target = e.target;
    if (target === overlay ||
        target.classList.contains('active')) {
            closeModal();
        }
});

const createRow = (obj, index) => {
    const tableRow = document.createElement('tr');
    const cellId = document.createElement('td');
    const cellName = document.createElement('td');
    const cellNameSpan = document.createElement('span');
    const cellCategory = document.createElement('td');
    const cellUnits = document.createElement('td');
    const cellQuantity = document.createElement('td');
    const cellPrice = document.createElement('td');
    const cellCost = document.createElement('td');
    const cellControls = document.createElement('td');
    const btnPic = document.createElement('button');
    const btnEdit = document.createElement('button');
    const btnDel = document.createElement('button');

    cellId.classList.add('table__cell');
    cellId.textContent = index + 1;

    cellName.classList.add('table__cell', 'table__cell_left', 'table__cell_name');
    cellName.setAttribute('data-id', obj.id);

    cellNameSpan.classList.add('table__cell-id');
    cellNameSpan.textContent = `id: ${index + 1}`;
    cellName.append(cellNameSpan);
    cellName.append(document.createTextNode(obj.title));

    cellCategory.classList.add('table__cell', 'table__cell_left');
    cellCategory.textContent = obj.category;

    cellUnits.classList.add('table__cell');
    cellUnits.textContent = obj.units;

    cellQuantity.classList.add('table__cell');
    cellQuantity.textContent = obj.count;

    cellPrice.classList.add('table__cell');
    cellPrice.textContent = '$' + obj.price;

    cellCost.classList.add('table__cell');
    cellCost.textContent = `$${obj.price * obj.count}`;

    btnPic.classList.add('table__btn', 'table__btn_pic');

    btnEdit.classList.add('table__btn', 'table__btn_edit');

    btnDel.classList.add('table__btn', 'table__btn_del');

    cellControls.classList.add('table__cell', 'table__cell_btn-wrapper');
    cellControls.append(btnPic, btnEdit, btnDel);

    tableRow.append(
        cellId,
        cellName,
        cellCategory,
        cellUnits,
        cellQuantity,
        cellPrice,
        cellCost,
        cellControls
    );

    return tableRow;
};

const renderGoods = (arr) => {
    const tableBody = document.querySelector('.table__body');

    arr.map((obj, index, title) => {
        const row = createRow(obj, index, title); 
        tableBody.append(row);
    });
};

renderGoods(goods);

const table = document.querySelector('.table__body');

if (table) {
    table.addEventListener('click', event => {
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
    });
};

const addGoodsPage = (tableRow, table, index) => {
    table.append(createRow(tableRow, index));
};

const addGoodsData = (tableRow) => {
    goods.push(tableRow);
};

const addGoods = () => {
    formAddProduct.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newGoods = {
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
        addGoodsPage(newGoods, table, currentLength);
        addGoodsData(newGoods);
        formAddProduct.reset();
        closeModal();
    });
};
addGoods();
