import { createActions } from 'redux-arc';

describe("create actions", () => {
  it('works', () => {
    const result =
      createActions('jedi', { add: null, reset: null });
    // console.log(result)
  })
  it('handles async', () => {
    const { creators, types } = createActions('todo', {
      list:   { url: 'api/todo',     method: 'get'  },
      read:   { url: 'api/todo/:id', method: 'get'  },
      create: { url: 'api/todo',     method: 'post' },
      update: { url: 'api/todo/:id', method: 'put'  },
    });
    // console.log(creators, types)
  });
});
