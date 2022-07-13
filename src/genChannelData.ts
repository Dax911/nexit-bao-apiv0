

export const populateChannelData = (channelId: string) => {
    const channelName = getChannelName(channelId?, videoId?);
 



const dispatchtostore = (author: string, blurb: string, imageLocation: string) => {
    
type Quotes = {
    author: string
    blurb: string
}




const printQuote = (quote: Quotes) => {
    return `${quote.author} says: ${quote.blurb}`
}

function getRandomQuote() {
    const quotes: Quotes[] = fetch("https://api.quotable.io/random")

    .then(res => res.json())
    .then(data => {
        return data
    }
    )
    .catch(err => {
        console.log(err)
    }
    )
    return quotes
}

