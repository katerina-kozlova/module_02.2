'use strict';

import { createRow } from "./createRow.js";
import { renderTotalSum } from "./renderTotalSum.js";

// Добавление в data
export const addGoodsData = (elements, data) => {
  // Сборка данных с формы
  const formData = new FormData(elements.modalForm);
  const product = Object.fromEntries(formData);
  const newProduct = {
    id: Number(elements.productId.textContent),
    title: product.name,
    category: product.category,
    description: product.description,
    units: product.units,
    count: Number(product.count),
    price: Number(product.price),
    discount: product.discount_count ? Number(product.discount_count) : false,
  };
  // Пушим новый товар
  data.push(newProduct);
  const newProductIndex = data.length;
  // Создаем новый ряд таблицы, передаем туда наш новый продукт, и его индекс
  elements.list.append(createRow(newProduct, newProductIndex));
  // После , пересчитываем сумму
  renderTotalSum(data, elements);
};
