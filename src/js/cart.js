import "../css/cart.css";
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

/* <div class="item-dish d-flex align-items-center justify-content-between flex-colunm">
  <img src="/image_order/dish-1-1.svg" alt="" />
  <p class="font-20">Purple Corn Tostada</p>
  <div class="count d-flex">
    <div class="minus font-30 font-w d-flex align-items-center justify-content-center">
      <p style="margin: 0">a</p>
    </div>
    <div class="count-number d-flex justify-content-center align-items-center">
      <p class="color-black font-24" style="margin: 0">
        1
      </p>
    </div>
    <div class="plus font-30 font-w d-flex align-items-center justify-content-center">
      <p class="color-black" style="margin: 0">
        +
      </p>
    </div>
  </div>
  <div class="total font-20">total:$29</div>
  <i class="font-50 bx bx-x-circle"></i>
</div>; */

const list = document.querySelector(".list-dish");
function renderItem() {
  const haha = localStorage.getItem("dish");
  const hihi = JSON.parse(haha);
  let productName = hihi.productName;

  console.log(productName);

  let html = () => {
    return `
       <div class="item-dish d-flex align-items-center justify-content-between flex-colunm">
  <img src=${productImage} alt="" />
  <p class="font-20">${productName}</p>
  <div class="count d-flex">
    <div class="minus font-30 font-w d-flex align-items-center justify-content-center">
      <p style="margin: 0">a</p>
    </div>
    <div class="count-number d-flex justify-content-center align-items-center">
      <p class="color-black font-24" style="margin: 0">
        1
      </p>
    </div>
    <div class="plus font-30 font-w d-flex align-items-center justify-content-center">
      <p class="color-black" style="margin: 0">
        +
      </p>
    </div>
  </div>
  <div class="total font-20">total:$${hihi.productPrice}</div>
  <i class="font-50 bx bx-x-circle"></i>
</div>; 
    `;
  };

  list.innerHTML = html;
}

renderItem();
