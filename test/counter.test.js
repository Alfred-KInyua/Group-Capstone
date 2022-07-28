import Counter from './itemsCount.js';

describe('ItemsCount()', () => {
  it('returns the count of items', () => {
    const items = ['item1', 'item2', 'item3', 'item4'];
    const itemsLength = items.length;
    expect(Counter(items)).toBe(itemsLength);
  });
});
