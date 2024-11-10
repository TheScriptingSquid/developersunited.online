// Function to increment visit count and update the UI
function incrementVisitCount(portfolioId) {
    const visitCountElement = document.getElementById('visitCount' + portfolioId);
    let currentCount = parseInt(visitCountElement.innerText);
    currentCount++;
    visitCountElement.innerText = currentCount;

    // Update count on the server
    updateVisitCountOnServer(portfolioId, currentCount);
}

// Function to update the visit count on the server (e.g., Glitch API)
function updateVisitCountOnServer(portfolioId, newVisitCount) {
    fetch('https://portfolio-data-save.glitch.me', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            portfolioId: portfolioId,
            newVisitCount: newVisitCount
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Visit count updated successfully:', data);
    })
    .catch(error => {
        console.error('Error updating visit count:', error);
    });
}

// Fetch and display visit count from the server when the page loads
function loadVisitCount(portfolioId) {
    fetch('https://portfolio-data-save.glitch.me?portfolioId=' + portfolioId)
    .then(response => response.json())
    .then(data => {
        const visitCountElement = document.getElementById('visitCount' + portfolioId);
        visitCountElement.innerText = data.visitCount;
    })
    .catch(error => {
        console.error('Error fetching visit count:', error);
    });
}

// Call the load function for each portfolio when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadVisitCount(1);
    loadVisitCount(2);
    loadVisitCount(3);
});
