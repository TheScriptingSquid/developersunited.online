// Create a mouse trail effect
document.addEventListener('mousemove', function(event) {
    // Create a new div element for each trail
    const trail = document.createElement('div');
    trail.classList.add('trail');

    // Position the trail at the mouse cursor
    trail.style.left = `${event.pageX}px`;
    trail.style.top = `${event.pageY}px`;

    // Append the trail to the body
    document.body.appendChild(trail);

    // Remove the trail after a short delay to create a fading effect
    setTimeout(() => trail.remove(), 500);
});
