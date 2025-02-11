import { Power } from '../app/operations/Power';

describe('Power Operation (Jest)', () => {
  let power: Power;

  beforeEach(() => {
    power = new Power();
  });

  test('should return "^" as the symbol', () => {
    expect(power.getSymbol()).toBe('^');
  });

  test('should correctly calculate positive exponentiation', () => {
    expect(power.execute(2, 3)).toBe(8); // 2^3 = 8
  });

  test('should correctly calculate zero exponentiation', () => {
    expect(power.execute(5, 0)).toBe(1); // Any number ^ 0 = 1
  });

  test('should correctly calculate exponentiation with exponent 1', () => {
    expect(power.execute(7, 1)).toBe(7); // Any number ^ 1 = same number
  });

  test('should correctly calculate exponentiation with negative base and even exponent', () => {
    expect(power.execute(-2, 4)).toBe(16); // (-2)^4 = 16
  });

  test('should correctly calculate exponentiation with negative base and odd exponent', () => {
    expect(power.execute(-2, 3)).toBe(-8); // (-2)^3 = -8
  });

  test('should correctly calculate exponentiation with a negative exponent', () => {
    expect(power.execute(2, -3)).toBeCloseTo(0.125, 5); // 2^-3 = 1/8
  });

  test('should correctly calculate exponentiation when base is 0', () => {
    expect(power.execute(0, 3)).toBe(0); // 0^3 = 0
  });

  test('should throw an error when 0 is raised to the power of 0', () => {
    expect(() => power.execute(0, 0)).toThrow('0^0 is undefined');
  });

  test('should correctly calculate exponentiation with decimal exponents', () => {
    expect(power.execute(9, 0.5)).toBe(3); // 9^0.5 = sqrt(9) = 3
    expect(power.execute(16, 0.5)).toBe(4); // 16^0.5 = sqrt(16) = 4
  });
});
