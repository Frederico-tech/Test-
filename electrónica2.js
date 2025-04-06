let acerto_2 = +localStorage.getItem("acerto_2")
let erro_2 = +localStorage.getItem("erros_2")
let user = localStorage.getItem("nome")

let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")


let usuario = document.getElementById("usuario").textContent = user + ", "
let proximo = document.getElementById("sen")
let send = document.getElementById("send")

function verifica() {
  let escolha = document.querySelector('input[name="pel2"]:checked')
  
  if(escolha){
    a.style.backgroundColor = '#00FF40'
    b.style.backgroundColor = 'red'
    c.style.backgroundColor = 'red'
    send.style.display = 'none'
    proximo.style.display = 'inline-block'
    if(escolha.value === "a"){
      acerto_2++
      alert("🎉🎉🎉😃Na Mosca Amigo, tu tá certinho!")
    }else{
      erro_2++
      alert("✖️🚨❌Tu ta errado amigo, mas mantém o foco ☺️")
    }
    
  localStorage.setItem('acerto_3',+acerto_2)
  localStorage.setItem('erro_3',+erro_2)
  }else{
    alert("Cara, tu tem que escolher uma opção 😅")
  }
  
 
}