'use strict';

import goods from './goods.js';

const modalTitle = document.querySelector('.modal__title');
const formAddProduct = document.querySelector('.modal__form');
const discountCheckbox = document.querySelector('#discount');
const discountInput = document.querySelector('.modal__input_discount');

const overlay = document.querySelector('.overlay');
overlay.classList.remove('active');

const createRow = (obj) => {
    const tableRow = document.createElement('tr');
    const cellFirst = document.createElement('td');
    const cellSecond = document.createElement('td');
    const cellSecondSpan = document.createElement('span');
    const cellThird = document.createElement('td');
    const cellFourth = document.createElement('td');
    const cellFIfth = document.createElement('td');
    const cellSixth = document.createElement('td');
    const cellSeventh = document.createElement('td');
    const cellEighth = document.createElement('td');
    const btnPic = document.createElement('button');
    const btnEdit = document.createElement('button');
    const btnDel = document.createElement('button');

    cellFirst.textContent = obj.id;
    cellFirst.classList.add('table__cell');
    tableRow.append(cellFirst);

    cellSecond.classList.add('table__cell', 'table__cell_left', 'table__cell_name');
    cellSecond.setAttribute('data-id', obj.id);

    cellSecondSpan.classList.add('table__cell-id');
    cellSecondSpan.textContent = 'id: ' + obj.id;
    cellSecond.append(cellSecondSpan);
    cellSecond.append(document.createTextNode(obj.title));
    tableRow.append(cellSecond);

    cellThird.classList.add('table__cell', 'table__cell_left');
    cellThird.textContent = obj.category;
    tableRow.append(cellThird);

    cellFourth.classList.add('table__cell');
    cellFourth.textContent = obj.units;
    tableRow.append(cellFourth);

    cellFIfth.classList.add('table__cell');
    cellFIfth.textContent = obj.count;
    tableRow.append(cellFIfth);

    cellSixth.classList.add('table__cell');
    cellSixth.textContent = '$' + obj.price;
    tableRow.append(cellSixth);

    cellSeventh.classList.add('table__cell');
    cellSeventh.textContent = `$${obj.price * obj.count}`;
    tableRow.append(cellSeventh);

    cellEighth.classList.add('table__cell', 'table__cell_btn-wrapper');

    btnPic.classList.add('table__btn', 'table__btn_pic');
    cellEighth.append(btnPic);

    btnEdit.classList.add('table__btn', 'table__btn_edit');
    cellEighth.append(btnEdit);

    btnDel.classList.add('table__btn', 'table__btn_del');
    cellEighth.append(btnDel);

    tableRow.append(cellEighth);

    return tableRow;
};

const renderGoods = (arr) => {
    const tableBody = document.querySelector('.table__body');

    arr.map((obj) => {
        const row = createRow(obj); 
        tableBody.append(row);
    });
};

renderGoods(goods);
