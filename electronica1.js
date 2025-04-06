var user = localStorage.getItem("nome")
var acerto_1 = +localStorage.getItem("acerto_1")
var erro_1 = +localStorage.getItem("erro_1")

let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
alert(user)

let usuario = document.getElementById("usuario").textContent = user + ", "
let proximo = document.getElementById("sen")
let send = document.getElementById("send")

function verifica() {
  let escolha = document.querySelector('input[name="pel1"]:checked')
  
  if(escolha){
    send.style.display = 'none'
    proximo.style.display = 'inline-block'
    a.style.backgroundColor = 'red'
    b.style.backgroundColor = '#00FF40'
    c.style.backgroundColor = 'red'
    
    if(escolha.value == "b"){
      acerto_1++
        alert("🎊🎊🎊👏 Tá mandado bem "+ user)
    } else {
      erro_1++
      alert("✖️❌Errou pra caramba 😃")
    }
    localStorage.setItem('erro_2',+erro_1)
  localStorage.setItem('acerto_2',+acerto_1)
  
  } else {
    alert("🚨🚨 Escolha uma opção!")
  }
  
}