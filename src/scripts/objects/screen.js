const screen = {
   userProfile: document.querySelector('.profile-data'),
   reder(user){
      this.userProfile.innerHTML = `
         <div class="info">
         <img src="${user.avatarUrl}" alt="foto de perfil"/>
         <div class="data">
            <h1>${user.name ?? "não possui nome 😢"}</h1>
            <p>${user.bio ?? "não possui bio 😢"}</p>
            <p class="seguidores">Seguidores: ${user.followers ?? "não possui seguidores"}</p>
            <p class="seguidores">Seguindo: ${user.following ?? "não segue niguém"}</p>
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

      let EventItens = '';
      let TiposEventos = user.eventos.filter(event => event.type === "PushEvent" ||  event.type === "CreateEvent")
      console.log(TiposEventos)
      
      TiposEventos.forEach(evento => {
         EventItens += `
         <li>${evento.repo.name} - ${evento.payload.commits[0].message ?? "evento sem mensagem"}</li>
         `
      })
      if (TiposEventos.length > 0) {
         this.userProfile.innerHTML += `
         <div class="event-data">
         <h2>Eventos</h2>
            <ul> ${EventItens} </ul>
         </div>`
      }
   },
   rederNotFound(){
      this.userProfile.innerHTML = "<h3>Usuario não encontrado</h3>"
   }
}

export { screen }

