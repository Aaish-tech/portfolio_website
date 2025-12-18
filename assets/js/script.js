document.body.style.opacity = 0;
window.addEventListener("load", () => {
  document.body.style.transition = "opacity 1s ease";
  document.body.style.opacity = 1;
});