import { getData } from "../../services/getData.js";

const createAllProducts = async () => {
  const productos = await getData();
  let productFilter = productos.filter((product) => {
    return product.category == singleProduct.category;
  });
  displayProduct(productFilter);
};

const displayProduct = (productos) => {
  const allProductsDOM = document.querySelector("[data-productsAll]");

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

window.onload = function () {
  get();
};

const get = () => {
  let params = new URLSearchParams(window.location.search);
  let single = JSON.parse(params.get("single"));
  return single;
};
let singleProduct = get();

const createSingleProduct = (products) => {
  const singleDom = document.querySelector("[data-productSingle]");
  let div = document.createElement("div");
  div.classList.add("container-single");
  div.innerHTML = `
         <div class="img-product">
            <img
              src="${products.img}"
              alt=""
            />
          </div>
          <div class="single-product-text">
            <h3 class="single-title">${products.name}</h3>
            <p class="single-price">$ ${products.price}</p>
            <p class="single-text">
              ${products.description}
            </p>
          </div> 
        `;
  singleDom.appendChild(div);
};

createSingleProduct(singleProduct);
createAllProducts();
