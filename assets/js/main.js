import { getData } from "../../services/getData.js";

export const createProductsStar = async () => {
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
        <a id ="boton${product.id}"  href="#">Ver producto </a>
    
        `;
      starProductsDOM.appendChild(div);
      const btnSingleProduct = document.getElementById(`boton${product.id}`);
      btnSingleProduct.addEventListener("click", () => {
        linkToSingleProduct(product.id);
      });
    }
  });

  const linkToSingleProduct = (id) => {
    let single = productos.find((item) => item.id === id);
    console.log(single);
    console.log(single.id);
    let params = new URLSearchParams();
    params.append("single", JSON.stringify(single));

    location.href = "./assets/pages/product-page.html?" + params.toString();
  };
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
        <a id ="boton${product.id}">Ver producto</a>
    
        `;
      consoleProductsDOM.appendChild(div);
      const btnSingleProduct = document.getElementById(`boton${product.id}`);
      btnSingleProduct.addEventListener("click", () => {
        linkToSingleProduct(product.id);
      });
    }
  });

  const linkToSingleProduct = (id) => {
    let single = productos.find((item) => item.id === id);
    console.log(single);
    console.log(single.id);
    let params = new URLSearchParams();
    params.append("single", JSON.stringify(single));

    location.href = "./assets/pages/product-page.html?" + params.toString();
  };
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
        <a id ="boton${product.id}">Ver producto</a>
    
        `;
      diversosProductsDOM.appendChild(div);
      const btnSingleProduct = document.getElementById(`boton${product.id}`);
      btnSingleProduct.addEventListener("click", () => {
        linkToSingleProduct(product.id);
      });
    }
  });

  const linkToSingleProduct = (id) => {
    let single = productos.find((item) => item.id === id);
    console.log(single);
    console.log(single.id);
    let params = new URLSearchParams();
    params.append("single", JSON.stringify(single));

    location.href = "./assets/pages/product-page.html?" + params.toString();
  };
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
