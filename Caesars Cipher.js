function rot13(str) {
  let arr = str.split("");
  let capRegex = /[A-Z]/;
  for (let i=0;i<arr.length;i++) {
    if (capRegex.test(arr[i])) {
      if (arr[i].charCodeAt(0) + 13 > 90) {
        arr[i] = String.fromCharCode(arr[i].charCodeAt(0)+13-26);
      } else {
        arr[i] = String.fromCharCode(arr[i].charCodeAt(0)+13);
      }
    };
  };

  return arr.join("");
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
