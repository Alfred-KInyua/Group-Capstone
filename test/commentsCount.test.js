import commentCounter from './commentsCounter.js';

describe('commentCounter()', () => {
  it('returns count of comments', () => {
    const items = [{
      item_id: 'item1',
      username: 'Esi',
      comment: 'Nice Movie',
    },
    {
      item_id: 'item2',
      username: 'Alfred',
      comment: 'It is really nice Movie',
    },
    {
      item_id: 'item3',
      username: 'Nathaniel',
      comment: 'I enjoyed everybit of the movie',
    },
    ];
    const itemsLength = items.length;
    expect(commentCounter(items)).toBe(itemsLength);
  });
});
