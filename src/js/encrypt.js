// Encryption - Verschlüsselung
export function encrypt(plaintext, publicKey) {
    const { e, N } = publicKey;
    const asciiArray = stringToAsciiDecimal(plaintext);
    
    const eBigInt = BigInt(e);
    const nBigInt = BigInt(N);

    const encryptedValues = asciiArray.map(asciiValue => { // Perform encryption for each ASCII value and store them in an array
        const plaintextBigInt = BigInt(asciiValue);
        return (plaintextBigInt ** eBigInt % nBigInt).toString();
    });
    return encryptedValues.join(' '); // Join the encrypted values into a string
}

export function stringToAsciiDecimal(str) { //Convert a string to decimal values
    const asciiArray = [];
    for (let i = 0; i < str.length; i++) {
      const asciiValue = str.charCodeAt(i);
      asciiArray.push(asciiValue);
    }
    return asciiArray;
}