document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');
    
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = parseInt(star.getAttribute('data-value'));
            ratingInput.value = value;
            
            stars.forEach((s, index) => {
                if (index < value) {
                    s.textContent = '★';
                    s.classList.add('active');
                } else {
                    s.textContent = '☆';
                    s.classList.remove('active');
                }
            });
        });
    });
    
    document.getElementById('review-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
       
        if (!ratingInput.value) {
            
            console.error('No rating selected');
            
        }
        
        
        const reviewText = document.getElementById('review').value;
        if (reviewText.trim().length === 0) {
            
            console.error('Review text is empty');
            
        }
        
        alert('Thank you for your review! It will be published after moderation.');
        
        
        this.reset();
        stars.forEach(star => {
            star.textContent = '☆';
            star.classList.remove('active');
        });
        
    });
});
