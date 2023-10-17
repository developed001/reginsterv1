let login = document.register.login;
let password = document.register.password;
let id = document.register.id;
let submitBtn = document.querySelector(".btn__submit");

let divTrue = document.querySelector(".true");
let divFalse = document.querySelector(".false");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (login.value == "admin" && password.value == "123" && id.value == "5") {
    divFalse.style = "display: none;"
    divTrue.style = "display: flex;";
  } else if (login.value == "" && password.value == "" && id.value == "") {

  } else {
    divTrue.style = "display: none;"
    divFalse.style = "display: flex;";
    login.style = "border: 2px solid red";
    password.style = "border: 2px solid red";
    id.style = "border: 2px solid red";
  }
});
