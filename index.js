function isPalindrome(word) {
  // Write your algorithm here
  for (let firstletter = 0; firstletter < (word.length / 2); firstletter++){
    let lastword = word.length - 1 - firstletter;
    if (word[firstletter] !== word[lastword]){
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  
*/

/*
  Add written explanation of your solution here
  comparing the letter with their correspondant if their equal 
  if their not equal at any given point to return false
  if all through is equal then the word is palindrome  and we return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));
}

module.exports = isPalindrome;
