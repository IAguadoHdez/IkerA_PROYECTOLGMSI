const btnMenu = document.querySelector
("#btn-menu");
const navHeader = document.querySelector
("#nav-header");
const btnClose = document.querySelector
("#btn-close");

btnMenu.addEventListener("click", () => {
  navHeader.classList.add("nav-visible");
  navHeader.classList.remove("btn-menu"); 
});

btnClose.addEventListener("click", () => {
  navHeader.classList.remove("nav-visible");
  navHeader.classList.add("btn-menu");
});
