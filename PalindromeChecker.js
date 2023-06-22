function palindrome(string) {
    //convert to lowercase and remove non-alphanumeric characters
    const letters = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    //compare characters from both ends
    for (let i = 0; i < Math.floor(letters.length / 2); i++) {
      //if characters don't match -> it's not a palindrome
      if (letters[i] !== letters[letters.length - 1 - i]) {
        return false;
      }
    }
  
    // All characters match -> it's a palindrome
    return true;
  }
  
  palindrome("My age is 0, 0 si ega ym.");