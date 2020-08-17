import {deleteEntry, useJournalEntries} from "./JournalDataProvider.js"


const eventHub = document.querySelector(".container")


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

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, entryId] = clickEvent.target.id.split("--")
        
        deleteEntry(entryId)
    }
})


export const JournalEntryComponent = (entry) => {
    return `
        <section class="compose-entry">
            <div> Date: ${entry.date} </div>
            <div> Concept: ${entry.concept} </div>
            <div> Entry: ${entry.entryContent} </div>
            <div> Mood : ${entry.mood.label} </div>
            <button id="deleteEntry--${entry.id}">Delete</button>
            <button id="editEntry--${entry.id}">Edit</button>
            <input type="hidden" name="entryId id="entryId">
        </section>
    `
}