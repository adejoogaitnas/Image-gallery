// var frutas = ['manzana', 'banana', 'mango'];

// //método for each
// frutas.forEach((fruta, index) => {
//     console.log(`En la posición ${index} tenemos la fruta: ${fruta}`)
// });

// //Función anonima

// var frutas2 = ['manzana', 'banana', 'mango'];

// frutas.forEach(function(fruta, index){
//     console.log(`En la posición ${index} tenemos la fruta: ${fruta}`);
// });

// var frutas3 = ['manzana', 'banana', 'mango'];

// function recorrerArray(fruta, index) {
//     console.log(`En la posición ${index} tenemos la fruta: ${fruta}`);
    
// }

// frutas3.forEach(recorrerArray);

var images = document.querySelectorAll("img");//Seleccionamos todos los elementos img
var wrapper = document.getElementById("wrapper");//Seleccionamos el contenedor de la imagen
var imgWrapper = document.getElementById("fullImg");//Seleccionamos la imagen que va a esta dentro del contenedor
var close = document.querySelector("span");//Seleccionamos la etiqueta span

images.forEach((img, index) => {//Images es el elemento iterable ejecutamos un forEach para ejecutar la funcion fecha sobre cada elemento iterable
    if (index > 0) {//Si el indice es mayor a 0, ejecutamos la funcion flecha de lo contrario no
        img.addEventListener("click", () => {//img elemento al que se está adjuntando el evento
                                            //click tipo de evento
                                            //funcion flecha es lo que va hacer el click
            openModal(`images/img${index}.jpg`);
        });
    }
});

function openModal(recoger) {
    wrapper.style.display = "flex";//Cambiamos el display del contenedor por flex
    imgWrapper.src = recoger;//Seleccionamos la dirección de la imagen 
    imgWrapper.alt = "imagen dinámica";//Añadimos información a las imagenes
}
close.addEventListener("click", () => wrapper.style.display = "none");//Cuando le damos a la X cambiamos el display a none cerrandose la ventana, y mostrandonos la galeria entera.




