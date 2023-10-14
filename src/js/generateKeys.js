// Keys generation - Schlüsselerzeugung
export function generateKeys(p, q) { // Choose two large prime numbers p and q
       
  const N = p * q;
  const phi = (p - 1) * (q - 1);
  const e = chooseE(phi); 
  const d = modInverse(e, phi); 
    
  return { publicKey: { e, N }, privateKey: { p, q, d } }; // Return of the public and private key
}

export function chooseE(phi) {
  const eCandidates = [65537, 65539, 17, 3]; // Commonly used values for e
   
  for (const e of eCandidates) {
    if (gcd(e, phi) === 1) {
      return e;
    }
  }
  for (let e = 2; e < phi; e++) {
    if (gcd(e, phi) === 1) {
      return e;
    }
  }
}

export function gcd(a, b) { // Calculate the greatest common divisor (GGT) of two numbers
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

export function modInverse(e, phi) { // Calculate the Modular Inverse Using the Advanced Euclidean Algorithm
  for (let x = 1; x < phi; x++) {
    if ((e * x) % phi === 1) {
      return x;
    }
  }
  return 1;
}