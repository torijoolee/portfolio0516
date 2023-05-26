(() => {
  const moveTopBtn = document.querySelector(".scroll-top");
  const headerHeight = document.querySelector(".header").offsetHeight;

  function ScrollToTop() {
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  console.log(headerHeight);

  function showScrollBtn() {
    if (scrollY > headerHeight / 2) {
      moveTopBtn.classList.add("On");
    } else {
      moveTopBtn.classList.remove("On");
    }
  }
  window.addEventListener("scroll", showScrollBtn);
  moveTopBtn.addEventListener("click", ScrollToTop);
})();
