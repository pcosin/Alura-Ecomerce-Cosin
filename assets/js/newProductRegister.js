const formulario = document.querySelector("[data-form-product]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const data = Object.fromEntries(new FormData(evento.target).entries());
  const { img, category, name, price, descripcion } = data;
  crearProducto(img, category, name, price, descripcion)
    .then(() => {
      window.location.href = "/assets/pages/all-products.html";
    })
    .catch((err) => console.log(err));
});

const crearProducto = (img, category, name, price, descripcion) => {
  return fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ img, category, name, price, descripcion }),
  });
};
