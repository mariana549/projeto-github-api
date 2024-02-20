const botao = document.querySelector('#btn-search')

botao.addEventListener('click', () => {
   const NameUser = document.querySelector('#input-search').value
   pegarUsuarios(NameUser)
})

document.querySelector('#input-search').addEventListener('keyup', (e) => {
   const NameUser = e.target.value
   const key = e.which || e.keyCode
   const isEnterkeypressed = key === 13

   if (isEnterkeypressed){
      pegarUsuarios(NameUser)
   }
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
      <h1>${name ?? "não possui nome 😢"}</h1>
      <p>${bio ?? "não possui bio 😢"}</p>
   </div>
   </div>`

   async function pegarRepositorios() {
      const url = `https://api.github.com/users/${NameUser}/repos`
      const response = await fetch(url)
      const data = await response.json()

      let li = '';
      for (let i = 0; i <= 10; i++) {
         const { name, html_url } = data[i]
         li += `<li><a href="${html_url}" target="_black">${name}</a></li>`
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