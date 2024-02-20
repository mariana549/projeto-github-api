const screen = {
   userProfile: document.querySelector('.profile-data'),
   reder(user){
      this.userProfile.innerHTML = `
         <div class="info">
         <img src="${user.avatarUrl}" alt="foto de perfil"/>
         <div class="data">
            <h1>${user.name ?? "não possui nome 😢"}</h1>
            <p>${user.bio ?? "não possui bio 😢"}</p>
         </div>
         </div>`
   }
}

export { screen }