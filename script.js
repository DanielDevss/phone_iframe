const IFRAME = document.querySelector("#iframeItem");
const SEARCH = document.querySelector("#inputSearch");
const BUTTON = document.querySelector("#buttonSearch"); 
const POWER = document.querySelector("#power"); 
const PHONE = document.querySelector("#telefono"); 

BUTTON.addEventListener("click", () => {
    const src = SEARCH.value;
    IFRAME.src = src;
})

POWER.addEventListener("click", () => {
    PHONE.classList.toggle("off");
})