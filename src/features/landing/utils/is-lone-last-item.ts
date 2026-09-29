/** Ô cuối đứng một mình ở hàng cuối của lưới 3 cột (7, 10... ô), để cho nó trải hết hàng. */
export function isLoneLastItem(index: number, itemCount: number) {
  return index === itemCount - 1 && itemCount % 3 === 1;
}
