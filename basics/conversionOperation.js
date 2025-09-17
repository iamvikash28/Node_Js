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
