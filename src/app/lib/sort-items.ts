export function sortComparingItems(
  itemA: string | number,
  itemB: string | number,
  order = 'asc'
): number {
  let comparison = 0;
  if (itemA > itemB) {
    comparison = 1;
  }
  if (itemA < itemB) {
    comparison = -1;
  }
  return order === 'desc' ? comparison * -1 : comparison;
}
