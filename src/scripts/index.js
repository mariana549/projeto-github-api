const botao = document.querySelector('#btn-search')

botao.addEventListener('click', () => {
   const inputText = document.querySelector('#input-search').value
   pegarUsuarios(inputText)
})

async function pegarUsuarios(NameUser) {
   const url = `https://api.github.com/users/${NameUser}`
   const response = await fetch(url)
   const data = await response.json()
   const { avatar_url, bio, name } = data

   const perfil = document.querySelector('.profile-data')
   perfil.innerHTML = `
   <div class="info">
   <img src="${avatar_url}" alt="foto de perfil"/>
   <div class="data">
      <h1>${name}</h1>
      <p>${bio}</p>
   </div>
   </div>`

   async function pegarRepositorios() {
      const url = `https://api.github.com/users/${NameUser}/repos`
      const response = await fetch(url)
      const data = await response.json()

      let li = '';
      for (let i = 0; i <= 10; i++) {
         const { name, html_url } = data[i]
         li += `<li><a href="${html_url}">${name}</a></li>`
      }

      perfil.innerHTML += `
      <div class="repositories">
      <h2>Repositórios</h2>
         <div class="repositories">
         <ul> ${li} </ul>
      </div>`
   }
   await pegarRepositorios()
}