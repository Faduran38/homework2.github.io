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
