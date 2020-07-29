import { saveEntry } from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".entry-container")


eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "recordEntryButton") {
    console.log("When does this happen")
        const journalDate = document.querySelector("#journalDate")
        const journalConcepts = document.querySelector("#concepts")
        const journalContent = document.querySelector("#entryContent")
        const journalMood = document.querySelector("#mood")

        const newJournalEntry = {
            date : journalDate.value,
            concept : journalConcepts.value,
            entryContent : journalContent.value,
            mood : journalMood.value,
        }
        saveEntry(newJournalEntry)
        debugger
    }
})














const render = () => {
    console.log("Is it rendering, Journal form")
    contentTarget.innerHTML = `
        <form name="journalEntryForm" class="journal__compose" id="journalForm">
            <fieldset class="journal__field">
                
                <label for="journalDate">Date:</label>   
                <input type="date" id="journalDate" name="journalDate">


                <label for="concepts">Concepts Covered:</label>
                <input type="text" id="concepts" name="concepts">
                

                <label for="entry">Journal Entry:</label>
                <textarea id="entryContent" name="entry" rows="5" cols=60></textarea>
                

                <label for="mood">Choose a mood:</label>
                    <select id="mood" name="mood">
                        <option value="happy">Happy</option>
                        <option value="sad">Sad</option>
                        <option value="meh ">Meh</option>
                        <option value="jubilant">Jubilant</option>
                        <option value="angry">Angry</option>
                    </select>
                
                
                <button id="recordEntryButton">Record Journal Entry </button>
            

            </fieldset>     
        </form>
    `
    // document.getElementById('journalForm').reset()
}

export const JournalForm = () => {
    console.log("Journal form function")
    render()
}