// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Search Functionality
    const searchBtn = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');

    searchBtn.addEventListener('click', function() {
        if (searchInput.value.trim() !== '') {
            alert(`Searching for: "${searchInput.value}"`);
            // In a real app, redirect to search results
            // window.location.href = `/search?q=${encodeURIComponent(searchInput.value)}`;
        }
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && searchInput.value.trim() !== '') {
            alert(`Searching for: "${searchInput.value}"`);
        }
    });

    // Hire Button Click
    document.querySelectorAll('.btn-hire').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Redirecting to hiring page...');
            // In a real app, redirect to checkout or messaging
        });
    });
});