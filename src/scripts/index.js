const botao = document.querySelector('#btn-search')
const url = `https://api.github.com/users`

async function pegarUsuarios (users) {
   const response = await fetch(url)
   const data = await response.json
   console.log(response)

   users = response.headers
   console.log(users)

   // const inputText = document.querySelector('#input-search')

   // async function digitarIdUsuario (){
   //    const usuario = inputText.value

   // }
   // digitarIdUsuarios()
}
pegarUsuarios()