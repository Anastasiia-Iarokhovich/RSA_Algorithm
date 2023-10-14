import { asciiValuesToString, decrypt } from '../src/js/decrypt.js';

describe('asciiValuesToString function', () => {
  it('should convert an array of ASCII values to a string', () => {
    expect(asciiValuesToString([72, 101, 108, 108, 111])).toBe('Hello');
  });

  it('should handle empty input', () => {
    expect(asciiValuesToString([])).toBe('');
  });

  it('should handle special characters', () => {
    expect(asciiValuesToString([33, 64, 35])).toBe('!@#');
  });
});


// describe('decrypt function', () => {

//   it('Decryption should decrypt a ciphertext and return the original plaintext', () => {
//     const privateKey = {
//       p: 61n, // Prime number 1
//       q: 53n, // Prime number 2
//       d: 2753n, // Private exponent
//     };
  
//     const ciphertext = '2170 1313 745 745 2185 1992 1107 2185 2412 745 1773 1853'; // hello world!
//     const decryptedValues = decrypt(ciphertext, privateKey);
  
//     // Erwartete BigInt-Werte (anstatt String)
//     const expectedPlaintext = [104n, 101n, 108n, 108n, 111n, 32n, 119n, 111n, 114n, 108n, 100n, 33n];
  
//     // Hier die Überprüfung ändern, um die BigInt-Werte zu vergleichen
//     expect(decryptedValues).toEqual(expectedPlaintext);
//   });

//   it('should decrypt a ciphertext and return an array of decrypted values', () => {
//     const privateKey = { p: 11n, q: 13n, d: 113n };
//     const ciphertext = '36 96 65 67 65 114 38 89 82 118 129 91 109 39 124'; // RSA-Algorithmus
//     const expectedDecrypted = [82n, 83n, 65n, 45n, 65n, 108n, 103n, 111n, 114n, 105n, 116n, 104n, 109n, 117n, 115n,];
//     const result = decrypt(ciphertext, privateKey);
//     expect(result).toEqual(expectedDecrypted);
//   });
  
//     it('should handle empty input', () => {
//       const privateKey = { p: 61n, q: 53n, d: 17n };
//       const ciphertext = '1992'; // Leerzeichen
//       const expectedDecryptedValues = [32n]; 
//       const result = decrypt(ciphertext, privateKey);
//       expect(result).toEqual(expectedDecryptedValues);
//     });
  
//     it('should handle a different private key', () => {
//       const privateKey = { p: 43n, q: 37n, d: 7n }; // Different private key
//       const ciphertext = '1166 1437'; // Hi
//       const expectedDecryptedValues = [72n, 105n]; // ASCII values for "Hi" 
//       const result = decrypt(ciphertext, privateKey);
//       expect(result).toEqual(expectedDecryptedValues);
//     });
  
//     it('should handle non-numeric input', () => {
//       const privateKey = { p: 61n, q: 53n, d: 17n };
//       const ciphertext = '123abc456'; // Non-numeric characters
//       const expectedDecryptedValues = [123, NaN, 456]; // NaN for non-numeric characters
//       const result = decrypt(ciphertext, privateKey);
//       expect(result).toEqual(expectedDecryptedValues);
//     });
//   });
