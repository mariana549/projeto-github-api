import { baseUrl, repositoriesQuantity } from "../variaveis.js"

async function repositories(NameUser){
   const response = await fetch( `${baseUrl}${NameUser}/repos?per_page=${repositoriesQuantity}`)
   return await response.json()
}

export { repositories }