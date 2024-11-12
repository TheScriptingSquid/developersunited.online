// Mouse click glow ring effect
document.addEventListener('click', function (e) {
    const glowRing = document.createElement('div');
    glowRing.classList.add('glow-ring');
    document.body.appendChild(glowRing);

    const size = Math.random() * 20 + 30;  // Random size for ring
    glowRing.style.width = size + 'px';
    glowRing.style.height = size + 'px';
    glowRing.style.left = e.clientX - size / 2 + 'px';
    glowRing.style.top = e.clientY - size / 2 + 'px';

    // Remove the ring after animation completes
    setTimeout(() => glowRing.remove(), 600);  // Matches the animation duration
});
