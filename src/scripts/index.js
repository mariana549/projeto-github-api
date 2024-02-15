const botao = document.querySelector('#btn-search')
const url = `https://api.github.com/users/mariana549`

async function pegarUsuarios (users) {
   const response = await fetch(url)
   const data = await response.json
   console.log(response)

   const inputText = document.querySelector('#input-search')

}
pegarUsuarios()