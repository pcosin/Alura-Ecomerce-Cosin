const loginForm = document.getElementById("login-form");
const errorMessage = document.querySelector(".loginErrorMessage");
let Question;

//-----------------------------------------------------------------------------------------------------------------------
function goMain(user) {
  logAlreadyTrue(user);
  window.open("./all-products.html", "_self");
}

const userValidationMessage = (validation) => {
  return new Promise((resolve, reject) => {
    validation ? resolve(true) : reject(`Las credenciales no coinciden`);
  });
};

function loginValidation(email, pass) {
  let unserializatedListOfUsers = JSON.parse(localStorage.getItem(`listOfUsers`)) || [];
  for (const user of unserializatedListOfUsers) {
    user.email === email && user.password === pass ? (Question = true) : (Question = false);
    if (Question) break;
  }
  return Question;
}

const logAlreadyTrue = (user) => {
  let loguedUser = [user, true];
  localStorage.setItem(`validation`, JSON.stringify(loguedUser));
};

//-----------------------------------------------------------------------------------------------------------------------

loginForm.onsubmit = (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  userValidationMessage(loginValidation(data.email, data.password))
    .then((response) => response && goMain(data.name))
    .catch((error) => (errorMessage.innerText = error));
};
