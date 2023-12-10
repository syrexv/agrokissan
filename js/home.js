document.getElementsByTagName("title")[0].innerText="Agrokissan";

// Add this code to your existing home.js or create a new JavaScript file

// Get the ticker content element
const tickerContent = document.querySelector('.ticker-content');

// Sample news items
const newsItems = [
    'Breaking News: New agricultural technology launched!',
    'Market prices update: Check the latest trends',
    'Weather alert: Prepare for upcoming changes in climate',
    // Add more news items as needed
];

// Function to populate the ticker with news items
function populateTicker() {
    // Clear existing content
    tickerContent.innerHTML = '';

    // Create and append news items
    newsItems.forEach((item) => {
        const newsElement = document.createElement('span');
        newsElement.classList.add('ticker-item');
        newsElement.textContent = item;
        tickerContent.appendChild(newsElement);
    });
}

// Call the function to populate the ticker
populateTicker();
