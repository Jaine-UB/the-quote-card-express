"use strict"

/*const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

const quotes = [
    {
        quote: "Be yourself; everyone else is aready taken",
        author: "Oscar Wilde",
    },

     {
        quote: "Readers live a thousand lives before they die. A person who never reads lives only one.",
        author: "George R.R. Martin",
    },

    {
        quote: "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.",
        author: "Haruki Murakami",
    }
]


function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 3000);
}
   
setTimeout(loopThroughQuotes, 3000);*/


async function getRandomImage() {
    const client_id = "rqJcUbcsb63b7SVNgu3eDsYRW-RjJvH7tEj8cK_UjMo";
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json()
        const receivedPhotoUrl = returnedData.urls.regular;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url("${receivedPhotoUrl}")`;
    } catch (error) {
        console.error(error)
    }
}
getRandomImage();
