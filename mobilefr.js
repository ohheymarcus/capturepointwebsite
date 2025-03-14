(function() {
    // Ensure viewport meta tag is present for mobile responsiveness
    function addViewportMeta() {
        if (!document.querySelector('meta[name="viewport"]')) {
            let meta = document.createElement('meta');
            meta.name = "viewport";
            meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
            document.head.appendChild(meta);
        }
    }

    // Detect if the user is on a mobile device
    function isMobileDevice() {
        return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    // Apply mobile-friendly styles dynamically
    function applyMobileStyles() {
        if (isMobileDevice()) {
            document.body.style.fontSize = "16px";
            document.body.style.padding = "10px";
            document.body.style.overflowX = "hidden";
            
            // Example: Make images and iframes responsive
            document.querySelectorAll('img, iframe').forEach(el => {
                el.style.maxWidth = "100%";
                el.style.height = "auto";
            });
        }
    }

    // Enable touch event improvements
    function enableTouchFriendly() {
        document.addEventListener("touchstart", function(){}, true);
    }

    // Run functions
    addViewportMeta();
    applyMobileStyles();
    enableTouchFriendly();
})();
