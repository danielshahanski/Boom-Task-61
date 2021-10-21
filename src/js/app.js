import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
    document.querySelectorAll('.hot').forEach(elem => {
        elem.classList.add("fas");
        elem.classList.add("fa-fire");
        elem.innerText+= '';
    })
});
