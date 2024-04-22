'use strict';

const getDocumentElements = () => {
  // Находим элементы на странице ==============================
  const addNewProductBtn = document.querySelector(".panel__add-goods"); //Кнопка добавить товар
  const overlay = document.querySelector(".overlay"); //Наш overlay
  const cmsTotalPrice = document.querySelector(".cms__total-price"); //Общая сумма вверху страницы
  const list = document.querySelector(".goods__table"); // Наша таблица для вывода товаров
  const tableBody = document.querySelector('.table__body');

  // Элементы модального окна
  const modal = document.querySelector(".modal"); // Модалка
  const modalTitle = modal.querySelector(".modal__title"); // Название модального окна, зависит от того , что мы будем делать > добавить или изменить товар
  const productId = modal.querySelector(".vendor-code__id"); // Случайной ID товара (Генерится при открытии модалки, или получаем из БД)
  const modalForm = document.querySelector(".modal__form"); // Форма для отправки товара
  const submitFormBtn = modal.querySelector(".modal__submit"); // Кнопка отправки формы
  const closeModalBtn = document.querySelector(".modal__close"); // Кнопка закрытия модального окна
  const modalTotalPrice = modal.querySelector(".modal__total-price"); //Общая стоимость товара в модалке

  //Элементы формы
  const productName = modalForm.querySelector('input[name="name"]'); // Поле формы - имя товара
  const productCategory = modalForm.querySelector('input[name="category"]'); // Поле формы - категория
  const productUnits = modalForm.querySelector('input[name="units"]'); // Поле формы - единицы измерения
  const productDiscountCheckbox = modalForm.querySelector(".modal__checkbox"); // Поле формы - галочка активации скидки
  const productDiscountInput = modalForm.querySelector(".modal__input_discount"); // Поле формы - скидка(число || false)
  const productCount = modalForm.querySelector('input[name="count"]'); // Поле формы - кол-во
  const productPrice = modalForm.querySelector('input[name="price"]'); // Поле формы - цена
  const productDescription = modalForm.querySelector('input[name="description"]'); // Поле формы - описание

  return {
    addNewProductBtn,
    overlay,
    cmsTotalPrice,
    list,
    modal,
    modalTitle,
    productId,
    modalForm,
    submitFormBtn,
    closeModalBtn,
    productName,
    productCategory,
    productUnits,
    productDiscountCheckbox,
    productDiscountInput,
    productCount,
    productPrice,
    modalTotalPrice,
    productDescription,
    tableBody,
  };
};
export default getDocumentElements;
