function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  console.log("Menu seleccionado");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
