const botao = document.querySelector('#btn-search')

async function pegarAPI () {
   const url = `https://api.github.com`
   const response =  await fetch(url)
   console.log(response)
   return response.json
}
pegarAPI()

async function pegarUsuarios (users) {
   const api = pegarAPI()
   const url = `https://api.github.com/${users}`
   const response = await fetch(url)
   console.log(response)
   return response.json
}
pegarUsuarios()