import { baseUrl, repositoriesQuantity } from "../variaveis.js"

async function getEvents(NameUser){
   const response = await fetch( `${baseUrl}${NameUser}/events?per_page=${repositoriesQuantity}`)
   return await response.json()
}

export { getEvents } 