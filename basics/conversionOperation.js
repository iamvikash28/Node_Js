let score = "Shyam"

console.log(typeof score)   // 1st approach
console.log(typeof(score))  //2nd approach

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN (not a number)
// true => 1; false => 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "Shyam" => true

let someNumber = 33
let stringNumber =  String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);


// ************************** Operations ***********************

let value = 3
let negValue = -value

// console.log(negValue)    // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //power 
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = "Mohan"

let str3 = str1 + str2
console.log(str3);  // Output - Hello Mohan

console.log("1" + 2);   // 12
console.log(1 + "2");   // 12
console.log("1" + 2 + 2);   // 122
console.log(1 + 2 +"2");    // 32

console.log((3 + 4) * 5 % 3);

console.log(true);  // true
console.log(+true); // 1
console.log(true+); // error
console.log(+"");   // 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;  // ++gameCounter - 101
console.log(gameCounter);   // 101
