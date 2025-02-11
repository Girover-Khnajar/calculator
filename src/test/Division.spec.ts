import { Division } from '../app/operations/Division';

describe('Division Operation (Jest)', () => {
  let division: Division;

  beforeEach(() => {
    division = new Division();
  });

  test('should return "÷" as the symbol', () => {
    expect(division.getSymbol()).toBe('÷');
  });

  test('should correctly divide two positive numbers', () => {
    expect(division.execute(10, 2)).toBe(5);
  });

  test('should correctly divide two negative numbers', () => {
    expect(division.execute(-20, -4)).toBe(5);
  });

  test('should correctly divide a positive and a negative number', () => {
    expect(division.execute(15, -3)).toBe(-5);
  });

  test('should correctly divide a number by 1', () => {
    expect(division.execute(9, 1)).toBe(9);
  });

  test('should return 0 when dividing 0 by any number', () => {
    expect(division.execute(0, 5)).toBe(0);
  });

  test('should throw an error when dividing by zero', () => {
    expect(() => division.execute(5, 0)).toThrow('Cannot divide by zero');
  });

  test('should correctly divide decimal numbers and round to 5 decimal places', () => {
    expect(division.execute(10, 3)).toBeCloseTo(3.33333, 5);
    expect(division.execute(7, 2)).toBeCloseTo(3.50000, 5);
  });
});
