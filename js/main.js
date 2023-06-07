const mobileMenu = document.querySelector(".menu-hamburger");
const iconHamburger = document.querySelector(".icon-hamburger");
const form = document.querySelector(".form");

iconHamburger.addEventListener("click", toggleIconMenu);
function toggleIconMenu() {
  mobileMenu.classList.toggle("inactive");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const mail = document.getElementById("mail").value;
  const telefono = document.getElementById("telefono").value;
  const pais = document.getElementById("pais").value;

  sendInfo(nombre, mail, telefono, pais);
});

const sendInfo = (nombre, mail, telefono, pais) => {
  if (
    nombre.trim() === "" ||
    mail.trim() === "" ||
    telefono.trim() === "" ||
    pais.trim() === ""
  ) {
    alert("Por favor, complete todos los campos");
    return;
  }

  console.log(nombre);
  console.log(mail);
  console.log(telefono);
  console.log(pais);

  alert("Datos enviados");
};
