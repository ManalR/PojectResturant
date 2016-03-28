
function formValidator(){

// Make quick references to our fields

var name= document.getElementById('name');
var pass = document.getElementById('pass');
var email = document.getElementById('email');
var phone = document.getElementById('phone');

// Check each input in the order that it appears in the form!



if(isAlphabet(name, "Please enter only letters for your name")){

if(lengthRestrictionP(pass, 8, 12)){

if(emailValidator(email, "Please enter a valid email address")){

if(isNumeric(phone, "Please enter only numbers for your phone")){

if(lengthRestriction(phone, 10)){
return true;
}
}
}
}
}
return false;
}






function formValidator2(){

// Make quick references to our fields

var name= document.getElementById('name');
var username= document.getElementById('username');

var pass = document.getElementById('pass');

var email = document.getElementById('email');

var phone = document.getElementById('phone');

// Check each input in the order that it appears in the form!



if(isAlphabet(name, "Please enter only letters for your name")){

if(validateUsername(username)){

if(lengthRestrictionP(pass, 8, 12)){

if(emailValidator(email, "Please enter a valid email address")){

if(isNumeric(phone, "Please enter only numbers for your phone")){

if(lengthRestriction(phone, 10)){

return true;
}
}
}
}

}
}
return false;
}


function isAlphabet(elem, helperMsg){

var alphaExp = /^[a-zA-Z]+$/;
if(elem.value.match(alphaExp)){
return true;
}else{
alert(helperMsg);
elem.focus();
return false;
}
}

function validateUsername(fld) {
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores
 
    if (fld.value == "") {
        error = "You didn't enter a username.\n";
        alert(error);
        return false;
 
    } else if ((fld.value.length < 32) || (fld.value.length > 4)) {

        error = " Please enter letters between 4 and 32 for your Username\n";
    alert(error);
    return false;
 
    } else if (illegalChars.test(fld.value)) {
        
        error = "Please enter just letters or numbers for your Username.\n";
    alert(error);
    return false;
 
    } else 
    return true;
}





function lengthRestrictionP(elem, min, max){

var uInput = elem.value;
if(uInput.length >= min && uInput.length <= max)
{
return true;
}
else{
alert("Please enter between " +min+ " and " +max+ " letters or numbers For Password");

elem.focus();

return false;
}
}



function emailValidator(elem, helperMsg){
var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
if(elem.value.match(emailExp)){
return true;
}else{
alert(helperMsg);
elem.focus();
return false;
}
}




function lengthRestriction(elem, max){
var uInput = elem.value;
if(uInput.length == max){
return true;
}else{
alert("Your phone must be 10 numbers");
elem.focus();
return false;
}
}