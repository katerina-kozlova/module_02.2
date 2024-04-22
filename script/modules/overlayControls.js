import { addGoodsData } from "./addGoodsData.js";
import { generateVendorCodeId } from "./generateVendorCodeId.js";
import { currentProductCost, renderTotalSum } from "./renderTotalSum.js";

export const overlayControls = (elements, data) => {
  //Функции работы с модалкой
  // Открытие модалки
  const openModal = () => {
    elements.overlay.classList.add("active");
    currentProductCost(elements);
  };
  // Закрытие модалки
  const closeModal = () => {
    elements.overlay.classList.remove("active");
    elements.productDiscountInput.removeAttribute("disabled");
    elements.productDiscountCheckbox.checked = false;
    elements.modalForm.reset();
  };
  // Исходные состояния модалки.. Сброс скидки при открытии
  const initialModalState = () => {
    elements.productDiscountInput.setAttribute("disabled", "disabled");
    elements.productDiscountInput.value = "";
    elements.productId.textContent = generateVendorCodeId();
  };

  // События на элементах
  // addNewProductBtn это все тот же элемент с нашей страницы, дергаем его из объекта
  elements.addNewProductBtn.addEventListener("click", () => {
    openModal();
    initialModalState();
  });

  // Закрытие модалки по крестику, добавить клик на оверлей, или кнопка ESC с клавы, возможно нужно немного переписать
  elements.closeModalBtn.addEventListener("click", () => {
    closeModal();
  });
  // Обработка галочки чекбокса
  //Проверяем есть ли галочка и просчитываем сумму товара
  elements.productDiscountCheckbox.addEventListener("change", () => {
    if (elements.productDiscountCheckbox.checked === true) {
      elements.productDiscountInput.removeAttribute("disabled");
      elements.productDiscountInput.value = 0;
    } else {
      currentProductCost(elements);
      initialModalState();
    }
  });
  // Вешаем обработчик на элемент кол-ва цены и скидки
  [
    elements.productDiscountInput,
    elements.productCount,
    elements.productPrice,
  ].forEach((element) =>
    element.addEventListener("change", () => {
      currentProductCost(elements);
    })
  );

  // Отправка формы
  elements.modalForm.addEventListener("submit", (e) => {
    //Убрали перезагрузку
    e.preventDefault();
    // Проверили что падает в data
    console.log("form submit");
    // Добавили в data
    addGoodsData(elements, data);
    // Закрыли модалку
    closeModal();
    // Пересчетали сумму
    renderTotalSum(data, elements);
    console.log(`data после добавления товара`, data);
  });
};
