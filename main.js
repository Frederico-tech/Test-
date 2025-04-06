let user = localStorage.getItem("n");
localStorage.setItem('nome',user)
let exib = document.getElementById("nome").textContent = user + ", "
let exib_1 = document.getElementById("pessoa").textContent  = user + "; "

let cont = document.getElementById("cont")
let menos = document.getElementById("Menos")
let mais = document.getElementById("mais")
function esconder() {
  cont.style.display = 'none'
  menos.style.display = 'none'
  mais.style.display = 'inline-block'
}
function most() {
  cont.style.display = 'block'
  menos.style.display = 'inline-block'
  mais.style.display = 'none'
}
