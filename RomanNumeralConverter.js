const romanNumerals = [
    { letter: "M", numeral: 1000 },
    { letter: "CM", numeral: 900 },
    { letter: "D", numeral: 500 },
    { letter: "CD", numeral: 400 },
    { letter: "C", numeral: 100 },
    { letter: "XC", numeral: 90 },
    { letter: "L", numeral: 50 },
    { letter: "XL", numeral: 40 },
    { letter: "X", numeral: 10 },
    { letter: "IX", numeral: 9 },
    { letter: "V", numeral: 5 },
    { letter: "IV", numeral: 4 },
    { letter: "I", numeral: 1 },
  ];
  
  function convertToRoman(inputNumber) {
    let convertedNumbers = [];
  
    //iterate through all numerals and subtract them from the inputNumber
    for (const { letter, numeral } of romanNumerals) {
      while (inputNumber >= numeral) {
        inputNumber -= numeral;
         //the subtracted numeral is saved in the Roman format
        convertedNumbers.push(letter);
      }
    }
  
    //concatenate the Roman numerals to form the resulting string
    return convertedNumbers.join("");
  }
  
  convertToRoman(649);