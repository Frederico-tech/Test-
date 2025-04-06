let user = localStorage.getItem("nome")
let erro = 0;
let acerto = 0;

let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")


let usuario = document.getElementById("usuario").textContent = user + ", "
let proximo = document.getElementById("sen")
let send = document.getElementById("send")

function verifica() {
  let escolha = document.querySelector('input[name="pel"]:checked')
  if(escolha){
    send.style.display = 'none'
    proximo.style.display = 'inline-block'
    a.style.backgroundColor = 'red'
    b.style.backgroundColor = 'red'
    c.style.backgroundColor = '#00FF40'
 
    if(escolha.value === "c"){
      acerto++;
      
      alert("🎊🎉🎉🎊Acertou, parabéns, começou bem☺️")
      
    }else {
      erro++;
      alert("❌🚨 Está errado, lamento,  mantém foco 👏😅")
      
    }
   
 
  localStorage.setItem('erro_1',+erro)
  localStorage.setItem('acerto_1',+acerto)

  
  
  
  }else{
    alert("❌❌ "+user+" Lembre-se de escolher uma opção ☺️")
  }
  
}