const accountId = 144553
let accountEmail = "himesh@google.com"
var accountPassword ="12345"
accountCity="jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hy@hy.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/