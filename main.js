document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});
ScrollReveal().reveal(".showcase");
ScrollReveal().reveal(".showcase", { delay: 500 });
ScrollReveal().reveal(".cards-banner-one", { delay: 500 });
ScrollReveal().reveal(".cards-banner-two", { delay: 500 });
ScrollReveal().reveal(".news-cards", { delay: 500 });
document.querySelector("#switch").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.querySelector("#switch").classList.toggle("active");
});
