import { stringToAsciiDecimal, encrypt } from '../src/js/encrypt.js';

describe('stringToAsciiDecimal function', () => {
  it('should convert a string to an array of ASCII decimal values', () => {
    expect(stringToAsciiDecimal('Hello')).toEqual([72, 101, 108, 108, 111]);
  });

  it('should handle an empty string', () => {
    expect(stringToAsciiDecimal('')).toEqual([]);
  });

  it('should handle special characters', () => {
    expect(stringToAsciiDecimal('abc!@#')).toEqual([97, 98, 99, 33, 64, 35]);
  });
});

// describe('encrypt function', () => {
//   it('should encrypt plaintext and return a ciphertext string', () => {
//     const publicKey = { e: 65537, N: 112019 };
//     const plaintext = 'Hello';
//     const expectedCiphertext = '42992 92512 85867 85867 25366';

//     const result = encrypt(plaintext, publicKey);
//     expect(result).toEqual(expectedCiphertext);
//   });

//   it('should handle an empty plaintext', () => {
//     const publicKey = { e: 65537, N: 112019 };
//     const plaintext = 'Hello';
//     const expectedCiphertext = '2912 1132 2462 4817';

//     const result = encrypt(plaintext, publicKey);
//     expect(result).toEqual(expectedCiphertext);
//   });

//   it('should handle a different public key', () => {
//     const publicKey = { e: 17, N: 3233 };
//     const plaintext = 'Hi';
//     const expectedCiphertext = '973 2484';

//     const result = encrypt(plaintext, publicKey);
//     expect(result).toEqual(expectedCiphertext);
//   });

//   it('should handle non-numeric input', () => {
//     const publicKey = { e: 65537, N: 112019 };
//     const plaintext = 'abc!@#'; // Plaintext with non-numeric characters
//     const expectedCiphertext = '98109 32548 32996 98880 79850 97647'; // Ciphertext for "abc!@#"

//     const result = encrypt(plaintext, publicKey);
//     expect(result).toEqual(expectedCiphertext);
//   });
// });

