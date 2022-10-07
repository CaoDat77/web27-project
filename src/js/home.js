import "../css/home.css";
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
const accountNav = document.querySelector(".account-nav");
const listAcc = document.querySelector(".accounts");

function showMolda() {
  molda.style.display = "block";
}

function closeMolda() {
  molda.style.display = "none";
}

btnForms.forEach((btn) => {
  btn.addEventListener("click", showMolda);
});

btnClose.addEventListener("click", closeMolda);

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

accountNav.addEventListener("click", () => {
  listAcc.classList.toggle("d-toggle");
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
