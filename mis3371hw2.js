function myFunction() {
  let x = 
    document.getElementById("ssn").value;
  let text;
  if (isNaN(x) || x < 9 || x > 9) {
    text = "Input not valid"
  }
  else {
    text ="Input valid";
  }
function myFunction() {
  var x = document.getElementById("pass");
  if(x.type === "password") {
    x.type = "text";}
  else {
    x.type = "password";
  }
function myFunction() {
  var x = document.getElementById("ssn");
  if(x.type === "password") {
    x.type = "text";}
  else {
    x.type = "password";
  }
  function checkfirstname() {
   let x = document.getElementById("firstname").value;
    if (x == "") {
      alert("Incorrect input for name");
      return false;
    }
  }
function checkemail() {
  let x = document.getElementById("email").value;
  if (x < 7) {
    alert("Not enough characters");
    return false;
  }
}
function checkaddress() {
  let x = document.getElementById("adress1").value;
  if ( x == "") {
    alert("Please enter in your address");
    return false;}
  else document.getElementById("address_check").innerHTML = "Fits parameters";
}

