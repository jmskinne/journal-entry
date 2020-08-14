export const JournalEntryComponent = (entry) => {
    return `
        <section class="compose-entry">
            <div> Date: ${entry.date} </div>
            <div> Concept: ${entry.concept} </div>
            <div> Entry: ${entry.entryContent} </div>
            <div> Mood : ${entry.mood.label} </div>
            <button id="editEntry--${entry.id}">Edit</button>
            <input type="hidden" name="entryId id="entryId">
        </section>
    `
}