const QuoteBtn = document.querySelector('#newQuoteBtn');
const QuoteText = document.querySelector('#quoteText');
const Author = document.querySelector('#author');

function getRandomQuote() {
    // You can replace this API endpoint with your preferred quote API
    fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then(data => {
            displayQuote(data.content, data.author);
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            alert('It\'s not working. Please try again later.');
        });
}

function displayQuote(quote, author) {
    QuoteText.textContent = quote;
    Author.textContent = author;
}

QuoteBtn.addEventListener('click', getRandomQuote);
window.addEventListener('load', getRandomQuote);
