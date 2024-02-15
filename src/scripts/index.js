const botao = document.querySelector('#btn-search')
const url = `https://api.github.com/users/mariana549`

async function pegarUsuarios () {
   const response = await fetch(url)
   const data = await response.json()
   return data 
   const inputText = document.querySelector('#input-search')

}
console.log(await pegarUsuarios())