// Function to fetch the visit count from Glitch API
function getVisitCount(portfolioId) {
    fetch(`https://portfolio-data-save.glitch.me/visit/${portfolioId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById(`visitCount${portfolioId}`).textContent = data.visitCount;
        })
        .catch(error => console.error("Error fetching visit count:", error));
}

// Function to increment the visit count on the Glitch server
function incrementVisitCount(portfolioId) {
    fetch(`https://portfolio-data-save.glitch.me/visit/${portfolioId}`, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            document.getElementById(`visitCount${portfolioId}`).textContent = data.visitCount;
        })
        .catch(error => console.error("Error incrementing visit count:", error));
}

// Optionally, call getVisitCount when the page loads to load the initial count
window.onload = function() {
    getVisitCount('portfolio1');
    getVisitCount('portfolio2');
};
