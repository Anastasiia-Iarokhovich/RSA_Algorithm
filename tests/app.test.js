import { isPrime } from '../src/js/app.js';

describe('isPrime function', () => {
  it('should return false for numbers less than or equal to 1', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-1)).toBe(false);
  });

  it('should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(17)).toBe(true);
  });

  it('should return false for non-prime numbers', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(15)).toBe(false);
    expect(isPrime(25)).toBe(false);
  });

  it('should handle large prime numbers', () => {
    expect(isPrime(104729)).toBe(true); // 10000th prime number
    expect(isPrime(982451653)).toBe(true); // A large prime number
  });
});
