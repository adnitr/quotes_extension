const quoteElement = document.getElementById("quote-text");
const getQuoteBtn = document.getElementById("get-quote-btn");

const apiUrl = "https://zenquotes.io/api/random"; // Replace with the actual API URL

async function fetchQuote() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }
    const data = await response.json();
    quoteElement.innerHTML = data[0].h;
  } catch (error) {
    quoteElement.innerHTML = "Error: Failed to fetch quote";
  }
}

fetchQuote()

getQuoteBtn.addEventListener("click", fetchQuote);