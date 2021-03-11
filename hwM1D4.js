/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = (b, h) => b * h

// console.log(area(40, 20))

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = (num1, num2) => {
    let sum = num1 === num2 ? (num1 + num2) * 3 : num1 + num2
    return sum
}

// console.log(crazySum(3, 3))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = (num) => {
    let x = Math.abs(num) - 19
    return Math.abs(num > 19 ? x * 3 : x) 
} 

// console.log(crazyDiff(-16))

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = (n) => (n >= 20 && n <= 100) || n === 400 ? true : false

// console.log(boundary(400))


/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = (string) =>  {
    return string.startsWith('Strive') ? string : 'Strive ' + string
}

// console.log(strivify('Strive Hello'))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = (num) => num % 3 === 0 || num % 7 === 0 ? true : false

// console.log(check3and7(24))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = (string) => {
    return string.split("").reverse().join("")
}

// console.log(reverseString("Peperone"))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = (string) => {
    const arrWords = string.split(" ")    
    return arrWords.map( word => word[0].toUpperCase() + word.slice(1)).join(" ")  
}

// console.log(upperFirst("sono andato al supermercato"))

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = (string) => string.slice(1, string.length - 1)

// console.log(cutString("zarro"))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = (n) => {
    let x = 0
    const arr = []
    while ( x < n ) {
        arr.push(Math.floor(Math.random()*10))
        x++
    }
    return arr
}

// console.log(giveMeRandom(8))

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/