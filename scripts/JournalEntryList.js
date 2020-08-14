import { useJournalEntries, getJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".entry-container")
const eventHub = document.querySelector(".container")

export const EntryListComponent = () => {
    console.log("entry list component function")
    getJournalEntries()
        .then(() => {
            const allEntries = useJournalEntries()
            render(allEntries)
        })
}

const render = (entryArray) => {
    const entriesToStrings = entryArray.map(
        currentEntry => {
            return JournalEntryComponent(currentEntry)
        }
    ).join("")
    console.log("render in the allEntries array -- entry list comp")
    contentTarget.innerHTML += entriesToStrings
}




eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("editEntry--")) {
        const [prefix, entryId] = clickEvent.target.id.split("--")
        
        const message = new CustomEvent("editNote", {
            detail : {
                editEntryId : parseInt(entryId)
            }
        })
        eventHub.dispatchEvent(message)
    }
})

// eventHub.addEventListener("editNote", customEvent => {
//     const EntrySearchingFor = customEvent.detail.editEntryId
//     const allEntries = useJournalEntries()
//     const noteToEdit = allEntries.find(entry => entry.id === EntrySearchingFor)
    

    
// })









//     // Use the journal entry data from the data provider component
//     const entries = useJournalEntries()
    
//     let journalHTMLRep = ""

//     for (const entry of entries) {
//         journalHTMLRep += JournalEntryComponent(entry)

//     }
//     entryLog.innerHTML += `
//         <article class="journal__entries">
//             ${journalHTMLRep}
//         </article>
//         `
    
    
// 

