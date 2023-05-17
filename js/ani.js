(() => {
  let observer = new IntersectionObserver((e) => {
    e.forEach((elem) => {
      if (elem.isIntersecting) {
        console.log(elem.target);
        elem.target.classList.add("moving");
      }
    });
  });
  let elem = document.querySelectorAll(".ani");
  for (let i = 0; i < elem.length; i++) {
    observer.observe(elem[i]);
  }
})();
