function formValidator(){

// Make quick references to our fields

var pass = document.getElementById('pass');

var type = document.getElementById('type');

var email = document.getElementById('email');

// Check each input in the order that it appears in the form!

if(lengthRestrictionP(pass, 8, 12)){

if(madeSelection(type, "Please Choose a type")){

if(emailValidator(email, "Please enter a valid email address")){


return true;

}
}
}

return false;
}






function madeSelection(elem, helperMsg){

if(elem.value == "not")
{
alert(helperMsg);
elem.focus();

return false;
}
else{

return true;
}
}

function lengthRestrictionP(elem, min, max){

var uInput = elem.value;
if(uInput.length >= min && uInput.length <= max)
{
return true;
}
else{
alert("Please enter between " +min+ " and " +max+ " characters For Password");

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