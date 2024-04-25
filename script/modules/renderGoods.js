import { createRow } from "./createRow.js";
import { renderTotalSum } from "./renderTotalSum.js";
import { tableControls } from "./tableControls.js";

export const renderGoods = (elements, data) => {
  // Получили элементы нашей страницы, и массив данных
  const outputTable = elements.list;
  console.log(`data исходная`, data);
  data.map((item, index) => {
    outputTable.append(createRow(item, index + 1));
  });
  renderTotalSum(data, elements);
  tableControls(elements, data);
};
