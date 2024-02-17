const botao = document.querySelector('#btn-search')
const url = `https://api.github.com/users/mariana549`
   // const inputText = document.querySelector('#input-search')

async function pegarUsuarios () {
   const response = await fetch(url)
   const data = await response.json()
   console.log(data)
   const {avatar_url, bio, name, repos_url} = data 
   
   const perfil = document.querySelector('.profile-data')
   perfil.innerHTML = `
   <div class="info">
   <img src="${avatar_url}" alt="foto de perfil"/>
   <div class="data">
      <h1>${name}</h1>
      <p>${bio}</p>
   </div>
   </div>
   <div class="repositories">
      <h2>Repositórios</h2>
      <ul>
         <li><a href="${repos_url[i]}" target="_black">${repos_url[i].name }</li>
      </ul>
</div>`


}
console.log(await pegarUsuarios())

