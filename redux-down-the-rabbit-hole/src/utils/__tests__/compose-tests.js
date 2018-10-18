import compose from '../compose';

describe("Compose tests", () => {
  it('does compose', () => {
    const add = (x, y) => x + y;
    const double = x => x * x;
    const triple = x => x * x * x;

    const composedFn = compose(double, triple, add);
    const func = composedFn(1,2);
    const func2 = double(triple(add(1,2)));
    console.log(func);
    expect(func).toBe(func2);
  });
});
