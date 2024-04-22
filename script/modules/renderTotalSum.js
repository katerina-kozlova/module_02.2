import { formatPrice } from "./formatPrice.js";

// Общая стоиомость всех товаров
const getTotalPrice = (data) => {
  let total = 0;
  total = data.reduce((previousSum, product) => {
    if (product.discount === false) {
      product.discount = 0;
    }
    let sum = product.count * product.price;
    sum -= (sum * product.discount) / 100;
    product.sum = sum;
    return previousSum + sum;
  }, 0);
  return formatPrice(total);
};
// Функиця вывода общей суммы на верх страницы.
export const renderTotalSum = (data, { cmsTotalPrice }) => {
  cmsTotalPrice.innerHTML = getTotalPrice(data);
};
// Пересчет суммы в модалке
export const currentProductCost = (elements) => {
  let totalCost = 0;

  totalCost =
    parseInt(elements.productPrice.value) *
    parseInt(elements.productCount.value);

  if (elements.productDiscountCheckbox.checked === true) {
    totalCost -=
      (totalCost * parseInt(elements.productDiscountInput.value)) / 100;
  }
  elements.modalTotalPrice.innerHTML = totalCost ? totalCost : 0;
  return Math.floor(totalCost);
};
