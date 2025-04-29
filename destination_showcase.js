document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const destinationCards = document.querySelectorAll('.destination-card');

    // Filter destinations based on category
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            destinationCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Redirect to booking.html with destination as a query parameter
    const bookButtons = document.querySelectorAll('.book-btn a');
    bookButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const card = button.closest('.destination-card');
            const destination = card.querySelector('h3').textContent;

            // Redirect to booking.html with the destination as a query parameter
            window.location.href = `booking.html?destination=${encodeURIComponent(destination)}`;
        });
    });
});

// Exclusive Offers Pop-Up Functionality
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("exclusive-offers-popup");
    const popupBtn = document.querySelector(".filter-buttons #exclusive-offers-btn");
    const closePopup = document.querySelector(".close-popup");

    // Show the pop-up when the button is clicked
    popupBtn.addEventListener("click", () => {
        popup.classList.remove("hidden");
        popup.classList.add("visible");
    });

    // Close the pop-up when the close button is clicked
    closePopup.addEventListener("click", () => {
        popup.classList.remove("visible");
        popup.classList.add("hidden");
    });

    // Close the pop-up when clicking outside the content
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.remove("visible");
            popup.classList.add("hidden");
        }
    });
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");

    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show-links");
    });
});

