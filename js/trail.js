        /* Styling for the mouse trail effect */
        .trail {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(0, 150, 255, 0.6);
            width: 10px;
            height: 10px;
            pointer-events: none;
            transform: translate(-50%, -50%);
            animation: fade 0.5s ease-out forwards;
        }


    <script>
        // Create mouse trail
        document.addEventListener('mousemove', function(event) {
            var trail = document.createElement('div');
            trail.classList.add('trail');
            
            // Position the trail at the mouse cursor
            trail.style.left = `${event.pageX}px`;
            trail.style.top = `${event.pageY}px`;
            
            // Append the trail to the body
            document.body.appendChild(trail);
            
            // Remove the trail after animation completes
            setTimeout(function() {
                trail.remove();
            }, 500); // Match duration of fade animation
        });
    </script>
