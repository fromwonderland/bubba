document.addEventListener('DOMContentLoaded', function() {
    console.log('Bubba - Page chargée avec succès');
    
    const swanImage = document.getElementById('swan-image');
    const swanText = document.getElementById('swan-text');
    const passwordContainer = document.getElementById('password-container');
    const passwordInput = document.getElementById('password-input');
    const readButton = document.getElementById('read-button');
    const imageContainer = document.querySelector('.image-container');
    
    let isFirstImage = true;
    let isPasswordShown = false;
    
    // Gestion du clic sur l'image
    swanImage.addEventListener('click', function() {
        if (isFirstImage) {
            // Transition vers la deuxième image
            swanImage.style.opacity = '0';
            
            setTimeout(() => {
                swanImage.src = 'images/swan2.jpeg';
                swanImage.style.opacity = '1';
                swanText.textContent = '☆ oh there you are!';
                isFirstImage = false;
                
                // Afficher le champ de mot de passe après un délai
                setTimeout(() => {
                    passwordContainer.style.display = 'flex';
                    setTimeout(() => {
                        passwordContainer.classList.add('show');
                        isPasswordShown = true;
                    }, 50);
                }, 500);
            }, 300);
        } else {
            // Retour à la première image
            swanImage.style.opacity = '0';
            
            setTimeout(() => {
                swanImage.src = 'images/swan1.jpeg';
                swanImage.style.opacity = '1';
                swanText.textContent = '☆ hello? where are you?';
                isFirstImage = true;
                
                // Cacher le champ de mot de passe
                passwordContainer.classList.remove('show');
                setTimeout(() => {
                    passwordContainer.style.display = 'none';
                    isPasswordShown = false;
                    passwordInput.value = '';
                }, 500);
            }, 300);
        }
    });
    
    // Gestion du bouton "read"
    readButton.addEventListener('click', function() {
        const password = passwordInput.value.trim();
        
        if (password.toLowerCase() === 'lucky star') {
            // Mot de passe correct - faire disparaître le contenu
            imageContainer.style.transition = 'opacity 1s ease';
            imageContainer.style.opacity = '0';
            
            setTimeout(() => {
                // Préparer pour le nouveau contenu (à implémenter plus tard)
                imageContainer.style.display = 'none';
                console.log('Mot de passe correct - prêt pour le nouveau contenu');
            }, 1000);
        } else {
            // Mot de passe incorrect - effet de secousse
            passwordInput.style.animation = 'shake 0.5s';
            setTimeout(() => {
                passwordInput.style.animation = '';
            }, 500);
        }
    });
    
    // Permettre la validation avec la touche Entrée
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            readButton.click();
        }
    });
    
    // Animation d'entrée
    imageContainer.style.opacity = '0';
    imageContainer.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        imageContainer.style.transition = 'opacity 1s ease, transform 1s ease';
        imageContainer.style.opacity = '1';
        imageContainer.style.transform = 'translateY(0)';
    }, 100);
});

// Ajouter l'animation de secousse dans le CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);
