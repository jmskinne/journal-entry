import { saveEntry, editEntry, useJournalEntries } from "./JournalDataProvider.js"
import { getMoods, useMoods } from "./MoodProvider.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".entry-container")


eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "recordEntryButton") {
        
        const id = document.querySelector("#entryId")
        const journalDate = document.querySelector("#journalDate")
        const journalConcepts = document.querySelector("#concepts")
        const journalContent = document.querySelector("#entryContent")
        const journalMood = document.querySelector("#mood")
        
        
        if(journalDate.value && journalConcepts.value && journalContent.value && journalMood.value) {
            if(id.value === "") {

                const newJournalEntry = {
                    date : journalDate.value,
                    concept : journalConcepts.value,
                    entryContent : journalContent.value,
                    moodId : parseInt(journalMood.value),
                }
                saveEntry(newJournalEntry)
                
            } else {
                const editedEntry = {
                    date : journalDate.value,
                    concept : journalConcepts.value,
                    entryContent: journalContent.value,
                    moodId : parseInt(journalMood.value),
                    id : parseInt(id.value)
                }
                editEntry(editedEntry)
                
            }
        
        
        
        
        
    }
}
})

eventHub.addEventListener("editNote", customEvent => {
    const EntrySearchingFor = customEvent.detail.editEntryId
    
    const allEntries = useJournalEntries()
    const entryToEdit = allEntries.find(entry => entry.id === EntrySearchingFor)
    
    const id = document.querySelector("#entryId")
    const journalDate = document.querySelector("#journalDate")
    const journalConcepts = document.querySelector("#concepts")
    const journalContent = document.querySelector("#entryContent")
    const journalMood = document.querySelector("#mood")
    //get from found object 
    id.value = entryToEdit.id 
    journalDate.value = entryToEdit.date 
    journalConcepts.value = entryToEdit.concept
    journalContent.value = entryToEdit.entryContent
    journalMood.value = entryToEdit.moodId

    
    
    
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
                
                <input type="hidden" name="entryId" id="entryId">
            

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


