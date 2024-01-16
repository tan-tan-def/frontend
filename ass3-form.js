const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let email = document.querySelector("#email");
let form = document.querySelector("form");
let personalInfo = document.querySelector(".personal-info");
let formResign = document.querySelector(".form");
let red = document.querySelector(".txt_red");

//Hiển thị kết quả đúng
let showSuccess = function () {
  personalInfo.classList.remove("hidden");
  formResign.classList.add("hidden");
};
//Hiển thị kết quả sai
let showError = function () {
  email.classList.add("error");
  red.innerText = "Email không hợp lệ.";
};
//hiển thị khi để trống
let emptyEmail = function () {
  email.classList.add("error");
  red.innerText = "Email không được để trống";
};
//Check Email
let checkEmail = function () {
  if (regex.test(email.value)) {
    showSuccess();
  } else if (email.value == "") {
    emptyEmail();
  } else {
    showError();
  }
};
// In kết quả
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkEmail();
});
