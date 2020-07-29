let journal = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const entryAddedStateChange = new CustomEvent("entryAddedStateChange")
    eventHub.dispatchEvent(entryAddedStateChange)
}

export const getJournalEntries = () => {
    return fetch('http://localhost:3000/entries')
        .then(response => response.json())
        .then(parsedEntries => {
            journal = parsedEntries
        })
}

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const saveEntry = (entry) => {
    return fetch('http://localhost:3000/entries', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getJournalEntries)
    .then(dispatchStateChangeEvent)
}