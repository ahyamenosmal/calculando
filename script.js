precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let sumar = document.querySelector("#sumar")
let restar = document.querySelector("#restar")

sumar.addEventListener("click", ()=>{
let aumentar = document.querySelector(".cantidad")
let valor = aumentar.innerHTML
aumentar.innerHTML = Number(valor) + 1
actualizarValorTotal()

})


restar.addEventListener("click", ()=>{
let disminuir = document.querySelector(".cantidad")
let valor = disminuir.innerHTML
if(Number(valor) > 0){
    disminuir.innerHTML = Number(valor) - 1
    actualizarValorTotal()

}
    
})

function actualizarValorTotal() {
    const cantidad = document.querySelector(".cantidad").innerHTML;
    const pagar = document.querySelector(".valor-total");
    pagar.innerHTML = Number(cantidad) * precio;
  }



