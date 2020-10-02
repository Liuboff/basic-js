const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool) {
    if (bool === false || bool === 'false') this.modification = 'reverse';
    else this.modification = 'direct';
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined)
      throw new Error('Need message and key as args');
    message = message.toUpperCase();
    key = key.toUpperCase();
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encryptedMessage = '';
    let keyIdx = 0;
    for (let i = 0; i < message.length; i++) {
      if (abc.indexOf(message[i]) === -1) {
        encryptedMessage += message[i];
      } else {
        encryptedMessage += abc[(abc.indexOf(message[i]) + abc.indexOf(key[keyIdx % key.length])) % abc.length];
        keyIdx++;
      }
    }
    return this.modification === 'reverse' ? [...encryptedMessage].reverse().join('') : encryptedMessage;
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined)
      throw new Error('Need encryptedMessage and key as args');
    key = key.toUpperCase();
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let message = '';
    let keyIdx = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (abc.indexOf(encryptedMessage[i]) === -1) {
        message += encryptedMessage[i];
      } else {
        message += abc[(abc.indexOf(encryptedMessage[i]) +
                abc.length - abc.indexOf(key[keyIdx % key.length])) % abc.length];
        keyIdx++;
      }
    }
    return this.modification === 'reverse' ? [...message].reverse().join('') : message;
  }
}

module.exports = VigenereCipheringMachine;
