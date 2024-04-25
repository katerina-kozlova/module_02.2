import { formatPrice } from "./formatPrice.js";

// Создать строку с новым товаром
export const createRow = (obj, index) => {
  // Если в discount "false", значение равно 0
  if (obj.discount === false) {
    obj.discount = 0;
  }
  // Создать переменную суммы, вычисление которой зависит от наличия скидки:
  // нет скидки
  let sum = obj.price * obj.count;
  // скидка есть
  sum -= (sum * obj.discount) / 100;

  // создать верстку для новой строки
  const tableRow = document.createElement("tr");
  const cellId = document.createElement("td");
  const cellName = document.createElement("td");
  const cellNameSpan = document.createElement("span");
  const cellCategory = document.createElement("td");
  const cellUnits = document.createElement("td");
  const cellQuantity = document.createElement("td");
  const cellPrice = document.createElement("td");
  const cellCost = document.createElement("td");
  const cellControls = document.createElement("td");
  const btnPic = document.createElement("button");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");

  // добавить класс и наполнение для каждого созданного элемента
  cellId.classList.add("table__cell"); // порядковый номер товара
  cellId.textContent = index; // индекс товара из массива + 1

  cellName.classList.add("table__cell", "table__cell_left", "table__cell_name"); // наименова товара
  cellName.setAttribute("data-id", obj.id); // добавить атрибуту

  cellNameSpan.classList.add("table__cell-id"); // создать id товара
  cellNameSpan.textContent = `id: ${obj.id}`;
  cellName.append(cellNameSpan);
  cellName.append(document.createTextNode(obj.title)); // в наименование добавить текст из массива

  cellCategory.classList.add("table__cell", "table__cell_left");
  cellCategory.textContent = obj.category;

  cellUnits.classList.add("table__cell");
  cellUnits.textContent = obj.units;

  cellQuantity.classList.add("table__cell");
  cellQuantity.textContent = obj.count;

  cellPrice.classList.add("table__cell");
  cellPrice.textContent = "$" + obj.price;

  cellCost.classList.add("table__cell"); // посчитать итоговую стомость одного товара
  cellCost.textContent = `$${formatPrice(sum)}`;

  btnPic.classList.add("table__btn", "table__btn_pic");
  btnEdit.classList.add("table__btn", "table__btn_edit");
  btnDel.classList.add("table__btn", "table__btn_del");

  cellControls.classList.add("table__cell", "table__cell_btn-wrapper");
  cellControls.append(btnPic, btnEdit, btnDel); // сгруппировать кнопки в один контейнер

  // созданные элементы добавляем в одну строчку таблицы
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

  return tableRow; // возвращаем строчку таблицы с одним товаром
};
