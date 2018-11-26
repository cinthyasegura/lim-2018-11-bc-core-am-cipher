window.cipher = {

  encode: (offset, string) => {
    //const str = string.toUpperCase();
    let solved = [];
    for (i=0; i<string.length; i++){
        const numAscii = string.charCodeAt(i);
    if (numAscii >= 65 && numAscii <= 90) {
        const strEncr = String.fromCharCode((numAscii - 65 + offset) % 26 + 65);
        solved.push(strEncr);
    } else if (numAscii >= 97 && numAscii <= 122) {
        const strEncrLowerCase = String.fromCharCode((numAscii - 97 + offset) % 26 + 97);
        solved.push(strEncrLowerCase);
        
    } else if (numAscii == 32) {
        solved.push(" "); 
      }
    } 
     return solved.join(""); 
  },


  decode: (offset, string) => {
    //const strEncrypt = string.toUpperCase();
    let solution = [];
    for (i=0; i<string.length; i++){
     const asciiNum = string.charCodeAt(i);
    if (asciiNum >= 65 && asciiNum <= 90) {
      const strDecr = String.fromCharCode((asciiNum - 90 - offset) % 26 + 90);
      solution.push(strDecr); 
    } else if(asciiNum >= 97 && asciiNum <= 122) {
        var strDecrLowerCase = String.fromCharCode((asciiNum - 122 - offset) % 26 + 122);
      solution.push(strDecrLowerCase);
    
    } else if (asciiNum == 32) {
       solution.push(" ");
      }
    } 
     return solution.join(""); 
  },

}; 
