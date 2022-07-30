import { getData } from "../../services/getData.js";

const createProductsStar = async () => {
  const starProductsDOM = document.querySelector("[data-starWars]");

  const productos = await getData();

  productos.forEach((product) => {
    if (product.category === "star-wars") {
      let div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = ` 
        <img src="${product.img}" alt="">
        <h4 class="tittle">${product.name}</h4>
        <div class="price">$ ${product.price}</div>
        <a href="">Ver producto</a>
    
        `;
      starProductsDOM.appendChild(div);
    }
  });
};

const createProductsConsole = async () => {
  const consoleProductsDOM = document.querySelector("[data-console]");

  const productos = await getData();

  productos.forEach((product) => {
    if (product.category === "console") {
      let div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = ` 
        <img src="${product.img}" alt="">
        <h4 class="tittle">${product.name}</h4>
        <div class="price">$ ${product.price}</div>
        <a href="">Ver producto</a>
    
        `;
      consoleProductsDOM.appendChild(div);
    }
  });
};

const createProductsDiversos = async () => {
  const diversosProductsDOM = document.querySelector("[data-diversos]");

  const productos = await getData();

  productos.forEach((product) => {
    if (product.category === "diversos") {
      let div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = ` 
        <img src="${product.img}" alt="">
        <h4 class="tittle">${product.name}</h4>
        <div class="price">$ ${product.price}</div>
        <a href="">Ver producto</a>
    
        `;
      diversosProductsDOM.appendChild(div);
    }
  });
};

const logUser = () => {
  const logDOm = document.querySelector("[data-login-true-false]");
  const divDom = document.querySelectorAll(".ver-todo-btn");

  if (localStorage.getItem(`validation`)) {
    logDOm.classList.add("removeLogin");
    divDom.forEach((item) => {
      item.addEventListener("click", () => {
        location.href = "./assets/pages/all-products.html";
      });
    });
  } else {
    console.log("false");
    divDom.forEach((item) => {
      item.addEventListener("click", () => {
        location.href = "./assets/pages/login.html";
      });
    });
  }
};

createProductsStar();
createProductsConsole();
createProductsDiversos();
logUser();
