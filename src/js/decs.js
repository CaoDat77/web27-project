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
  const userName = document.querySelector("#user-sign-up").value;
  const password = document.querySelector("#password-sign-up").value;
  const email = document.querySelector("#email-sign-up").value;
  const cfpassword = document.querySelector("#cfpassword-sign-up").value;
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
  alert("Đăng kí thành công");
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
    alert("Đăng nhập thành công");
    moldaSignIn.style.display = "none";
  }
});

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
                    <div class="count d-flex align-items-center">
                      <div class="minus font-50 font-w d-flex align-items-center justify-content-center">
                        <button>-</button>
                      </div>
                      <div class="color-black font-30 font-nor count-number d-flex justify-content-center align-items-center">
                        1
                      </div>
                      <div class="plus font-30 font-w d-flex align-items-center justify-content-center">
                        <button>+</button>
                      </div>
                      <button class="set-btn mg-l-20">Add To Cart</button>
                      <a href="cart.html">
                        <button class="set-btn mg-l-20 none">
                          <i class="bx bx-cart cart"></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mg-t-80 pd-lr-20">
              <h2 class="font-nor font-20 pimary-color line-primary">Description</h2>
              <p class="font-nor font-16 mg-t-20">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
                nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                Integer tincidunt.
              </p>

              <p class="font-nor font-16 mg-t-20">
                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              </p>
          </div>
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
