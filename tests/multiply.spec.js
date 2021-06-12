const { multiply } = require('./../calculator');

describe('Multiply', () => {
  test('should multiply two positive integers correctly', () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test('should multiply two floating point numbers correctly', () => {
    const result = multiply(1.35, 2.29);
    expect(result).toBe(3.0915);
  });

  test('should multiply a negative and a positive number correctly', () => {
    const result = multiply(-1.35, 2.29);
    expect(result).toBe(-3.0915);
  });

  test('should return 0 when function is called without arguments', () => {
    const result = multiply();
    expect(result).toBe(0);
  });

  test('should return 0 when function is called with an argument different than 0, and 0', () => {
    const result = multiply(25, 0);
    expect(result).toBe(0);
  });

  test('should multiply a value with 1 when function is called with a single argument', () => {
    const result = multiply(26);
    expect(result).toBe(26);
  });
});
