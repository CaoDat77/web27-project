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

const menus = [
  {
    id: 1,
    img: "/image_order/dish-1-1.svg",
    title: "Purple Corn Tostada",
    price: 36,
  },

  {
    id: 2,
    img: "/image_order/dish-1-2.svg",
    title: "Bruno's Scribble",
    price: 30,
  },

  {
    id: 3,
    img: "/image_order/dish-1-3.svg",
    title: "Fresh Oysters Dozen",
    price: 59,
  },

  {
    id: 4,
    img: "/image_order/dish-1-4.svg",
    title: "Wild Mushroom Arancini",
    price: 18,
  },

  {
    id: 5,
    img: "/image_order/dish-2-1.svg",
    title: "Ebony Rib Fillet Steak",
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
    title: "Crispy Skin Chicken",
    price: 29,
  },

  {
    id: 8,
    img: "/image_order/dish-2-4.svg",
    title: "Pan Fried Barramundi",
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

 function addCart() {
  const listDish = [];
  const btnAddCart = document.querySelectorAll(".add-cart-btn");
  btnAddCart.forEach(function (button, index) {
    button.addEventListener("click", function (e) {
      const btnItem = e.target;
      const product = btnItem.parentElement.parentElement;
      const productImg = product.querySelector("img").src;
      const productName = product.querySelector(".name-dish").innerText;
      const productPrice = product.querySelector(".price").innerText;

      listDish.push({ productImg, productName, productPrice });
      console.log(listDish);
      const toJson = JSON.stringify(listDish);
      localStorage.setItem("key", toJson);
    });
  });
}
addCart();
