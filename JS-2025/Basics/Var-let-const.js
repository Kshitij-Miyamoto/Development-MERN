console.log("Kshitij Sharma");
const AccountId = 9540 ; // once declared can't be declared again //
var accountpassword = "4534";
let EmailID = "kshitij.miyamoto@gmail.com"; // Can't be redeclared 
var accountpassword = "44"; // can be redeclared
let warcry = "Never out of the fight"; 
console.log(accountpassword);
console.log(EmailID);
console.log(warcry);

console.table([accountpassword , EmailID, accountpassword, warcry]);
//Var was basically not used because of the scope problems, which led to the inception of let variables, which keep in mind the scope
// Hence we won't use var due to block scope
