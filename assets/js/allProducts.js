import { getData } from "../../services/getData.js";
// import createAllProducts from "./main.js";

const createAllProducts = async () => {
  const allProductsDOM = document.querySelector("[data-productsAll]");

  const productos = await getData();

  productos.forEach((product) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <img src="${product.img}" alt="">
        <h4 class="tittle">${product.name}</h4>
        <div class="price">$ ${product.price}</div>
        <a href="">Ver producto</a>

        `;
    allProductsDOM.appendChild(div);
  });
};

createAllProducts();
