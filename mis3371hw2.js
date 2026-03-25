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
