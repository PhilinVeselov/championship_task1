// slider.js — простой слайдер + индикаторы
(function () {
  const slider = document.querySelector("[data-slider]");
  if (!slider) return;

  const track = slider.querySelector("[data-slider-track]");
  const slides = slider.querySelectorAll("[data-slide]");
  const dots = slider.querySelectorAll(".slider__dot");

  if (!track || slides.length === 0 || dots.length === 0) return;

  let index = 0;

  function render() {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((d) => d.classList.remove("is-active"));
    if (dots[index]) dots[index].classList.add("is-active");
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const i = Number(dot.dataset.dot);
      if (Number.isNaN(i)) return;

      index = Math.max(0, Math.min(slides.length - 1, i));
      render();
    });
  });

  // автопрокрутка (можно убрать, если не нужно)
  setInterval(() => {
    index = (index + 1) % slides.length;
    render();
  }, 5000);

  render();
})();
