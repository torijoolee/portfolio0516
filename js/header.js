(() => {
  const barElem = document.querySelector(".progress-bar");
  let maxScrollValue;
  maxScrollValue = document.body.offsetHeight - window.innerHeight;

  function checkResize() {
    document.body.offsetHeight - window.innerHeight;
  }

  function handleBarWidth() {
    barElem.style.width = (scrollY / maxScrollValue) * 100 + "%";
  }
  window.addEventListener("scroll", handleBarWidth);
  window.addEventListener("resize", checkResize);
})();
