import { sortComparingItems } from '../../../lib/sort-items';
import { IBaseItem } from '../models/base-item';

export function orderItems<T extends IBaseItem>(
  a: T,
  b: T,
  prop = 'file-name',
  order = 'asc'
): number {
  const aProp = a[prop];
  const bProp = b[prop];
  const itemA = typeof aProp === 'string' ? aProp.toUpperCase() : aProp;
  const itemB = typeof bProp === 'string' ? bProp.toUpperCase() : bProp;

  return sortComparingItems(itemA, itemB, order);
}

export function getOrderedItems<T extends IBaseItem>(
  prop = 'file-name',
  order = 'asc'
): (a: T, b: T) => number {
  return (a: T, b: T) => orderItems(a, b, prop, order);
}
