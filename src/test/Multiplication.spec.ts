import { Multiplication } from '../app/operations/Multiplication';

describe('Multiplication Operation (Jest)', () => {
  let multiplication: Multiplication;

  beforeEach(() => {
    multiplication = new Multiplication();
  });

  test('should return "*" as the symbol', () => {
    expect(multiplication.getSymbol()).toBe('*');
  });

  test('should correctly multiply two positive numbers', () => {
    expect(multiplication.execute(5, 3)).toBe(15);
  });

  test('should correctly multiply a number by zero', () => {
    expect(multiplication.execute(7, 0)).toBe(0);
    expect(multiplication.execute(0, 7)).toBe(0);
  });

  test('should correctly multiply two negative numbers', () => {
    expect(multiplication.execute(-4, -6)).toBe(24);
  });

  test('should correctly multiply a positive and a negative number', () => {
    expect(multiplication.execute(7, -3)).toBe(-21);
    expect(multiplication.execute(-4, 6)).toBe(-24);
  });

  test('should correctly multiply by one', () => {
    expect(multiplication.execute(9, 1)).toBe(9);
    expect(multiplication.execute(1, 9)).toBe(9);
  });

  test('should correctly multiply decimal numbers', () => {
    expect(multiplication.execute(2.5, 2)).toBe(5);
    expect(multiplication.execute(-1.5, 4)).toBe(-6);
  });
});
