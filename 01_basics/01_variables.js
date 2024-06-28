const accountId = 14455 // we can not change const 
let accountEmail = "skraj6334@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState; // result = undefined cuz of humne accountState ko define nahi kia hai !! 

// accountId = 2 // not allowed

accountEmail = "hdfc@gmail.com"
accountPassword = "2523435"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/**
 * 
RESULT =>

14455
┌─────────┬──────────────────┐
│ (index) │ Values           │
├─────────┼──────────────────┤
│ 0       │ 14455            │
│ 1       │ 'hdfc@gmail.com' │
│ 2       │ '2523435'        │
│ 3       │ 'Mumbai'         │
│ 4       │ undefined        │
└─────────┴──────────────────┘

 */