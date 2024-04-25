// Сгенерировать случайный id для товара
export const generateVendorCodeId = () => {
  const randomNumber = Math.round(Math.random() * 100000000000000); // создать рандомное число и записать в константу
  return randomNumber; // вернем рандомное число
};
