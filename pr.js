// Simple JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects for cards
    const cards = document.querySelectorAll('.card, .card-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(0.95)';
            card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(0.8)';
            card.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Add click effect for buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.98)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        });
    });
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});