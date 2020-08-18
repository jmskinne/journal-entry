let journal = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const entryAddedStateChange = new CustomEvent("entryAddedStateChange")
    eventHub.dispatchEvent(entryAddedStateChange)
}

const entryDeleted = () => {
    const entryDeletedState = new CustomEvent("entryDeleted")
    eventHub.dispatchEvent(entryDeletedState)
}

export const getJournalEntries = () => {
    return fetch('http://localhost:3000/entries?_expand=mood')
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

export const deleteEntry = (entryId) => {
    return fetch (`http://localhost:3000/entries/${entryId}`, {
        method: "DELETE"
    })
    .then(getJournalEntries)
    .then(entryDeleted)
}

export const editEntry = (entry) => {
    return fetch(`http://localhost:3000/entries/${entry.id}`, {
        method : "PUT",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(entry) 
    })
    .then(getJournalEntries)
    .then(dispatchStateChangeEvent)

}