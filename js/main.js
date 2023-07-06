/*Selección menú*/

const menuItems = document.querySelectorAll(".menu-item");

console.log (menuItems);

menuItems.forEach(function (item){
    item.addEventListener("click",function (e) {
        const currentItem = document.querySelector(".active");
        currentItem.classList.remove("active");
        e.target.classList.add("active");
    });
});


/* light box */

const imagenes=document.querySelectorAll('.img-galeria')
const imagenesLight= document.querySelector('.agregar-imagen')
const contenedorLight=document.querySelector('.imagen-light')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
               
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')    
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    
}


/* modal */

const openModal=document.querySelector('.hablemos');
const modal=document.querySelector('.modal');
const closeModal=document.querySelector('.modal_close')

openModal.addEventListener('click', ()=>{
    modal.classList.add('modal--show');

});

closeModal.addEventListener('click', ()=>{
    modal.classList.remove('modal--show');

});

