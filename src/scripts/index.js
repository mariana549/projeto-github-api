const botao = document.querySelector('#btn-search')
const url = `https://api.github.com/users/mariana549`
   // const inputText = document.querySelector('#input-search')

async function pegarUsuarios () {
   const response = await fetch(url)
   const data = await response.json()
   console.log(data)
   const {avatar_URL, bio, name, repos_url, 
      public_repos} = data 
   console.log(bio)
   const perfil = document.querySelector('.profile-data')

}
console.log(await pegarUsuarios())