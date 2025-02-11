import { Addition } from '../app/operations/Addition';

describe('Addition Operation (Jest)', () => {
  let addition: Addition;

  beforeEach(() => {
    addition = new Addition();
  });

  test('should return "+" as the symbol', () => {
    expect(addition.getSymbol()).toBe('+');
  });

  test('should correctly add two positive numbers', () => {
    expect(addition.execute(5, 3)).toBe(8);
  });

  test('should correctly add a positive and a negative number', () => {
    expect(addition.execute(7, -2)).toBe(5);
  });

  test('should correctly add two negative numbers', () => {
    expect(addition.execute(-4, -6)).toBe(-10);
  });

  test('should return the same number when adding zero', () => {
    expect(addition.execute(9, 0)).toBe(9);
    expect(addition.execute(0, 9)).toBe(9);
  });
});
