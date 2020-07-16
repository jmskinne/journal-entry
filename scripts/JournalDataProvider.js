const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "happy"
    },
    {
        id: 2,
        date: "07/27/2025",
        concept: "Complex Flexbox",
        entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain. I hate Steve.",
        mood: "sad"
    },
    {
        
        id: 3,
        date: "07/28/2025",
        concept: "JS",
        entry: "I don't want to ever be a farmer. JS is hard.",
        mood: "sad" 
        
    },
    {
        id: 4,
        date: "07/29/2025",
        concept: "JS Flexbox",
        entry: "This is why I don't like vegetables",
        mood: "meh"
    },
    {
        id: 5,
        date: "07/30/2025",
        concept: "JS",
        entry: "I learned it for a second, and now its gone again.",
        mood: "meh"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

