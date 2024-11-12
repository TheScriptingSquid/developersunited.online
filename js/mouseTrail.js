<script>
  document.addEventListener('mousemove', function(event) {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    document.body.appendChild(trail);

    trail.style.left = `${event.pageX - 5}px`; // Subtract half of the trail size to center it on the cursor
    trail.style.top = `${event.pageY - 5}px`;

    // Remove the trail after a brief duration
    setTimeout(() => {
      trail.remove();
    }, 300); // Adjust the duration of the trail
  });
</script>
