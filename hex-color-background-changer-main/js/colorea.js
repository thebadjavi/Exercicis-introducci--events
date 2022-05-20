

console.log("Script cargado correctamente.")
  

function randomize() {
    console.log("pulsado")

 var element = document.querySelector("body");
 element.style.backgroundColor ='#' + Math.floor(Math.random() * 16777215).toString(16);
    

   
}
 