(function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".header__nav");

  if (!burger || !nav) return;

  burger.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  // Закрытие меню при клике по ссылке
  nav.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    if (!link) return;

    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  });

  // Закрытие меню при клике вне
  document.addEventListener("click", function (e) {
    const clickedInside = e.target.closest(".header");
    if (clickedInside) return;

    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  });
})();
