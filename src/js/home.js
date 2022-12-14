import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";

const btnForms = document.querySelectorAll(".btn-form");
const molda = document.querySelector(".molda");
const btnClose = document.querySelector(".close-btn");
const btnMoldaMoblie = document.querySelector(".open-nav");
const moldaMobile = document.querySelector(".molda-mobile");
const closeNavMobile = document.querySelector(".close-btn-mobile");
const listNavMobile = document.querySelector(".list-nav-mobile");
const btnNavForm = document.querySelector(".table-online");
const aboutBtn = document.querySelector(".introduce-nav");
const navAbout = document.querySelector(".abouts-nav");
const listAcc = document.querySelector(".accounts");
const signBtn = document.querySelector(".sign-btn");
const signForm = document.querySelector(".form-sign");
const registerForm = document.querySelector(".form-register");
const registerBtn = document.querySelector(".register-btn");
const moldaSignIn = document.querySelector(".molda-account");
const signBtnOpens = document.querySelectorAll(".sign-open");
const btnCloseMoldaTable = document.querySelector(".molda span");
const small = document.querySelector(".form-sign-in small");

signBtnOpens.forEach((signBtnOpen) => {
  signBtnOpen.addEventListener("click", function () {
    moldaSignIn.style.display = "block";
  });
});

registerBtn.addEventListener("click", function () {
  registerForm.style.display = "block";
  signForm.style.display = "none";
});

signBtn.addEventListener("click", function () {
  signForm.style.display = "block";
  registerForm.style.display = "none";
});

btnCloseMoldaTable.addEventListener("click", closeMolda);

function showMolda() {
  molda.style.display = "block";
}

function closeMolda() {
  molda.style.display = "none";
}

btnForms.forEach((btn) => {
  btn.addEventListener("click", showMolda);
});

btnClose.addEventListener("click", function () {
  molda.style.display = "none";
});

btnClose.addEventListener("click", function () {
  document.querySelector(".molda-account").style.display = "none";
});
btnMoldaMoblie.addEventListener("click", function () {
  moldaMobile.style.display = "block";
});

closeNavMobile.addEventListener("click", function () {
  moldaMobile.style.display = "none";
});

btnNavForm.addEventListener("click", showMolda);

aboutBtn.addEventListener("click", function () {
  navAbout.classList.toggle("d-toggle");
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.querySelector("nav").classList.add("bg-blacks");
    document.querySelector("nav").style.marginTop = "0";
  } else {
    document.querySelector("nav").classList.remove("bg-blacks");
    document.querySelector("nav").style.marginTop = "5rem";
  }
}

const formSignUp = document.querySelector(".form-sign-up");
formSignUp.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = document.querySelector("#user-sign-up").value.trim();
  const password = document.querySelector("#password-sign-up").value.trim();
  const email = document.querySelector("#email-sign-up").value.trim();
  const cfpassword = document.querySelector("#cfpassword-sign-up").value.trim();
  const textInput = document.querySelectorAll(".text-input");

  console.log(userName);

  const user = {
    userName: userName,
    password: password,
    email: email,
    cfpassword: cfpassword,
  };

  const json = JSON.stringify(user);
  localStorage.setItem(userName, json);
  alert("????ng k?? th??nh c??ng");
  registerForm.style.display = "none";
  signForm.style.display = "block";
});

const formSignIn = document.querySelector(".form-sign-in");
formSignIn.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = document.querySelector("#user-sign-in").value;
  const password = document.querySelector("#password-sign-in").value;

  const user = localStorage.getItem(userName);
  const data = JSON.parse(user);

  if (user === null) {
    small.innerHTML = "Wrong Username Or Password";
  } else if (userName == data.userName && password == data.password) {
    alert("????ng nh???p th??nh c??ng");
    moldaSignIn.style.display = "none";
    signBtnOpens.forEach(function (signBtnOpen) {
      signBtnOpen.classList.add("pimary-color");
    });
  }
});
