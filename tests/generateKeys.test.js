import { gcd, modInverse } from '../src/js/generateKeys.js';

describe('gcd function', () => {
  it('should calculate the GCD of two positive integers', () => {
    expect(gcd(48, 16)).toBe(16); //48:16=3Rest0 => 16
  });

  it('should handle one input being zero', () => {
    expect(gcd(0, 42)).toBe(42); //0:42=0Rest0 => 42
  });

  it('should handle both inputs being zero', () => {
    expect(gcd(0, 0)).toBe(0); //0:0=0Rest0 => 0 Darf man nicht durch 0 teilen?
  });

  it('should calculate the GCD of negative integers', () => {
    expect(gcd(-30, -18)).toBe(-6);
    // 30:18=1Rest12
    // 18:12=1Rest6
    // 12:6=2Rest0 => (6-6-6)=-6 =>-6
  });

  it('gcd of two positive numbers', () => {
    expect(gcd(12, 18)).toBe(6);
    // 24:18=1Rest6
    // 18:6=3Rest0 => 6
  });

  it('gsd of two prime numbers', () => {
    expect(gcd(2668, 17)).toBe(1);
    // 2668:17=156Rest16
    // 17:16=1Rest1
    // 16:1=16Rest0 => 1
  });
});


describe('modInverse function', () => {

  it('should calculate the modular inverse of e and phi', () => {
    expect(modInverse(17, 2668)).toBe(157);
    // 16=2668-156*17
    // 1=17-1*16
    // 1=17-1*(2668-156*17)
    // 1=17-1*2668+156*17
    // 1=157*17-1*2668 => 157
  });

  it('should calculate the modular inverse of e and phi', () => {
    expect(modInverse(13, 17)).toBe(4);
    // 17=1*13+4 | 4=17-1*13
    // 13=3*4+1  | 1=13-3*4 => 1=13-3(17-1*13) => 1=13-3*17+3*13 => 1=4*13-3*17 => 4
    // 4=4*1+0
  });

  it('should calculate the modular inverse of e and phi', () => {
    expect(modInverse(40, 17)).toBe(3);
  });

  it('should handle e and phi not having an inverse', () => {
    expect(modInverse(7, 7)).toBe(1); //Es gibt keine modulare multiplikative Inverse für diese Ganzzahl
  });

  it('should handle e and phi being relatively prime', () => {
    expect(modInverse(3, 8)).toBe(3);
  });

  it('should handle e and phi not having an inverse', () => {
    expect(modInverse(4, 8)).toBe(1); //Es gibt keine modulare multiplikative Inverse für diese Ganzzahl
  });
});

