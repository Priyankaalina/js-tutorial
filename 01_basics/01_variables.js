const accountId = 123456;
let accountEmail = "a@gmail.com";
var  accountPassword = "1324";
accountCity = "almora";
let accountState;


/*
Prefer not to use var 
because of issue with block scope and functional scope

*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);