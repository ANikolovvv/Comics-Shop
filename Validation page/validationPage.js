function valid() {
  const enter = document.querySelector("#email");
  const enterPassword = document.querySelector("#pass");
  const enterButton = document.querySelector("#enter");
  const registration = document.querySelector("#registration");

  const pushButton = document.querySelector("#push1");
  const regex = /^.*@.*\..*$/;
  const regexPassword = /^[a-zA-Z0-9]{3,20}$/;

  enterButton.addEventListener("click", validation);

  function validation(e) {
    e.preventDefault();
    const match = regex.test(enter.value);
    const passMatch = regexPassword.test(enterPassword.value);
    if (match === false) {
      enter.style.borderColor = "red";
     
    }
    if (passMatch === false) {
      enterPassword.style.borderColor = "red";
     
    }
    enter.value = "";
    enterPassword.value = "";
  }
  
  registration.addEventListener("click", registrationBlock);
  function registrationBlock(e) {
    e.preventDefault();
    const div = document.querySelector("#regis");
    div.style.display = "block";
  }
  pushButton.addEventListener("click", push);
  function push(e) {
    const firstName = document.querySelector("#fname");
    const lastName = document.querySelector("#lname");
    const regEmail = document.querySelector("#imeill");
    const vPassword = document.querySelector("#passw");
    const validPassword = document.querySelector("#validp");

    const fn = regexPassword.test(vPassword.value);
    const ln = regexPassword.test(validPassword.value);
    const im = regex.test(regEmail.value);
    console.log(fn)
    console.log(ln)

    if (im === false) {
      regEmail.style.borderColor = "red";
     
    }
    if (fn === false) {
      vPassword.style.borderColor = "red";
     
    } 
     if (ln === false) {
      validPassword.style.borderColor = "red";
    
    }
     if (vPassword.value !== validPassword.value) {
      validPassword.style.borderColor = "red";
     
    }
    regEmail.value='';
    vPassword.value='';
    validPassword.value='';
  }
}
valid();
