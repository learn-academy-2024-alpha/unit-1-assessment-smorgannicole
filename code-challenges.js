// UNIT 1 ASSESSMENT: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and evaluates which of the strings has more characters. Use the test variables provided.

const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// input: two strings
// output: one string containing the most chars
// logic:
// create function
// .length property to determine length of each string
// use conditional if statement to evaluate which string is longer

const longestStr = (str1, str2) => {
    // validate and return early
    if (typeof str1 !== "string" || typeof str2 !== "string") {
        return;
    }
    // .length returns the number of total characters in strings including spaces and will start at 1
    let str1Length = str1.length;
    let str2Length = str2.length;
    // conditional statement. if one string is not longer than the other, they must be equal in length
    if (str1Length > str2Length) {
        return str1;
    } else if (str2Length > str1Length) {
        return str2;
    } else {
        return `${str1} and ${str2} have the same amount of characters`;
    }
}
console.log(longestStr(fruit1, fruit2)); // output: banana

// Explain your code:
// If two strings are inputed, this function will return the longer of the two strings. If any other data type is inputed, this function will return immediately.

// After having just completed this example I've realized we weren't meant to do it again (sorry if you said this) 🙃

// --------------------1) Create a function that takes in an array of numbers and returns the sum of all the numbers. Use the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// Expected output: 15
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 17

// input: array of nums
// output: a single number equalling the sum of numbers in the array
// logic:
// accumulator variable to hold the summation
// .map() HOF to iterate through arr
// return accumulator, not map

const accumulator = (arrOfNum) => {
    // validate and return early (always found it odd that typeof classifies arrays as objects)
    if (typeof arrOfNum !== "object") {
        return;
    }
    // value to hold accumulating sum. Must equal 0 to return an accurate summation
    let accumulator = 0;
    // return of anonymous fxn is implicit since one line
    // += to add current iterated num while also resetting the value of the accumulator
    arrOfNum.map(num => accumulator += num);
    return accumulator;
}
console.log(accumulator(padres1984WorldSeriesRuns)); // output: 15

// Explain your code: 
// This function accepts an array and will return the sum of all the numbers in the array. If any other data type than an array is passed, the function will return immediately.

// --------------------2) Create a function that takes in a string and returns the string with all the characters in reversed order. Use the test variable provided below.

const lesMiserables = "Jean Valjean"
// Expected output: "naejlaV naeJ"
const lionKing = "Simba"
// Expected output: "abmiS"

// input: a single string
// output: a single string reversed
// logic: 
// .split() method to turn string to arr
// .reverse() method to reverse order of array
// .join() method to turn reversed arr to string

const reverseIt = (str) => {
    // validate and return early
    if (typeof str !== "string") {
        return;
    }
    // tried to run .reverse() on string first. Internet reminded me it can only be used on arr
    let strToArr = str.split("");
    let reverseArr = strToArr.reverse();
    let reversedStr = reverseArr.join("");
    return reversedStr;
}
console.log(reverseIt(lesMiserables)); // output: naejlaV naeJ

// Explain your code:
// This function, when passed a string, will output the string with the characters reversed. If fed any other data type, it will return immediately.

// --------------------3) Create a function that takes in an array and returns an array with only the items from the third, fourth, and fifth indexes. Use the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: [42, 5, -5]
const cohortList = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
// Expected output: ["Delta", "Echo", "Foxtrot"]

// input: a single array
// output: an array with only items from the 3rd, 4th, and 5th indexes
// logic: 
// variable to hold arr of desired indexes
// .filter() HOF because of its conditonal quality and we know we want a smaller, modified arr

const thirdFourthFifth = (arr) => {
    // V&RE
    if (typeof arr !== "object") {
        return;
    }
    // reminded me of aeiou problem we did
    let indexes345 = [ 3, 4, 5];
    // .filter() will iterate through arr 
    // placeholder for value since only needed index
    // each iteration the function is checking to see if the array I made includes the current index. Will return T/F
    // returning values back to the array only if condition is met
    return arr.filter((_, i) => indexes345.includes(i));
}
console.log(thirdFourthFifth(cohortList)); // output: [ 'Delta', 'Echo', 'Foxtrot' ]

// Explain your code:
// The function will recieve an array and return an array with only items from the third, fourth, and fifth indexes. If any other data type is passed, the function will return.
