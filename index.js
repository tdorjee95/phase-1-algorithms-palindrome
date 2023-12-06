function reverse(word){
  const wordArray = word.split('');
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return reversedWord;
}




function isPalindrome(word) {
 const reversedWord =  reverse(word)

 if (word === reversedWord){
  return true
 } else {
  return false
 }
}


/* Write your algorithm here
Create a function that returns true if the input it spelled the same way frontwards and backwards.
if " " is spelled the same either way return true else return false

/* Add your pseudocode here
  () => {
    let input = " ";
    if (" " === reverse(" ") in reverse)
    return true
  else 
  return false
  }
*/

/*
  Add written explanation of your solution here

 The function takes a string as an input and then uses
 the reverse() function on that string and if the 
 string is equal to the original input then the 
 function returns true
 
 */


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
