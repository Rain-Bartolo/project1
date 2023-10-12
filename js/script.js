//this is one of the scripts of all time
//responsive nav?
function validateForm() {
    let x = document.forms["signupForm"]["firstName"].value;
    let y = document.forms["signupForm"]["lastName"].value;
    let z = document.forms["signupForm"]["email"].value;
    if (x == "" || y==""|| z=="") {
      alert("All fields must be filled out!");
      return false;
    }
  } 