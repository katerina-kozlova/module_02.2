'use strict';

export const formatPrice = (price) => {
  // Эту функцию можно использовать для форматирования суммы,
  const formatedPrice = new Intl.NumberFormat("ru", {
    notation: "standard",
  }).format(price);
  return formatedPrice;
};
