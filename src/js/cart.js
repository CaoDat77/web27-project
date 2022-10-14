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

const list = document.querySelector(".list-dish");
const res = localStorage.getItem("key");
const infos = JSON.parse(res);

function renderItem() {
  removeCart();
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
              class="col-xl-3 font-20 d-flex justify-content-center pd-tb-10"
            >
              ${info.productName}
            </div>
            <div class="col-xl-3">
              <div class="d-flex count justify-content-center">
                <button class="font-30 btn-down">
                  <p style="margin-bottom: 0">-</p>
                </button>
                <div class=" number-count font-30 text-center">
                  <p class="number" style="margin-bottom: 0">1</p>
                </div>
                <button class="font-30 btn-up">
                  <p style="margin-bottom: 0">+</p>
                </button>
              </div>
            </div>
            <div class="col-xl-3">
              <div
                class="d-flex justify-content-between align-items-center flex-colunm"
              >
                <div class=" d-flex font-20 pd-tb-10">
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
function countUp() {
  let a = 1;
  const btnUp = document.querySelector(".btn-up");
  const btnDown = document.querySelector(".btn-down");
  const numberCount = document.querySelector(".number");

  btnUp.addEventListener("click", () => {
    console.log(a);
    numberCount.innerHTML = ++a;
  });

  btnDown.addEventListener("click", () => {
    if (a > 1) {
      numberCount.innerHTML = --a;
    } else {
      return false;
    }
  });
}

function countUpCart() {
  const counts = document.querySelectorAll(".count");
  counts.forEach((count) => {
    count.addEventListener("click", function (e) {
      let a = 1;
      const btnCount = e.target;
      const product = btnCount.parentElement.parentElement;
      const btnUp = product
        .querySelector(".btn-up")
        .addEventListener("click", countUp);
      const numberCount = product.querySelector(".number");
      const btnDown = product.querySelector(".btn-down");

      function countUp() {
        numberCount.innerHTML = ++a;
      }
    });
  });
}
countUpCart();

function removeCart() {
  const btnDels = document.querySelectorAll(".btn-delete");
  btnDels.forEach((btnDel, index) => {
    btnDel.addEventListener("click", (e) => {
      let dish = e.target;
      let infoDish =
        dish.parentElement.parentElement.parentElement.parentElement;
      infoDish.remove();
      console.log(infoDish);
      let listDish = localStorage.getItem("key");
      let data = JSON.parse(listDish);
      console.log(index);
      data.splice(infoDish);
      localStorage.setItem("key", JSON.stringify(data));
      console.log(data);
    });
  });
}
removeCart();

function totalMonney() {
  const subTotal = document.querySelector(".Subtotal");
  const totol = infos.reduce((total, info) => {
    let result = (total += Number(info.productPrice));
    return result;
  }, 0);
  subTotal.innerHTML = `$${totol}`;
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
