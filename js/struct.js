"use strict"

let listasCards = document.querySelectorAll('.c');


let arraylistcard = [...listasCards]

let getTitulo = arraylistcard[2].children[0].attributes[1].value//[1].children[1].children[0].innerHTML//.children[1].children[0].children[0].innerText
console.log(getTitulo)





export const noticias = [/*{
    
    noticiaOne:{
        img:"./img/crecer.jpg",
        titulo: getTitulo,
        descript:"Soy un gordo obeso"
    },
},
{
    noticiaOne:{
        img:"./img/crecer1.jpg",
        titulo:getTitulo,
        descript:"Soy un gordo obeso"
    },
},
{
    
    noticiaOne:{
        img:"./img/crecer2.jpg",
        titulo:"peru",
        descript:"Soy un gordo obeso"
    },
},
{
    noticiaOne:{
        img:"./img/crecer3.jpg",
        titulo:"peru",
        descript:"Soy un gordo obeso"
    },
},
{
    
    noticiaOne:{
        img:"./img/crecer4.jpg",
        titulo:"peru",
        descript:"Soy un gordo obeso"
    },
},
{
    noticiaOne:{
        img:"./img/crecer1.jpg",
        titulo:"peru",
        descript:"Soy un gordo obeso"
    },
    
}*/];

let tomarTitulo = (notis)=>{arraylistcard.forEach(element => {
    noticias.unshift({noticiaOne:{Titulo:element.children[1].children[0].children[0].textContent,
        Descripcion:element.children[1].children[1].children[0].textContent,img:element.children[0].attributes[1].value}}) 
        console.log(notis)
});}

tomarTitulo(noticias)





