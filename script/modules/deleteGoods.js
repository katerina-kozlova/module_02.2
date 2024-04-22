'use strict';
import { renderTotalSum } from "./renderTotalSum.js";
import goods from "../goods.js";

export const deleteGoods = (data, elements) => {
    const buttonsDel = document.querySelectorAll('.table__btn_del');

    buttonsDel.forEach((button) => {
        button.addEventListener('click', (event) => {
            const row = event.target.closest('tr');
            const idRow = row.querySelector('.table__cell_name').getAttribute('data-id');

            // Удаление строки из таблицы
            row.remove();

            // Удаление товара из массива goods
            const index = goods.findIndex((item) => item.id === Number(idRow));
            goods.splice(index, 1);

            // Обновление общей суммы
            renderTotalSum(data, elements);
        });
    });
};