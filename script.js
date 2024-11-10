// script.js

// Function to fetch the visit count from Glitch API
function getVisitCount(portfolioId) {
    fetch(`https://your-project-name.glitch.me/visit/${portfolioId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById(`visitCount${portfolioId}`).textContent = data.visitCount;
        });
}

// Function to increment the visit count on the Glitch server
function incrementVisitCount(portfolioId) {
    fetch(`https://your-project-name.glitch.me/visit/${portfolioId}`, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            document.getElementById(`visitCount${portfolioId}`).textContent = data.visitCount;
        });
}

// Optionally, you can call getVisitCount when the page loads to load the initial count
window.onload = function() {
    getVisitCount('portfolio1');
    getVisitCount('portfolio2');
};
