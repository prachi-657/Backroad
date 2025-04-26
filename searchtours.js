document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('tourSearchForm');
    const searchInput = document.getElementById('destinationSearch');
    const suggestionsBox = document.getElementById('searchSuggestions');
    const resultsContainer = document.getElementById('searchResults');
    
    // Sample destinations for autocomplete (in real app, fetch from backend)
    const sampleDestinations = [
        "Paris, France", "Bali, Indonesia", "New York, USA", 
        "Tokyo, Japan", "Rome, Italy", "Sydney, Australia"
    ];
    
    // Handle search input
    searchInput.addEventListener('input', function() {
        const input = this.value.toLowerCase();
        if (input.length > 2) {
            const matches = sampleDestinations.filter(dest => 
                dest.toLowerCase().includes(input)
            );
            showSuggestions(matches);
        } else {
            suggestionsBox.style.display = 'none';
        }
    });
    
    // Show suggestions
    function showSuggestions(matches) {
        if (matches.length > 0) {
            suggestionsBox.innerHTML = matches.map(match => 
                `<div onclick="selectSuggestion('${match}')">${match}</div>`
            ).join('');
            suggestionsBox.style.display = 'block';
        } else {
            suggestionsBox.style.display = 'none';
        }
    }
    
    // Form submission
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        suggestionsBox.style.display = 'none'; // Hide suggestions on submit
        if (query) {
            searchTours(query);
        }
    });
    
    // Search tours function (would call your backend API)
    function searchTours(destination) {
        // In a real app, this would be a fetch call to your backend
        console.log(`Searching for tours in: ${destination}`);
        
        // Show loading state
        resultsContainer.innerHTML = '<p class="loading">Searching for tours...</p>';
        
        // Simulate API call with timeout
        setTimeout(() => {
            // This would be replaced with actual data from your backend
            const mockResults = generateMockResults(destination);
            displayResults(mockResults);
        }, 500);
    }

      function displayResults(tours) {
        if (tours.length > 0) {
            resultsContainer.innerHTML = tours.map(tour => `
                <div class="tour-card" style="text-align: center;">
                
                    <div style="padding:15px;">
                        <h3>${tour.title}</h3>
                        <div class="tour-description">
                            ${tour.description.split('. ').slice(1).join('. ')}
                        </div>
                        <p><strong>Duration:</strong> ${tour.duration}</p>
                        <p><strong>Price:</strong> $${tour.price}</p>
                        <a href="booking.html"><button class="book-now-btn">Book Now</button></a>
                    </div>
                </div>
            `).join('');
        } else {
            resultsContainer.innerHTML = `<p class="no-results">No tours found for this destination. Try another search.</p>`;
        }
    }})
   


// Helper function to select a suggestion (must be in global scope)
function selectSuggestion(destination) {
    document.getElementById('destinationSearch').value = destination;
    document.getElementById('searchSuggestions').style.display = 'none';
    document.getElementById('tourSearchForm').dispatchEvent(new Event('submit'));
}

// Mock data generator for demo purposes (must be in global scope)
function generateMockResults(destination) {
    const cityName = destination.split(',')[0].trim();
    const mockTours = [
        {
            title: `5-Day ${cityName} Adventure`,
            description: `Explore the best of ${destination} with our comprehensive tour package. Visit all the major attractions and hidden gems.`,
            duration: "5 days, 4 nights",
            price: Math.floor(Math.random() * 2000) + 500,
            image: `https://source.unsplash.com/random/300x200/?${cityName},tour`
        },
        {
            title: `Luxury ${cityName} Getaway`,
            description: `Experience ${destination} in style with our premium luxury package. Enjoy 5-star accommodations and exclusive experiences.`,
            duration: "7 days, 6 nights",
            price: Math.floor(Math.random() * 3000) + 1500,
            image: `https://source.unsplash.com/random/300x200/?${cityName},luxury`
        },
        {
            title: `Budget ${cityName} Tour`,
            description: `Affordable way to see the highlights of ${destination}. Perfect for travelers on a budget who don't want to miss the essentials.`,
            duration: "3 days, 2 nights",
            price: Math.floor(Math.random() * 1000) + 200,
            image: `https://source.unsplash.com/random/300x200/?${cityName},budget`
        }
    ];
    
    return mockTours;
}
