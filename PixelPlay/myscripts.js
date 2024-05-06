function toggleMenu() {
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");
  menu.classList.toggle("open");
  menuIcon.classList.toggle("change");
}
