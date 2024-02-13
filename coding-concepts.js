// UNIT 1 ASSESSMENT: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: Output was 10
// Off the dome: .length is a property that when used on strings, will return the number of total characters, spaces included, starting at 1
// With internet: Contains the length of the string in UTF-16 code units

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: This isn't an array so I want to say it will be type error?
// b) Verify and explain: Output was "o"
// Off the dome: I must have forgotten that bracket notation can also be used on strings, not just arrays. Bracket notation allows us to look at the value of whatever position (index) in the string starting at 0
// With internet: Bracket notation is the syntax that allows us to access individual characters in a string. To access a character, we use the syntax someString[i] , where i is the index of the character we want to access

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: Output was "Ruby"
// Off the dome: Similarly as before, we are accessing the value at index 1. This time in an array where each value is separated by commas.
// With internet: The bracket syntax is used to access or modify elements of an array. It allows you to access a specific value by specifying its index within the brackets.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: Ok I'm fairly certain this one will throw a type error because .toUpperCase() is a method that only works on strings, not arrays
// b) Verify and explain: Output was TypeError: weekendDays.toUpperCase is not a function
// Off the dome: Woohoo! Yeah so we did get a type error because that method isn't meant to be executed on an array. We would have to iterate through that array to make the characters upper case.
// With Internet: The toUpperCase() method of String values returns the string converted to uppercase. This method does not affect the value of the string itself since JavaScript strings are immutable (unable to be changed)

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: "number"
// b) Verify and explain: Output was "number"
// Off the dome: We know that .length will always return a number. We also know that typeof will return a string whose value is one of the primitive data types. Whatever data type follows the method will be in the string
// With Internet: The typeof operator returns a string indicating the type of the operand's value