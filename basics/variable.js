const accountId = 141444
let accountEmail = "vermavikash@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"

// accountId = 2 // not allowed


//Table
accountEmail = "vikash@gmail.com"
accountPassword = "12312"
accountCity = "Noida"

console.log(accountId);

/*Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);

