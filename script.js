document.addEventListener("DOMContentLoaded", function () {
    // Navigation Link Hover Effect
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            link.style.textDecoration = "";
        });

        link.addEventListener("mouseleave", function () {
            link.style.textDecoration = "none";
        });
    });

    // Update Last Updated Date
    const lastUpdated = document.getElementById("lastUpdated");
    if (lastUpdated) {
        lastUpdated.innerText = new Date().toLocaleDateString();
    }

    // Lightbox Functionality
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightbox = document.getElementById("close-lightbox");

    if (lightbox && lightboxImg && closeLightbox) {
        window.openLightbox = function (img) {
            lightboxImg.src = img.src;
            lightbox.classList.add("visible");
        };

        // Close lightbox when clicking the "X" button
        closeLightbox.addEventListener("click", function () {
            lightbox.classList.remove("visible");
        });

        // Close lightbox when clicking outside the image
        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                lightbox.classList.remove("visible");
            }
        });
    }
})<script>
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("comment-form");
    const input = document.getElementById("comment-input");
    const commentsContainer = document.getElementById("comments-container");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const commentText = input.value.trim();
        if (commentText === "") return;
        
        const comment = document.createElement("p");
        comment.textContent = commentText;
        commentsContainer.appendChild(comment);
        
        input.value = ""; // Clear input after submission
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Live Clock (12-hour format)
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const amPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert to 12-hour format
        const formattedTime = `${hours}:${minutes.toString().padStart(2, "0")} ${amPm}`;
        document.getElementById("liveClock").innerText = formattedTime;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Auto-Updating Latest Updates
    const updates = [
        "somthing special in fashion",
        "updated music playlist!",
        "added new photos to gallery",
        "rants just got more deranged..."
    ];
    
    const updatesList = document.getElementById("updates-list");
    updates.forEach(update => {
        const li = document.createElement("li");
        li.textContent = update;
        updatesList.appendChild(li);
    });
});

    
    


