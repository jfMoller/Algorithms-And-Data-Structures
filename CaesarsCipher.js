const cipherArray = [
    { letter: "A", number: 1 },
    { letter: "B", number: 2 },
    { letter: "C", number: 3 },
    { letter: "D", number: 4 },
    { letter: "E", number: 5 },
    { letter: "F", number: 6 },
    { letter: "G", number: 7 },
    { letter: "H", number: 8 },
    { letter: "I", number: 9 },
    { letter: "J", number: 10 },
    { letter: "K", number: 11 },
    { letter: "L", number: 12 },
    { letter: "M", number: 13 },
    { letter: "N", number: 14 },
    { letter: "O", number: 15 },
    { letter: "P", number: 16 },
    { letter: "Q", number: 17 },
    { letter: "R", number: 18 },
    { letter: "S", number: 19 },
    { letter: "T", number: 20 },
    { letter: "U", number: 21 },
    { letter: "V", number: 22 },
    { letter: "W", number: 23 },
    { letter: "X", number: 24 },
    { letter: "Y", number: 25 },
    { letter: "Z", number: 26 },
  ];
  
    function rot13(string) {
    //ROT13: values of the letters are shifted 13 places, e.g: A -> N
    const cipherValue = 13;
    const decryptedLetters = [];
  
    for (let i = 0; i < string.length; ++i) {
      let letter = string[i];
      //handles non-letter symbols (spaces, dots, etc.)
      if (!letter.match(/[A-Z]/)) {
        decryptedLetters.push(letter);
        continue;
      }
      //get the index of the letter in the cipher array
      let cipherIndex = letter.charCodeAt(0) - 65;
  
      //calculate the decrypted index using modular arithmetic
      let decryptedIndex = (cipherIndex + cipherValue) % 26;
  
      //get the decrypted letter from the cipher array
      let decryptedLetter = cipherArray[decryptedIndex].letter;
  
      decryptedLetters.push(decryptedLetter);
    }
    return decryptedLetters.join("");
  }
  
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");