/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

//string to form array. 
// check if each character is vowel or not.

function countVowels(str) {
  let counter = 0;
  let vowels = ["a","e","i","o","u"]
  let word = str.toLowerCase().split("");
  for (i=0;i<word.length;i++){
    if (vowels.includes(word[i])){
      counter = counter+1;
    }
  }
  return counter;
}

module.exports = countVowels;