// theme.js — переключение светлой / темной темы
(function () {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");

  // Если кнопки нет — просто применяем сохранённую тему
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    root.setAttribute("data-theme", savedTheme);
  }

  if (!toggle) return;

  // Обновляем иконку
  function updateIcon(theme) {
    toggle.textContent = theme === "light" ? "🌞" : "🌙";
  }

  updateIcon(root.getAttribute("data-theme"));

  toggle.addEventListener("click", function () {
    const currentTheme = root.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    updateIcon(nextTheme);
  });
})();
