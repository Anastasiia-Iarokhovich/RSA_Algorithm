// Decryption - Entschlüsselung
export function decrypt(ciphertext, privateKey) {
    const { p, q, d } = privateKey;
    const ciphertextArray = ciphertext.split(' '); // Split the input string into an array of decimal values
    
    const dBigInt = BigInt(d);
    const pBigInt = BigInt(p);
    const qBigInt = BigInt(q);

    const decryptedValues = ciphertextArray.map(decimalValue => { // Perform decryption for each decimal value and store them in an array
        const decryptedValue = BigInt(decimalValue) ** dBigInt % (pBigInt * qBigInt);
        return Number(decryptedValue);
    });

    //return asciiValuesToString(decryptedValues);
    return decryptedValues;
}

export function asciiValuesToString(asciiValues) { //Convert an array of decimal values to a string
    return asciiValues.map(decimalValue => String.fromCharCode(decimalValue)).join('');
}
