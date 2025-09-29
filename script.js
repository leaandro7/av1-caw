const menuBtn = document.getElementById("menu-btn")
const menu = document.querySelector(".menu")
const menuHeader = document.querySelector(".menu-header")
const menuOverlay = document.querySelector(".menu-overlay")

const searchBtn = document.getElementById("search-btn")
const searchCloseBtn = document.getElementById("search-close-btn")
const searchInput = document.querySelector(".search-input")

//


menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
    menuOverlay.classList.toggle("open-overlay")
})

menuHeader.addEventListener("click", () => {
    menu.classList.toggle("open"); 
    menuOverlay.classList.toggle("open-overlay")
})

//

searchBtn.addEventListener("click", () => {
    searchInput.classList.toggle("open-search-input")
})

searchCloseBtn.addEventListener("click", () => {
    searchInput.classList.toggle("open-search-input")
})