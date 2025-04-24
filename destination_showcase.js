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

    // Book Now button functionality (can be extended)
    const bookButtons = document.querySelectorAll('.book-btn');
    bookButtons.forEach(button => {
        button.addEventListener('click', () => {
            const destination = button.parentElement.querySelector('h3').textContent;
            alert(`Booking request for ${destination} has been sent!`);
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const bookButtons = document.querySelectorAll('.book-btn');
    const modal = document.getElementById('bookingModal');
    const closeBtn = document.querySelector('.close-btn');
    const bookingForm = document.getElementById('bookingForm');
    const bookingSummary = document.getElementById('bookingSummary');
    const toast = document.getElementById('toast');

    // When "Book Now" is clicked
    bookButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.destination-card');
            const destination = card.querySelector('h3').textContent;
            const price = card.querySelector('.price').textContent;

            // Show booking summary
            bookingSummary.innerHTML = `
                <h3>${destination}</h3>
                <p>${price}</p>
                <hr>
            `;

            // Open modal
            modal.style.display = 'flex';

            // Save booking data (optional)
            localStorage.setItem('currentBooking', JSON.stringify({ destination, price }));
        });
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Handle form submission
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        // Simulate API call (replace with real fetch() in production)
        setTimeout(() => {
            // Show success toast
            toast.style.display = 'block';

            // Redirect after 2 seconds
            setTimeout(() => {
                window.location.href = 'booking.html';
            }, 2000);
        }, 1000);
    });

    // Close modal if clicked outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Function to handle redirection to booking.html with the destination as a query parameter
function redirectToBooking(destination) {
    // Redirect to booking.html with the destination name as a query parameter
    window.location.href = `booking.html?destination=${encodeURIComponent(destination)}`;
}

// Add event listeners to all "Book Now" buttons
document.addEventListener("DOMContentLoaded", function () {
    const bookButtons = document.querySelectorAll(".book-btn");
    bookButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const destination = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            redirectToBooking(destination);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Check localStorage for dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.checked = true;
    }

    // Toggle dark mode on checkbox change
    darkModeToggle.addEventListener("change", function () {
        if (darkModeToggle.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
