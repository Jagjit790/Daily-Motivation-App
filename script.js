// Preloader functionality
window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");

  // Keep loader for 2 seconds after load
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const authorNameEl = document.getElementById("author-name");

// Gradient colors
const gradients = [
  "linear-gradient(to right, #ff9966, #ff5e62)",
  "linear-gradient(to right, #00b09b, #96c93d)",
  "linear-gradient(to right, #ff6a00, #ee0979)",
  "linear-gradient(to right, #00c6ff, #0072ff)",
  "linear-gradient(to right, #f7971e, #ffd200)",
  "linear-gradient(to right, #8e2de2, #4a00e0)",
  "linear-gradient(to right, #fc466b, #3f5efb)"
];

// Quotes database
const quotes = [
  {
    content: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown"
  },
  {
    content: "Success doesn’t just find you. You have to go out and get it.",
    author: "Rumi"
  },
  {
    content: "Wake up with determination. Go to bed with satisfaction.",
    author: "Zig Ziglar"
  },
  {
    content: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    content: "The harder you work for something, the greater you’ll feel when you achieve it.",
    author: "Anonymous"
  },
  {
    content: "Life is all about taking risks. If you never take a risk, you will never achieve your dreams",
    author: "Anonymous"
  }
];

// Get a new quote + apply background gradient
function getQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

  quoteEl.textContent = `"${randomQuote.content}"`;
  authorEl.textContent = `— ${randomQuote.author}`;
  authorNameEl.textContent = randomQuote.author;
  document.body.style.background = randomGradient;
}

// Copy quote to clipboard
function copyQuote() {
  const text = `${quoteEl.textContent} ${authorEl.textContent}`;
  navigator.clipboard.writeText(text)
    .then(() => alert("Quote copied to clipboard!"))
    .catch(() => alert("Failed to copy."));
}

// Show quote on initial page load
getQuote();
