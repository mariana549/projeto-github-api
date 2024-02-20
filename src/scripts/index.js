import { getUser } from "./services/user.js";
import { getRepositories } from "./services/repos.js";
import { user } from "./objects/user.js"

document.querySelector('#btn-search').addEventListener('click', () => {
   const NameUser = document.querySelector('#input-search').value
   pegarUsuarios(NameUser)
   pegarRepositorios(NameUser)
})

document.querySelector('#input-search').addEventListener('keyup', (e) => {
   const NameUser = e.target.value
   const key = e.which || e.keyCode
   const isEnterkeypressed = key === 13
   if (isEnterkeypressed){
      pegarUsuarios(NameUser)
      pegarRepositorios(NameUser)
   }
})

async function pegarUsuarios(NameUser) {
   getUser(NameUser).then(userData => {
      let perfilInfo = `
      <div class="info">
      <img src="${userData.avatar_url}" alt="foto de perfil"/>
      <div class="data">
         <h1>${userData.name ?? "não possui nome 😢"}</h1>
         <p>${userData.bio ?? "não possui bio 😢"}</p>
      </div>
      </div>`
      document.querySelector('.profile-data').innerHTML = perfilInfo
   })
}

async function pegarRepositorios(NameUser) {
   getRepositories(NameUser).then(reposData => {
      let li = '';
      reposData.forEach(repo => {
         li += `<li><a href="${repo.html_url}" target="_black">${repo.name}</a></li>`
      })
    document.querySelector('.profile-data').innerHTML += `
   <div class="repositories">
   <h2>Repositórios</h2>
      <div class="repositories">
      <ul> ${li} </ul>
   </div>`
})
}