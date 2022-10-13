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

function renderItem() {
  const list = document.querySelector(".list-dish");
  const res = localStorage.getItem("key");
  const infos = JSON.parse(res);
  const html = infos.map((info) => {
    return `
       <div
            class="row justify-content-between align-items-center"
            style="--bs-gutter-x: 0rem"
          >
            <div class="col-xl-3">
              <img src=${info.productImg} alt="" />
            </div>
            <div
              class="col-xl-3 font-20 d-flex justify-content-center pd-tb-10"
            >
              ${info.productName}
            </div>
            <div class="col-xl-3">
              <div class="d-flex count justify-content-center">
                <button class="font-30">
                  <p style="margin-bottom: 0">-</p>
                </button>
                <div class="number-count font-30 text-center">
                  <p style="margin-bottom: 0">1</p>
                </div>
                <button class="font-30">
                  <p style="margin-bottom: 0">+</p>
                </button>
              </div>
            </div>
            <div class="col-xl-3">
              <div
                class="d-flex justify-content-between align-items-center flex-colunm"
              >
                <div class="total d-flex font-20 pd-tb-10">
                  <p style="margin-bottom: 0">Total:</p>
                  <p style="margin-bottom: 0">$ ${info.producPrice}</p>
                </div>
                <i class="bx bx-x-circle font-50"></i>
              </div>
            </div>
          </div>
 
      `;
  });
  const htmls = html.join("");
  list.innerHTML = htmls;
}

// function countUp() {
//   let a = 1;
//   const btnUp = document.querySelector(".plus");
//   const btnDown = document.querySelector(".minus");
//   const numberCount = document.querySelector(".count-number");

//   btnUp.addEventListener("click", () => {
//     numberCount.innerHTML = ++a;
//     console.log(a);
//   });

//   btnDown.addEventListener("click", () => {
//     console.log(a);
//     if (a > 1) {
//       numberCount.innerHTML = --a;
//     } else {
//       return false;
//     }
//   });
// }
// countUp();

// <div class="item-dish d-flex align-items-center justify-content-between flex-colunm">
//     <img src=${productImg} alt="" />
//     <p class="font-20">${productName}</p>
// <div class="count d-flex">
//     <div
//       class="minus font-50 font-w d-flex align-items-center justify-content-center"
//     >
//       <button>-</button>
//     </div>
//     <div
//        class="color-black font-30 count-number d-flex justify-content-center align-items-center"
//     >
//        1
//     </div>
//    <div
//     class="plus font-30 font-w d-flex align-items-center justify-content-center"
//     >
//       <button>+</button>
//     </div>
//  </div>
// <div class="total font-20">total:${productPrice}</div>
//       <i class="font-50 bx bx-x-circle"></i>
// </div> ;
