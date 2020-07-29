import { useJournalEntries, getJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".entry-container")

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

