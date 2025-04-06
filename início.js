var user = localStorage.getItem("nome")
//Inicio
let exit
function look() {
 let opc = document.getElementById("opcs")
  let exit = document.getElementById("exit")
  opc.classList.remove("most")
  exit.style.display = 'inline-block'
  opc.classList.add("esc")
}
function noLook() {
  let opc = document.getElementById("opcs")
  let exit = document.getElementById("exit")
  opc = document.getElementById("opcs")
  exit = document.getElementById("exit")
  opc.classList.add("most")
  exit.style.display = 'none'
  opc.classList.remove("esc")
}

 let b1 = document.getElementById("b1")
 let b2 = document.getElementById("b2")

 function exib() {
   let b1 = document.getElementById("b1")
 let b2 = document.getElementById("b2")
   let more = document.getElementById("mais")
     more.style.display = 'none'
     b2.style.display = 'none'
     b1.style.display = 'inline-block'
     
 }
 function no_exib() {
   let b1 = document.getElementById("b1")
 let b2 = document.getElementById("b2")
   let more = document.getElementById("mais")
     more.style.display = 'table-cell'
     b2.style.display = 'inline-block'
     b1.style.display = 'none'
     
 }

 let pontos_el = localStorage.getItem("pontos")
 let erro = localStorage.getItem("err")
 console.log(erro)
 console.log(pontos_el)
let electronica;
let circle_el;
let percent_el;
let total;
let circle_total;
let percent_total;

const verificar = setInterval(() => {
  electronica = parseInt((pontos_el/120)*100)
  total = parseInt((pontos_el/660)*100)
  console.log(total+"%")
  console.log(electronica+"%")
  
  
  if(erro > 0 || acerto > 0){
    let next = "/electrónica_2/electrónica.html"
    localStorage.setItem('next',next)
    
    let go = document.getElementById("gos").textContent = "Continuar>>"
    
    
  }
  
}, 2000)