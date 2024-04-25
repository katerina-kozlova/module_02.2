export const rewriteIndex = (elements) => {
    const rows = elements.list.querySelectorAll('tr');
    let currentNumber = 1; // Счётчик для порядковых номеров

    for (let i = 0; i < rows.length; i++) {
        const cell = rows[i].querySelector('.table__cell');
        if (cell) {
            cell.dataset.id = currentNumber;
            cell.textContent = currentNumber;
            currentNumber++; // Увеличить счётчик только для существующей строки
        }
    }
}