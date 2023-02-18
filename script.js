function validate() {
    let fname = document.getElementById("first-name");
    let lname = document.getElementById("last-name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
  
    if (fname.value === "" || lname.value === "" || email.value === "" || phone.value === "") {
      alert("Please fill all the fields");
      if (fname.value === "") {
        fname.style.border = "1px solid red";
      } else {
        fname.style.border = "1px solid gray";
      }
      if (lname.value === "") {
        lname.style.border = "1px solid red";
      } else {
        lname.style.border = "1px solid gray";
      }
      if (email.value === "") {
        email.style.border = "1px solid red";
      } else {
        email.style.border = "1px solid gray";
      }
      if (phone.value === "") {
        phone.style.border = "1px solid red";
      } else {
        phone.style.border = "1px solid gray";
      }
      return false;
    } 
    else {
      return true;
    }
  }