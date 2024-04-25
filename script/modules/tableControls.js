import { deleteGoods } from "./deleteGoods.js";

// Функция обработки событий во всей таблице
export const tableControls = (elements, data) => {
    const {list} = elements; // Достать таблицу 
    // Делегировать событие клика на родителя
    list.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.table__btn_del')) {
            const targetProductRow = target.closest('tr');
            const productId = +targetProductRow.children[1].getAttribute('data-id');
            deleteGoods(targetProductRow, productId, data, elements);
        }
    });
};