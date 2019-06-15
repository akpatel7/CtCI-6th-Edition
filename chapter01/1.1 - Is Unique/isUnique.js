const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

var allUniqueChars = function(string) {
  
  // O(n^2) approach, no additional data structures used
  // for each character, check remaining characters for duplicates
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false; // if match, return false
      }
    }
  }
  return true; // if no match, return true
};

/* TESTS */
// log some tests here

readline.question(`Input string?`, (string) => {
  console.log(`allUniqueChars ${string}: ${allUniqueChars(string)}`);
  readline.close();
});