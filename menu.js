let menuResponsive = document.querySelector('.nav-responsive');
let menuHamburguesa = document.querySelector('.menu-toggle');

menuHamburguesa.addEventListener("click",(e)=>{
    if (menuResponsive.style.display === "none") {
        menuResponsive.style.display = "flex";
    } else {
        menuResponsive.style.display = "none";
    }
})

