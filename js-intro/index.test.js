const { multiply, sumArrays } = require('./index');

describe('multiply two numbers by using multiply function', () => {
  test('multiplies 1 * 2 to equal 2', () => {
    expect(multiply(1, 2)).toBe(2);
  });

  test('multiplies 0 * 800 to equal 0', () => {
    expect(multiply(0, 800)).toBe(0);
  });
  
  test('multiplies 4 * 5 to equal 20', () => {
    expect(multiply(4, 5)).toBe(20);
  })
})
