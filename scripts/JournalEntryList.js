import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entry-container")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()
    
    let journalHTMLRep = ""

    for (const entry of entries) {
        journalHTMLRep += JournalEntryComponent(entry)

    }
    entryLog.innerHTML += `
        <article class="journal__entries">
            ${journalHTMLRep}
        </article>
        `
    
    
}

