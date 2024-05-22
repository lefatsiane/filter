let array = ["filter", "map", "reduce", "every", "someone", "find", "hello", "worldly", "apples", "banana"];  // array of words to be filtered

function myFilterFunction(array, callBack) {
  // function has two parameters "array" and "callback"
  let result = []; // "[]" is empty meaning we can insert data into it
  for (let i = 0; i < array.length; i++) {
    //beginning of for loop
    if (callBack(array[i])) {
      // if statement in for loop
      result.push(array[i]); // callback function is used on every word in array
    }
  }
  return result; // return new array
}

function wordCheck(word) {
  return word.length === 6; // return appropriate word length 
}

let sixLetterWords = myFilterFunction(array, wordCheck); // asign a new variable

console.log(sixLetterWords); // This will log only the words that are six letters long
