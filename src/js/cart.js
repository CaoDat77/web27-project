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
const signBtn = document.querySelector(".sign-btn");
const signForm = document.querySelector(".form-sign");
const registerForm = document.querySelector(".form-register");
const registerBtn = document.querySelector(".register-btn");
const moldaSignIn = document.querySelector(".molda-account");
const signBtnOpens = document.querySelectorAll(".sign-open");
const btnCloseMoldaTable = document.querySelector(".molda span");

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
});

const formSignIn = document.querySelector(".form-sign-in");
formSignIn.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = document.querySelector("#user-sign-in").value;
  const password = document.querySelector("#password-sign-in").value;

  const user = localStorage.getItem(userName);
  const data = JSON.parse(user);

  if (user === null) {
    alert("vui lòng nhập username và password");
  } else if (userName == data.userName && password == data.password) {
    alert("Đăng nhập thành công");
  }
});

const list = document.querySelector(".list-dish");
const res = localStorage.getItem("key");
const infos = JSON.parse(res);

function renderItem() {
  const html = infos.map((info) => {
    return `
       <div
            class="row justify-content-between align-items-center pd-b-20"
            style="--bs-gutter-x: 0rem"
          >
            <div class="col-xl-3">
              <img src=${info.productImg} alt="" />
            </div>
            <div
              class="col-xl-3 font-20 d-flex justify-content-center font-nor pd-tb-10"
            >
              ${info.productName}
            </div>
            <div class="col-xl-3">
              <div class="d-flex count justify-content-center">
                <button class="font-30">
                  <p class="btn-down" style="margin-bottom: 0">-</p>
                </button>
                <div class=" number-count font-30 text-center">
                  <p class="number" style="margin-bottom: 0">1</p>
                </div>
                <button class="font-30">
                  <p class="btn-up" style="margin-bottom: 0">+</p>
                </button>
              </div>
            </div>
            <div class="col-xl-3">
              <div
                class="d-flex justify-content-between align-items-center flex-colunm"
              >
                <div class=" d-flex font-20 font-nor pd-tb-10">
                  <p style="margin-bottom: 0">Price:</p>
                  <p class="total" style="margin-bottom: 0"> $${info.productPrice}</p>
                </div>
                <div class="btn-delete">
                  <i class="bx bx-x-circle font-50"></i>
                </div>
                
              </div>
            </div>
          </div>
      `;
  });

  const htmls = html.join("");
  list.innerHTML = htmls;
}
renderItem();

function removeCart() {
  const btnDels = document.querySelectorAll(".btn-delete");
  btnDels.forEach((btnDel, index) => {
    btnDel.addEventListener("click", (e) => {
      let dish = e.target;
      let infoDish =
        dish.parentElement.parentElement.parentElement.parentElement;
      console.log(infoDish);
      let listDish = localStorage.getItem("key");
      let data = JSON.parse(listDish);

      if (confirm("Bạn có muốn xóa không ?")) {
        data.splice(infoDish, 1);
      }
      localStorage.setItem("key", JSON.stringify(data));
      console.log(data);
    });
  });
}
removeCart();

function totalMonney() {
  const subTotal = document.querySelector(".Subtotal");
  const total = document.querySelector(".total-monney");
  const subtotol = infos.reduce((total, info) => {
    let result = (total += Number(info.productPrice));
    return result;
  }, 0);
  subTotal.innerHTML = `$${subtotol}`;
  let result = subtotol + 9;
  total.innerHTML = `$${result}`;
}
totalMonney();

function localTion() {
  const PROVINCE_API = "https://provinces.open-api.vn/api/";
  const DISTRICT_API = "https://provinces.open-api.vn/api/p/";
  const WARD_API = "https://provinces.open-api.vn/api/d/";

  const getProvinces = () => fetch(PROVINCE_API).then((res) => res.json());

  const getDistricts = (code) =>
    fetch(DISTRICT_API + code + "?depth=2").then((res) => res.json());

  const getWards = (code) =>
    fetch(WARD_API + code + "?depth=2").then((res) => res.json());

  const createOption = ({ name, code }) => {
    const opt = document.createElement("option");
    opt.text = name;
    opt.value = code;
    return opt;
  };

  const provinceEl = document.getElementById("province");
  const districtEl = document.getElementById("district");
  const wardEl = document.getElementById("ward");

  window.onload = async () => {
    try {
      const provinces = await getProvinces();
      const options = provinces.map(createOption);
      provinceEl.append(...options);
    } catch (err) {
      console.log(err);
    }
  };

  provinceEl.onchange = async (e) => {
    const proviceCode = e.target.value;

    try {
      const districts = await getDistricts(proviceCode);

      const options = districts.districts.map(createOption);
      districtEl.append(...options);
    } catch (err) {
      console.log(err);
    }
  };

  districtEl.onchange = async (e) => {
    const districtCode = e.target.value;

    try {
      const wards = await getWards(districtCode);
      const options = wards.wards.map(createOption);
      wardEl.append(...options);
    } catch (err) {
      console.log(err);
    }
  };
}
localTion();

// function count() {
//   let a = 1;
//   const counts = document.querySelectorAll(".row");
//   counts.forEach((count) => {
//     count.addEventListener("click", (e) => {
//       const item = e.target;
//       console.log(item);
//       const btn = item.parentElement;
//       const number = btn.querySelector(".number");
//       const plus = btn.querySelector(".btn-up");
//       const minus = btn.querySelector(".btn-down");
//       // console.log(number);
//       // console.log(plus);
//       // console.log(minus);

//       // plus.addEventListener("click", function () {
//       //   number.textContent = ++a;
//       //   console.log(a);
//       // });
//     });
//   });
// }
// count();
