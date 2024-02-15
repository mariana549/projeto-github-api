const botao = document.querySelector('#btn-search')
const url = `https://api.github.com/users`

async function pegarUsuarios () {
   const resposta = await fetch(url)
   const data = await resposta.json

   const inputText = document.querySelector('#input-search')
}