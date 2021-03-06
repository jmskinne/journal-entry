import { useJournalEntries, getJournalEntries, editEntry } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntryHTML.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".previousEntries")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("entryDeleted", () => {
    const allEntries = useJournalEntries()
    render(allEntries)
       
})

export const EntryListComponent = () => {
    getJournalEntries()
        .then(() => {
            const allEntries = useJournalEntries()
            render(allEntries)
        })
}
    


// eventHub.addEventListener("editNote", customEvent => {
//     const EntrySearchingFor = customEvent.detail.editEntryId
    
//     const allEntries = useJournalEntries()
//     const entryToEdit = allEntries.find(entry => entry.id === EntrySearchingFor)
//     console.log(entryToEdit)
//     editEntry(entryToEdit)

    
// })

const render = (entryArray) => {
    contentTarget.innerHTML = entryArray.map(
        entry => {
            return JournalEntryComponent(entry)
        }
    ).join("")
}
