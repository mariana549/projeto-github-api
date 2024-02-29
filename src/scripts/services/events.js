import { baseUrl , eventQuantity } from "../variaveis.js"

async function getEvents(NameUser){
   const response = await fetch( `${baseUrl}${NameUser}/events`)
   const events =  await response.json()
   return events.filter(event => event.type === "PushEvent" || event.type === "CreateEvent").slice(0, eventQuantity)

}

export { getEvents } 