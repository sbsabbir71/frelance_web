// Basic functionality for the template
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (would need additional HTML/CSS)
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuButton.classList.add('mobile-menu-button');
    document.querySelector('.navbar .container').prepend(mobileMenuButton);
    
    mobileMenuButton.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });
    
    // Simulate loading freelancers (in a real app, this would be an API call)
    function loadMoreFreelancers() {
        // This would be replaced with actual data fetching
        console.log("Loading more freelancers...");
    }
    
    // Event listener for "View All Freelancers" button
    document.querySelector('.btn-view-all').addEventListener('click', loadMoreFreelancers);
    
    // Simple search functionality
    const searchInput = document.querySelector('.hero-search input');
    const searchButton = document.querySelector('.hero-search button');
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            // In a real app, this would redirect to search results
            // window.location.href = `/search?q=${encodeURIComponent(query)}`;
        }
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Rating stars interaction (for when users leave reviews)
    document.querySelectorAll('.freelancer-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('stars')) {
                const stars = e.target;
                alert(`You clicked on ${stars.textContent.trim()} star rating`);
            }
        });
    });
});