function telephoneCheck(string) {
    const regex = 
    /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  
    /*explanation of the regex:
      ^                  - start of the string
      (1\s?)?            - optional "1" followed by an optional whitespace
      (\(\d{3}\)|\d{3})  - either three digits enclosed in parentheses or three digits
      [\s-]?             - optional whitespace or hyphen
      \d{3}              - three digits
      [\s-]?             - optional whitespace or hyphen
      \d{4}              - four digits
      $                  - end of the string */
  
    return regex.test(string);
  }
  
  telephoneCheck("555-555-5555");