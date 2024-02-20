import { getUser } from "./services/user.js";
import { getRepositories } from "./services/repos.js";
import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js";

document.querySelector('#btn-search').addEventListener('click', () => {
   const NameUser = document.querySelector('#input-search').value
   getUserData(NameUser)
})

document.querySelector('#input-search').addEventListener('keyup', (e) => {
   const NameUser = e.target.value
   const key = e.which || e.keyCode
   const isEnterkeypressed = key === 13
   if (isEnterkeypressed){
      getUserData(NameUser)
   }
})

async function getUserData(NameUser) {
   const userResponse = await getUser(NameUser)
   const repositoriesResponse = await getRepositories(NameUser)

   user.setInfo(userResponse)
   user.setRepositories(repositoriesResponse)

   screen.reder(user)
}
