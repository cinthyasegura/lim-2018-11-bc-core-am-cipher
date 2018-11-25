window.cipher = {

  encode: (offset, string) => {
    const str = string.toUpperCase();
    let solved = [];
    for (i=0; i<str.length; i++){
        const numAscii = str.charCodeAt(i);
    if (numAscii >= 65 && numAscii <= 90) {
        const strEncr = String.fromCharCode((numAscii - 65 + offset) % 26 + 65);
        solved.push(strEncr);
    } else if (numAscii == 32) {
        solved.push(" ");
      }
    } 
     return solved.join(""); 
  },


  decode: (offset, string) => {
    const strEncrypt = string.toUpperCase();
    let solution = [];
    for (i=0; i<strEncrypt.length; i++){
     const asciiNum = strEncrypt.charCodeAt(i);
    if (asciiNum >= 65 && asciiNum <= 90) {
      const strDecr = String.fromCharCode((asciiNum - 90 - offset) % 26 + 90);
      solution.push(strDecr); 
    } else if (asciiNum == 32) {
       solution.push(" ");
      }
    } 
     return solution.join(""); 
  },

};
