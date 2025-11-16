// Welcome page functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Welcome page loaded');
    
    // Track page view with Vercel Analytics
    if (typeof window.va !== 'undefined') {
        window.va('track', 'Welcome Page Viewed', {
            source: getUrlParameter('source') || 'direct',
            version: getUrlParameter('version') || 'unknown'
        });
    }
    
    // Initialize interactive effects
    initializeInteractiveEffects();
    
    // Track footer link clicks
    initializeAnalyticsTracking();
    
    // Mark page as loaded
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Initialize analytics tracking for interactions
function initializeAnalyticsTracking() {
    // Track footer link clicks
    const footerLink = document.querySelector('.footer-link');
    if (footerLink && typeof window.va !== 'undefined') {
        footerLink.addEventListener('click', function() {
            window.va('track', 'Footer Link Clicked', {
                link: 'SVGBackgrounds.com'
            });
        });
    }
    
    // Track step card interactions
    const stepCards = document.querySelectorAll('.step-card');
    stepCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            if (typeof window.va !== 'undefined') {
                window.va('track', 'Step Card Clicked', {
                    step: index + 1
                });
            }
        });
    });
}

// Keyboard shortcuts
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case '1':
                // Focus on step 1
                document.querySelector('.step-card:first-child')?.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
                break;
                
            case '2':
                // Focus on step 2
                document.querySelector('.step-card:last-child')?.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
                break;
        }
    });
}

// Interactive effects
function initializeInteractiveEffects() {
    // Initialize keyboard shortcuts
    initializeKeyboardShortcuts();
}



// Error handling
window.addEventListener('error', function(e) {
    console.error('❌ Welcome page error:', e.error);
    
    // Track errors if analytics is available
    if (typeof gtag !== 'undefined') {
        gtag('event', 'welcome_page_error', {
            event_category: 'error',
            event_label: e.error?.message || 'unknown_error'
        });
    }
});
