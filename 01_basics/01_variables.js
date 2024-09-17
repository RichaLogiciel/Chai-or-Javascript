const accountId = 1234567890
let accountEmail = "richa@gmail.com" 
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState;

// accountId = 2 chnage is const keyword is not allowed 
accountEmail = "richabisht@gmail.com"
accountPassword = "212121"
accountCity =  "Bengluru"

console.log(accountId);

//print more then one variable use table 
console.table([ accountId,accountEmail,accountCity, accountPassword, accountState])

/* 
Prefer not to use block scope 
becase of issue in block scope and functional scope 
*/

// if variable is declared and value is not assigned the => undefined



