import { getUser } from "./services/user.js";
import { getRepositories } from "./services/repos.js";
import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js";
import { getEvents } from "./services/events.js";

document.querySelector('#btn-search').addEventListener('click', () => {
   const NameUser = document.querySelector('#input-search').value
   if (validarEmptyInput(NameUser)) return
   getUserData(NameUser)
})

document.querySelector('#input-search').addEventListener('keyup', (e) => {
   const NameUser = e.target.value
   const key = e.which || e.keyCode
   const isEnterkeypressed = key === 13
   if (isEnterkeypressed){
     if (validarEmptyInput(NameUser)) return
      getUserData(NameUser)
   }
})

function validarEmptyInput(NameUser){
   if (NameUser.length === 0){
      alert('preencha o campo com o nome do usuário do GitHub')
      return true
   }
}

async function getUserData(NameUser) {
   const userResponse = await getUser(NameUser)
   
   if(userResponse.message === "Not Found"){
      screen.rederNotFound()
      return
   }

   const repositoriesResponse = await getRepositories(NameUser)

   const eventsResponse = await getEvents(NameUser)
   let event = eventsResponse[0].repo.name
   let events = eventsResponse[1].payload.commits[0].message

   console.log(event)
   console.log(events)
   console.log(eventsResponse)

   user.setInfo(userResponse)
   user.setRepositories(repositoriesResponse)

   screen.reder(user)
}
