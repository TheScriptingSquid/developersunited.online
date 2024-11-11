// Hide the loading screen once the page is fully loaded
window.addEventListener('load', function () {
  setTimeout(function () {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.opacity = 0;
    loadingScreen.style.pointerEvents = 'none';
  }, 2000); // Set loading duration to 2 seconds
});

