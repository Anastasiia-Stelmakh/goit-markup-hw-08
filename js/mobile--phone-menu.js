(() => {
  const MenuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");


MenuBtnRef.addEventListener("click", () => {
  const expanded = menuBtnRef.getAttribute("aria-expanded")
    === "true" || false;
  
  MenuBtnRef.classList.toggle('is-open');
  MenuBtnRef.setAttribute("aria-expanded", !expanded);

  mobileMenuRef.classList.toggle('is-open');
})
})();