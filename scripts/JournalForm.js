import { saveEntry } from "./JournalDataProvider.js"
import { getMoods, useMoods } from "./MoodProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".entry-container")


eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "recordEntryButton") {
    
        const journalDate = document.querySelector("#journalDate")
        const journalConcepts = document.querySelector("#concepts")
        const journalContent = document.querySelector("#entryContent")
        const journalMood = document.querySelector("#mood")
        

        const newJournalEntry = {
            date : journalDate.value,
            concept : journalConcepts.value,
            entryContent : journalContent.value,
            moodId : parseInt(journalMood.value),
        }
        saveEntry(newJournalEntry)
        
        
    }
})


const render = (moodCollection) => {
    
    contentTarget.innerHTML = `
        <form name="journalEntryForm" class="journal__compose" id="journalForm">
            <fieldset class="journal__field">
                
                <label for="journalDate">Date:</label>   
                <input type="date" id="journalDate" name="journalDate">


                <label for="concepts">Concepts Covered:</label>
                <input type="text" id="concepts" name="concepts">
                

                <label for="entry">Journal Entry:</label>
                <textarea id="entryContent" name="entry" rows="5" cols=60></textarea>
                

                
                <select id="mood" class="moodSelect">
                    <option value="0">Please select a mood</option>
                    ${
                        moodCollection.map(
                            mood => {
                                return `<option value="${mood.id}"> ${mood.label}</option>`
                            }
                        ).join("")
                    }
                
                </select>
                
                
                <button id="recordEntryButton">Record Journal Entry </button>
            

            </fieldset>     
        </form>
    `
    // document.getElementById('journalForm').reset()
}

export const JournalForm = () => {
    getMoods()
    .then(() => {
        const moods = useMoods()
        render(moods)
    })
    
}


//<label for="mood">Choose a mood:</label>