import {EntryListComponent} from "./JournalEntryList.js"
import { JournalForm } from "./JournalForm.js"
import {useJournalEntries} from "./JournalDataProvider.js"
//import { getMoods } from "./MoodProvider.js"




JournalForm()
// getMoods()
//   .then(JournalForm)

EntryListComponent()
const eventHub = document.querySelector(".container")

eventHub.addEventListener("editNote", customEvent => {
    const EntrySearchingFor = customEvent.detail.editEntryId
    const allEntries = useJournalEntries()
    const noteToEdit = allEntries.find(entry => entry.id === EntrySearchingFor)
    console.log(noteToEdit)

    
})