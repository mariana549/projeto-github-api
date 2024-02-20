import { baseUrl } from "../variaveis.js"

async function getUser(NameUser){
   const response = await fetch(`${baseUrl}${NameUser}`)
   return await response.json()
}

export { getUser }