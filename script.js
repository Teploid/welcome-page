// Welcome page functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Welcome page loaded');
    
    // Track page view (будет работать когда добавите Google Analytics)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'welcome_page_viewed', {
            event_category: 'onboarding',
            event_label: 'extension_installed',
            custom_parameter_1: 'chrome_extension'
        });
    }
    
    // Initialize interactive effects
    initializeInteractiveEffects();
    
    // Mark page as loaded
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

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