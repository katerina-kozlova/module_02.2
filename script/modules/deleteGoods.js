import { renderTotalSum } from "./renderTotalSum.js";
import { rewriteIndex } from "./rewriteIndex.js";

export const deleteGoods = (targetProductRow, productId, data, elements) => {
    targetProductRow.remove();
    rewriteIndex(elements);
    const index = data.findIndex((item) => item.id === productId);
    data.splice(index, 1);
    renderTotalSum(data, elements);
};
