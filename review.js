document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');
    const reviewForm = document.getElementById('review-form');
    let currentRating = 0;

    // Initialize stars
    const updateStars = (rating) => {
        stars.forEach((star, index) => {
            const isActive = index < rating;
            star.textContent = isActive ? '★' : '☆';
            star.classList.toggle('active', isActive);
        });
    };

    // Star click handler
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = parseInt(star.getAttribute('data-value'));
            // Toggle: if clicking the current rating, reset to 0
            currentRating = currentRating === value ? 0 : value;
            ratingInput.value = currentRating;
            updateStars(currentRating);
        });
    });

    // Hover effects for better UX
    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            const hoverValue = parseInt(star.getAttribute('data-value'));
            updateStars(hoverValue);
        });
        
        star.addEventListener('mouseout', () => {
            updateStars(currentRating);
        });
    });

    // Form submission with validation
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!currentRating || currentRating < 1) {
            alert('Please select at least 1 star before submitting.');
            return;
        }
        
        alert('Thank you for your review! It will be published after moderation.');
        
        // Optional: Send data to server here
        
        // Reset form
        this.reset();
        currentRating = 0;
        updateStars(0);
    });
});
