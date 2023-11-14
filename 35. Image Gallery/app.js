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

var images = document.querySelectorAll("img");
var wrapper = document.getElementById("wrapper");
var imgWrapper = document.getElementById("fullImg");
var close = document.querySelector("span");

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        openModal(`images/img${index}.jpg`);
    });
});

function openModal(recoger) {
    wrapper.style.display = "flex";
    imgWrapper.src = recoger;
    imgWrapper.alt = "imagen dinámica"; 
}
close.addEventListener("click", () =>wrapper.style.display="none")