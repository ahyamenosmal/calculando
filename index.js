precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let sumar = document.querySelector("#sumar")
let restar = document.querySelector("#restar")

sumar.addEventListener("click", ()=>{
let aumentar = document.querySelector(".cantidad")
let valor = aumentar.innerHTML
aumentar.innerHTML = Number(valor) + 1
let pagar = document.querySelector(".valor-total")    
pagar.innerHTML = Number(aumentar.innerHTML) * precio
})


restar.addEventListener("click", ()=>{
let disminuir = document.querySelector(".cantidad")
let valor = disminuir.innerHTML
disminuir.innerHTML = Number(valor) - 1
let pagar = document.querySelector(".valor-total")    
pagar.innerHTML = Number(disminuir.innerHTML) * precio    
})