import "../css/decs.css";
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

const res = localStorage.getItem("decs");
const dishs = JSON.parse(res);
console.log(dishs);
const product = document.querySelector(".product");
function renderDish() {
  let html = dishs.map((dish) => {
    return `
            <div
              class="row align-items-center product"
              style="--bs-gutter-x: 0rem"
            >
              <div class="col-xl-4">
                <div class="pd-lr-20">
                  <div class="overflow-hidden border-item">
                    <img src="${dish.itemImg}" alt="" />
                  </div>
                </div>
              </div>

              <div class="col-xl-8">
                <div class="name-dish pd-lr-20">
                  <p class="font-24 font-content">${dish.itemName}</p>
                  <div class="rate">
                    <img src="/image_order/Star 1.svg" alt="" />
                    <img src="/image_order/Star 1.svg" alt="" />
                    <img src="/image_order/Star 1.svg" alt="" />
                    <img src="/image_order/Star 1.svg" alt="" />
                  </div>
                  <p class="font-20 font-nor mg-t-20 font-w">
                    Price : $${dish.itemPrice}
                  </p>
                  <p class="font-20 font-nor">
                    Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas
                    sit odit aut fugit, sed quia consequuntur. Lorem ipsum nonum
                    eirmod dolor.
                  </p>
                  <p class="font-20 font-nor">
                    Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt
                    labore et dolore magna aliquyam.erat, sed diam voluptua. At
                    vero accusam et justo duo dolores et ea rebum
                  </p>
                  <div class="mg-t-20">
                    <div class="count d-flex">
                      <div class="minus font-50 font-w d-flex align-items-center justify-content-center">
                        <button>-</button>
                      </div>
                      <div class="color-black font-30 count-number d-flex justify-content-center align-items-center">
                        1
                      </div>
                      <div class="plus font-30 font-w d-flex align-items-center justify-content-center">
                        <button>+</button>
                      </div>
                      <button class="set-btn mg-l-20">Add To Cart</button>
                      <a href="cart.html">
                        <button class="set-btn mg-l-20">
                          <i class="bx bx-cart cart"></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>;
   `;
  });
  let htmls = html.join("");
  product.innerHTML = htmls;
}
renderDish();

function countUp() {
  let a = 1;
  const btnUp = document.querySelector(".plus");
  const btnDown = document.querySelector(".minus");
  const numberCount = document.querySelector(".count-number");

  btnUp.addEventListener("click", function () {
    numberCount.innerHTML = ++a;
  });

  btnDown.addEventListener("click", function () {
    if (a > 1) {
      numberCount.innerHTML = --a;
    } else {
      return false;
    }
  });
}
countUp();
