import {noticias} from "./struct.js"
console.log(noticias)

let capturaNoticiaRen = document.querySelector('.noticia-rendering');
let capturaNovedad = document.getElementById("novedades");
const publicaciones = document.querySelectorAll('.card-link');




const btnp1 = document.getElementById("btn-1")

let arraypublic = [...publicaciones];

console.log(arraypublic);

btnp1.addEventListener('click',() =>{

    if(capturaNovedad.style.display === "flex"){
        console.log("Publicacion negrero")
    }else{       
        capturaNovedad.style.display="none";
        mostrarPublicacion();
        capturaNoticiaRen.style.display="flex"
        console.log(capturaNoticiaRen);
    }
})


function mostrarPublicacion(){
    noticias.forEach((element)=>{
        let create = document.createElement('div');
    create.innerHTML=`<div class=nt>
    <i class="fa-regular fa-calendar-days fecha" aria-hidden="true"><b>04/08/2024</b></i>
    <h2 class="noticia-rendering-titulo">Estoy viviendo en: ${element.noticiaOne.Titulo}</h2> 
    <img src ="${element.noticiaOne.img}" class="noticia-rendering-img">
    <p class="noticia-rendering-parrafo">${element.noticiaOne.Descripcion}</p>
    </div>`
    capturaNoticiaRen.appendChild(create) 
    })
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
/*
const sr = ScrollReveal({

    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,// animation repeat
})


sr.reveal('.contenido-banner-img');
*/


