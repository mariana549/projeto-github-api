const screen = {
   userProfile: document.querySelector('.profile-data'),
   reder(user){
      this.userProfile.innerHTML = `
         <div class="info">
         <img src="${user.avatarUrl}" alt="foto de perfil"/>
         <div class="data">
            <h1>${user.name ?? "não possui nome 😢"}</h1>
            <p>${user.bio ?? "não possui bio 😢"}</p>
            <span>seguidores: ${user.followers} seguindo: ${user.following}</span>
         </div>
         </div>`

      let repositoriosItens = ''
      user.repositories.forEach(repo => { repositoriosItens += `<li><a href="${repo.html_url}" target="_black">${repo.name}</a></li>`
      })

      if (user.repositories.length > 0) {
         this.userProfile.innerHTML += `
         <div class="repositories section">
         <h2>Repositórios</h2>
            <div class="repositories">
            <ul> ${repositoriosItens} </ul>
         </div>`
      }
   },
   rederNotFound(){
      this.userProfile.innerHTML = "<h3>Usuario não encontrado</h3>"
   }
}

export { screen }