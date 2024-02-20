import { baseUrl } from "../variaveis.js"

async function user(NameUser){
   const response = await fetch(`${baseUrl}${NameUser}`)
   return await response.json()
}

export { user}