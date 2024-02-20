const botao = document.querySelector('#btn-search')

botao.addEventListener('click', () => {
   const NameUser = document.querySelector('#input-search').value
   pegarUsuarios(NameUser)
   pegarRepositorios()
})

document.querySelector('#input-search').addEventListener('keyup', (e) => {
   const NameUser = e.target.value
   const key = e.which || e.keyCode
   const isEnterkeypressed = key === 13

   if (isEnterkeypressed){
      pegarUsuarios(NameUser)
   }
})

async function user(NameUser){
   const response = await fetch(`https://api.github.com/users/${NameUser}`)
   return await response.json()
}

async function pegarUsuarios(NameUser) {

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
}

async function repos(NameUser){
   const response = await fetch( `https://api.github.com/users/${NameUser}/repos`)
   return await response.json()
}

async function pegarRepositorios(NameUser) {
   repos(NameUser).then(reposData => {
      let li = '';

      reposData.forEach(repo => {
         li += `<li><a href="${repo.html_url}" target="_black">${repo.name}</a></li>`
      })

      console.log(li)

   const perfil = document.querySelector('.profile-data')
   perfil.innerHTML += `
   <div class="repositories">
   <h2>Repositórios</h2>
      <div class="repositories">
      <ul> ${li} </ul>
   </div>`
})
}
