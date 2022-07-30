const signUpInputs = document.getElementsByClassName("signUpInput");
const signUpForm = document.getElementById("signUp");

let errorMessage = document.querySelector(`.errorMessage`);
const unserializatedListOfUsers = JSON.parse(localStorage.getItem(`listOfUsers`)) || [];
console.log(unserializatedListOfUsers);
let newUser;
let storageName;

//-----------------------------------------------------------------------------------------------------------------------
class addUser {
  constructor(name, email, pass) {
    this.name = name;
    this.email = email;
    this.password = pass;
  }
}

function nameAlreadyTaked(nameInput) {
  let notTaked = [];
  for (const user of unserializatedListOfUsers)
    nameInput === user.name ? notTaked.push(`true`) : notTaked.push(`false`);
  return notTaked.includes(`true`);
}
const EqualPass = (pass1, pass2) => {
  return pass1 === pass2;
};
//-----------------------------------------------------------------------------------------------------------------------

signUpForm.onsubmit = (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  const promiseAlreadyTaken = (res) => {
    return new Promise((resolve, reject) => {
      !res
        ? resolve(EqualPass(data.password, data.password2))
        : reject(`El nombre de usuario está usado, prueba otro.`);
    });
  };

  promiseAlreadyTaken(nameAlreadyTaked(data.name))
    .then((response) => {
      if (response) {
        newUser = new addUser(data.name, data.email, data.password);
        unserializatedListOfUsers.push(newUser);
        console.log(newUser);
        localStorage.setItem(`listOfUsers`, JSON.stringify(unserializatedListOfUsers));
        Swal.fire({
          title: `¡Usuario creado con éxito!`,
          background: `rgb(1, 112, 112)`,
          color: `#FFF`,
          confirmButtonColor: `rgb(85, 253, 253)`,
        });

        setTimeout(() => {
          window.open("./login.html", "_self");
        }, 3000);
      } else {
        Swal.fire({
          title: `Las contraseñas no coinciden.`,
          background: `rgb(98, 12, 12)`,
          color: `#FFF`,
          confirmButtonColor: `rgb(85, 253, 253)`,
        });
      }
    })
    .catch((error) => (errorMessage.innerText = error));
};
