function loadPage(baseFile, content) {
  fetch(baseFile)
    .then(res => res.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const contentDiv = doc.querySelector("#content");
      if (contentDiv) {
        contentDiv.innerHTML = content;
      }

      document.body.innerHTML = doc.body.innerHTML;
    })
    .catch(err => console.error("Error loading base:", err));
}

document.body.style.opacity = 0;
window.addEventListener("load", () => {
  document.body.style.transition = "opacity 1s ease";
  document.body.style.opacity = 1;
});