document.addEventListener('DOMContentLoaded', function() {
    
    if (window.location.hash) {
        
        const idAlvo = window.location.hash;
        const elementoAlvo = document.querySelector(idAlvo);
        
        if (elementoAlvo) {
            
            elementoAlvo.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});