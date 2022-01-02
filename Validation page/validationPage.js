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
      enter.placeholder = "Поне една буква,@ и точка!";
    }
    if (passMatch === false) {
      enterPassword.style.borderColor = "red";
      enterPassword.placeholder = "Минимум 3 букви!";
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
      regEmail.placeholder = "Поне една буква,@ и точка!";
    }
    if (fn === false) {
      vPassword.style.borderColor = "red";
      vPassword.placeholder = "Минимум 3 букви!";
    } 
     if (ln === false) {
      validPassword.style.borderColor = "red";
      validPassword.placeholder = "Минимум 3 букви!";
    }
     if (vPassword.value !== validPassword.value) {
      validPassword.style.borderColor = "red";
      validPassword.placeholder = "паролите не са еднакви!";
    }
    regEmail.value='';
    vPassword.value='';
    validPassword.value='';
  }
}
valid();
