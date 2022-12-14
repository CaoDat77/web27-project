import "../css/order.css";
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
  }
});

const menus = [
  {
    id: 1,
    img: "/image_order/dish-1-1.svg",
    title: "Purple Tostada",
    price: 36,
    decs: " Tostada is used exclusively as a breakfast or lunch and dinner gift, not eaten with other dishes.",
    decs2:
      " The broth of Tostada is made from the broth of beef bones: lump bone, tubular bone and clavicle.",
    decsAll:
      "The process of making broth, also known as broth, is the most important step. The broth of traditional pho is made from beef bones along with some spices. The bones must be washed, scraped off all the meat clinging to the bones and put in a pot with cold water. The first time the bone broth must be poured out so that the broth does not get contaminated with the bad smell of the beef bones, the next time it is used to make the broth. Roasted ginger and onion are also added.",
  },

  {
    id: 2,
    img: "/image_order/dish-1-2.svg",
    title: "Bruno's Scribble",
    price: 30,
    decs: "",
    decs2: "",
    decsAll: "",
  },

  {
    id: 3,
    img: "/image_order/dish-1-3.svg",
    title: "Fresh Oysters ",
    price: 59,
  },

  {
    id: 4,
    img: "/image_order/dish-1-4.svg",
    title: "Wild Mushroom ",
    price: 18,
  },

  {
    id: 5,
    img: "/image_order/dish-2-1.svg",
    title: "Ebony Fillet Steak",
    price: 58,
  },

  {
    id: 6,
    img: "/image_order/dish-2-2.svg",
    title: "Flank Steak",
    price: 30,
  },

  {
    id: 7,
    img: "/image_order/dish-2-3.svg",
    title: "Crispy Chicken",
    price: 29,
  },

  {
    id: 8,
    img: "/image_order/dish-2-4.svg",
    title: "Pan  Barramundi",
    price: 38,
  },

  {
    id: 9,
    img: "/image_order/dish-3-1.svg",
    title: "Beer Battered Fish",
    price: 42,
  },

  {
    id: 10,
    img: "/image_order/dish-3-2.svg",
    title: "Blue Eyed Cod",
    price: 18,
  },

  {
    id: 11,
    img: "/image_order/dish-3-3.svg",
    title: "Blueberry Beef",
    price: 25,
  },

  {
    id: 12,
    img: "/image_order/dish-3-4.svg",
    title: "Peach Salad",
    price: 15,
  },

  {
    id: 13,
    img: "/image_order/dish-4-1.svg",
    title: "Prickly Pear Tonic",
    price: 12,
  },

  {
    id: 14,
    img: "/image_order/dish-4-2.svg",
    title: "Chicha Morada",
    price: 12,
  },

  {
    id: 15,
    img: "/image_order/dish-4-3.svg",
    title: "Better Boy",
    price: 16,
  },

  {
    id: 16,
    img: "/image_order/dish-4-4.svg",
    title: "Tommy's Margarita",
    price: 10,
  },
];

let currentPage = 1;
let perPage = 8;
let totalPage = 0;
let perDish = [];

async function getDish() {
  perDish = menus.slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  );
  renderPageNumber();
  renderDish();
}
getDish();
// render ra s???n ph???m
function renderDish() {
  let html = perDish.map((value) => {
    return `
      <div class="col-xl-3 col-6" id=${value.id}>
            <div class="pd-x-30">
              <div class="pointer overflow-hidden position-relative dish-item">
                 <div class ="click-decs"> 
                   <img src=${value.img} alt="" />
                 </div>                                                    
                <button class="add-cart-btn font-nor">ADD TO CART</button>
                
              </div>
              <div class="font-16 font-nor mg-t-10">
                <div class="name-dish">${value.title}</div>
                <div class="d-flex">
                  <div class="unit">$</div>
                  <div class="price">${value.price}</div>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <button class="add-cart-mobile-btn font-14 pimary-color font-nor">
                  Add To Cart
                </button>
              </div>
              </div>
            </div>
          </div>
          
    `;
  });
  let htmls = html.join("");
  const list = (document.querySelector(".list-dish").innerHTML = htmls);
  clickDecs();
  addCart();
}
renderDish();

function renderPageNumber() {
  totalPage = menus.length / perPage;
  for (let i = 1; i <= totalPage; i++) {
    document.querySelector(
      ".number-page"
    ).innerHTML += `<p class="btn${i} font-nor">${i}</p>`;
  }
}
//-------------------------------------------------
//Ch???c n??ng click tao ra trang chi ti???t s???n ph???m
function clickDecs() {
  const clicks = document.querySelectorAll(".click-decs");
  clicks.forEach((click) => {
    click.addEventListener("click", (e) => {
      location.href = "decs.html";
      let dish = [];
      let product = e.target;
      let item = product.parentElement.parentElement.parentElement;
      let itemName = item.querySelector(".name-dish").innerText;
      let itemPrice = item.querySelector(".price").innerText;
      let itemImg = item.querySelector("img").src;
      dish.push({ itemName, itemPrice, itemImg });
      const toJson = JSON.stringify(dish);
      localStorage.setItem("decs", toJson);
      console.log(dish);
    });
  });
}
clickDecs();

//---------------------------------------------
// Ch???c n??ng chuy???n trang
const page1 = document.querySelector(".btn1");
const page2 = document.querySelector(".btn2");

page1.addEventListener("click", function () {
  currentPage = 1;
  if (currentPage == 1) {
    page1.classList.add("active");
    page2.classList.remove("active");
  }
  console.log(currentPage);
  perDish = menus.slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  );
  renderDish();
});

page2.addEventListener("click", function () {
  currentPage = 2;
  if (currentPage == 2) {
    page1.classList.remove("active");
    page2.classList.add("active");
  }
  console.log(currentPage);
  perDish = menus.slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  );
  renderDish();
});

const listDish = [];
function addCart() {
  const btnAddCart = document.querySelectorAll(".add-cart-btn");
  btnAddCart.forEach(function (button, index) {
    button.addEventListener("click", function (e) {
      const btnItem = e.target;
      const product = btnItem.parentElement.parentElement;
      const productImg = product.querySelector("img").src;
      const productName = product.querySelector(".name-dish").innerText;
      const productPrice = product.querySelector(".price").innerText;
      const item = {
        productImg,
        productName,
        productPrice,
        quantily: 1,
      };
      listDish.push(item);
      console.log(listDish);
      const toJson = JSON.stringify(listDish);
      localStorage.setItem("key", toJson);
      alert("???? th??m v??o gi??? h??ng");
    });
  });

  const btnAddCartMobile = document.querySelectorAll(".add-cart-mobile-btn");
  btnAddCartMobile.forEach(function (button, index) {
    button.addEventListener("click", function (e) {
      const btnItem = e.target;
      const product = btnItem.parentElement.parentElement;
      const productImg = product.querySelector("img").src;
      const productName = product.querySelector(".name-dish").innerText;
      const productPrice = product.querySelector(".price").innerText;
      const item = {
        productImg,
        productName,
        productPrice,
        quantily: 1,
      };
      listDish.push(item);
      console.log(listDish);
      const toJson = JSON.stringify(listDish);
      localStorage.setItem("key", toJson);
      alert("???? th??m v??o gi??? h??ng");
    });
  });
}
