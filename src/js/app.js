import { generateKeys } from './generateKeys.js';
import {encrypt, stringToAsciiDecimal} from './encrypt.js';
import {decrypt, asciiValuesToString} from './decrypt.js';
  
// HTML variables
const prime_number_p = document.getElementById("prime_number_p");
const prime_number_q = document.getElementById("prime_number_q");
const message = document.getElementById("message");
const btn_calculate = document.getElementById("btn_calculate");
let encrypted = document.getElementById("encrypted");
let decrypted = document.getElementById("decrypted");
let publicKeyHTML = document.getElementById("publicKey");
let privateKeyHTML = document.getElementById("privateKey");
let charToDecimal = document.getElementById("charToDecimal");
let decimalToChar = document.getElementById("decimalToChar");

btn_calculate.addEventListener("click", function(event) {
  event.preventDefault();

  const p = parseInt(prime_number_p.value);
  const q = parseInt(prime_number_q.value);
  const messageValue = message.value;
  let hasError = false;

  // input validation
  if (!isPrime(p)) {
    p_error_message.innerText = "Bitte geben Sie eine gültige Primzahl ein.";
    hasError = true;
  }
  else if( prime_number_p.value === "") {
    p_error_message.innerText = "Das Feld darf nicht leer bleiben.";
    hasError = true;
  }
  else {
    p_error_message.innerText = "";
  }

  if (!isPrime(q)) {
    q_error_message.innerText = "Bitte geben Sie eine gültige Primzahl ein.";
    hasError = true;
  }
  else if( prime_number_q.value === "") {
    q_error_message.innerText = "Das Feld darf nicht leer bleiben.";
    hasError = true;
  }
  else if(p === q) {
    q_error_message.innerText = "Die zweite Primzahl darf nicht gleich der ersten Primzahl sein.";
    hasError = true;
  }
  else {
    q_error_message.innerText = "";
  }
  if(message.value === "") {
    error_message.innerText = "Das Feld darf nicht leer bleiben.";
    hasError = true;
  }
  else {
    error_message.innerText = "";
  }
 
  if (!hasError) {
    const { publicKey, privateKey } = generateKeys(p, q);   
    const encryptedMessage = encrypt(messageValue, publicKey);
    const decryptedMessage = decrypt(encryptedMessage, privateKey);
  
    publicKeyHTML.innerText = "Schritt 1: Berechnen des öffentlichen Schlüssels: " + JSON.stringify(publicKey);
    privateKeyHTML.innerText = "Schritt 2: Berechnen des privaten Schlüssels: " + JSON.stringify(privateKey);
    charToDecimal.innerHTML = "Schritt 3: Umwandeln jedes Zeichens in eine Dezimalzahl (basierend auf der ASCII-Tabelle): " + messageValue + " = " + stringToAsciiDecimal(messageValue).join(' ');
    encrypted.innerText = "Schritt 4: Verschlüsseln der Nachricht mit dem öffentlichen Schlüssel: " + encryptedMessage;
    decrypted.innerText = "Schritt 5: Entschlüsseln der Nachricht mit dem privaten Schlüssel: " + decryptedMessage.join(' ');
    decimalToChar.innerHTML = "Schritt 6: Konvertieren jeder Dezimalzahl zurück in ein Zeichen (basierend auf der ASCII-Tabelle): " + decryptedMessage.join(' ') + " = " + asciiValuesToString(decryptedMessage);
  
    prime_number_p.value = "";
    prime_number_q.value = "";
    message.value = "";
  }
  else {
    btn_calculate.disabled = false;
  }
});

export function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}