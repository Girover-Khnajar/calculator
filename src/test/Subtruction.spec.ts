import { Subtraction } from '../app/operations/Subtruction';

describe('Subtraction Operation (Jest)', () => {
  let subtraction: Subtraction;

  beforeEach(() => {
    subtraction = new Subtraction();
  });

  test('should return "-" as the symbol', () => {
    expect(subtraction.getSymbol()).toBe('-');
  });

  test('should correctly subtract two positive numbers', () => {
    expect(subtraction.execute(10, 3)).toBe(7);
  });

  test('should correctly subtract a larger number from a smaller one', () => {
    expect(subtraction.execute(3, 10)).toBe(-7);
  });

  test('should correctly subtract when result is zero', () => {
    expect(subtraction.execute(5, 5)).toBe(0);
  });

  test('should correctly subtract negative numbers', () => {
    expect(subtraction.execute(-10, -5)).toBe(-5);
  });

  test('should correctly subtract when one number is negative', () => {
    expect(subtraction.execute(7, -3)).toBe(10);
    expect(subtraction.execute(-4, 6)).toBe(-10);
  });

  test('should return the same number when subtracting zero', () => {
    expect(subtraction.execute(9, 0)).toBe(9);
    expect(subtraction.execute(0, 9)).toBe(-9);
  });
});
