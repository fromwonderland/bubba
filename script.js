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
        
        if (password.toLowerCase() === 'luckycharm') {
            // Mot de passe correct - faire disparaître le contenu
            imageContainer.style.transition = 'opacity 1s ease';
            
            setTimeout(() => {
                // Remplacer le contenu par le gâteau d'anniversaire
                imageContainer.innerHTML = `
                    <div id="ui-text">☆☆☆ Happy 3rd anniversary to my favorite <br>person in the whole universe! I LOVE YOU ☆☆☆<br></div>
                    <div class="cake-container" id="cake">
                        <div class="layer layer-strawberry"></div>
                        <div class="layer layer-chocolate"></div>
                        <div class="layer layer-vanilla"></div>
                    </div>
                    <div id="scroll-text" class="scroll-text" style="display: none;">scroll down</div>
                `;
                
                // Ajouter les styles spécifiques au gâteau
                const cakeStyles = document.createElement('style');
                cakeStyles.textContent = `
                    .cake-container {
                        position: relative;
                        width: 250px;
                        height: 200px;
                        cursor: pointer;
                        transform-style: preserve-3d;
                        transform: none;
                        transition: transform 0.3s ease;
                        filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
                        z-index: 10;
                    }
                    
                    .cake-container:hover {
                        transform: scale(1.05);
                    }
                    
                    .cake-container:hover .flame {
                        transform: translateX(-50%) scale(1.2);
                    }
                    
                    .layer {
                        position: absolute;
                        width: 100%;
                        border-radius: 0 0 0 0;
                        transform-style: preserve-3d;
                        box-shadow: inset 0 -3px 8px rgba(0,0,0,0.2);
                    }
                    
                    .layer-vanilla {
                        bottom: 0;
                        height: 60px;
                        background: 
                            linear-gradient(180deg, #8b4513 0%, #a0522d 20%, #d2b48c 40%, #f4e4c1 60%, #d2b48c 80%, #8b4513 100%),
                            repeating-linear-gradient(90deg, 
                                transparent 0px, 
                                rgba(139, 69, 19, 0.1) 2px, 
                                transparent 4px);
                        box-shadow: 
                            inset 0 -5px 15px rgba(0,0,0,0.4),
                            0 8px 20px rgba(0,0,0,0.3),
                            inset 0 2px 5px rgba(244, 228, 193, 0.3);
                        border: 2px solid #654321;
                    }
                    
                    .layer-chocolate {
                        bottom: 58px;
                        height: 60px;
                        background: 
                            linear-gradient(180deg, #3e2723 0%, #5d4037 25%, #6d4c41 50%, #795548 75%, #5d4037 100%),
                            repeating-linear-gradient(90deg, 
                                transparent 0px, 
                                rgba(62, 39, 35, 0.2) 3px, 
                                transparent 6px);
                        box-shadow: 
                            inset 0 -5px 15px rgba(0,0,0,0.5),
                            0 5px 15px rgba(0,0,0,0.4),
                            0 -3px 8px rgba(244, 228, 193, 0.15);
                        border: 2px solid #3e2723;
                    }
                    
                    .layer-strawberry {
                        bottom: 116px;
                        height: 60px;
                        background: 
                            linear-gradient(180deg, #c2185b 0%, #e91e63 30%, #f48fb1 60%, #f8bbd0 100%),
                            repeating-linear-gradient(90deg, 
                                transparent 0px, 
                                rgba(194, 24, 91, 0.2) 2px, 
                                transparent 4px);
                        box-shadow: 
                            inset 0 -5px 15px rgba(0,0,0,0.3),
                            0 5px 15px rgba(0,0,0,0.3),
                            0 -3px 8px rgba(93, 64, 55, 0.1);
                        border: 2px solid #c2185b;
                        border-radius: 15px 15px 0 0;
                    }
                    
                    /* Glaçage dégoulinant */
                    .icing::before,
                    .icing::after {
                        content: '';
                        position: absolute;
                        top: 25px;
                        width: 8px;
                        height: 20px;
                        background: linear-gradient(180deg, #f48fb1 0%, #e91e63 100%);
                        border-radius: 0 0 50% 50%;
                        box-shadow: inset 0 2px 4px rgba(255,255,255,0.3);
                    }
                    
                    .icing::before {
                        left: 20%;
                        transform: rotate(-5deg);
                    }
                    
                    .icing::after {
                        right: 25%;
                        transform: rotate(5deg);
                        height: 25px;
                    }
                    
                    /* Décorations sur le gâteau - supprimées */
                    
                    .candle {
                        position: absolute;
                        bottom: 175px;
                        width: 12px;
                        height: 45px;
                        background: linear-gradient(to bottom, #4caf50 0%, #2e7d32 50%, #1b5e20 100%);
                        border-radius: 2px;
                        z-index: 1;
                        box-shadow: 
                            0 2px 8px rgba(0,0,0,0.4),
                            inset 0 1px 3px rgba(255,255,255,0.3);
                        border: 1px solid #1b5e20;
                    }
                    
                    .candle:nth-child(2) {
                        background: linear-gradient(to bottom, #2196f3 0%, #1976d2 50%, #0d47a1 100%);
                        border-color: #0d47a1;
                    }
                    
                    .candle:nth-child(3) {
                        background: linear-gradient(to bottom, #4caf50 0%, #2e7d32 50%, #1b5e20 100%);
                        border-color: #1b5e20;
                    }
                    
                    .flame {
                        position: absolute;
                        top: -18px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 14px;
                        height: 20px;
                        background: radial-gradient(ellipse at bottom, 
                            #ff6b35 0%, 
                            #ff9558 30%, 
                            #ffd93d 60%, 
                            #ffeb3b 100%);
                        border-radius: 50% 50% 20% 20%;
                        box-shadow: 
                            0 0 20px #ff6b35,
                            0 0 35px #ff9558,
                            0 0 50px #ffd93d;
                        animation: flicker 0.1s infinite alternate;
                        transition: transform 0.3s ease;
                    }
                    
                    @keyframes flicker {
                        0% { 
                            transform: translateX(-50%) scale(1) rotate(-2deg); 
                            opacity: 0.9;
                        }
                        100% { 
                            transform: translateX(-50%) scale(1.1) rotate(2deg); 
                            opacity: 1;
                        }
                    }
                    
                    #ui-text {
                        color: white;
                        margin-bottom: 20px;
                        text-align: center;
                        font-size: 1.1rem;
                        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
                        font-family: 'Times New Roman', Times, serif;
                        font-style: italic;
                    }
                    
                    .scroll-text {
                        color: white;
                        margin-top: 30px;
                        text-align: center;
                        font-size: 1rem;
                        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
                        font-family: 'Times New Roman', Times, serif;
                        font-style: italic;
                        opacity: 0;
                        transition: opacity 0.5s ease;
                    }
                    
                    .scroll-text.show {
                        opacity: 1;
                    }
                    
                    /* Styles pour la section musique */
                    .music-section {
                        min-height: 100vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        transition: opacity 1s ease;
                        padding: 10px 0;
                    }
                    
                    .music-section.visible {
                        opacity: 1;
                    }
                    
                    
                    .vinyl-image.spinning {
                        animation: spin 3s linear infinite;
                    }
                    
                    @keyframes spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    
                    .music-question {
                        color: white;
                        font-size: 1.2rem;
                        margin-top: 20px;
                        text-align: center;
                        font-family: 'Times New Roman', Times, serif;
                        font-style: italic;
                        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
                    }
                    
                    .player-container {
                        display: none;
                        width: 100%;
                        max-width: 900px;
                        padding: 20px;
                        margin: 0 auto;
                    }
                    
                    .player-container.visible {
                        display: flex;
                        gap: 50px;
                        align-items: flex-start;
                        justify-content: center;
                        width: 100%;
                        max-width: 900px;
                        margin: 0 auto;
                    }
                    
                    .vinyl-player {
                        flex: 0 0 300px;
                    }
                    
                    .vinyl-player img {
                        width: 100%;
                        max-width: 300px;
                        border-radius: 50%;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    }
                    
                    .playlist-container {
                        flex: 1;
                        background: rgba(255,255,255,0.1);
                        border-radius: 15px;
                        padding: 20px;
                        backdrop-filter: blur(10px);
                        max-width: 400px;
                    }
                    
                    .playlist-title {
                        color: white;
                        font-size: 1.5rem;
                        margin-bottom: 20px;
                        font-family: 'Times New Roman', Times, serif;
                        font-style: italic;
                        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    
                    .song-counter {
                        font-size: 1.2rem;
                        color: #ff85a1;
                        font-weight: bold;
                    }
                    
                    .playlist {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        max-height: 200px;
                        overflow-y: auto;
                    }
                    
                    .playlist-item {
                        color: white;
                        padding: 12px 15px;
                        margin-bottom: 8px;
                        border-radius: 8px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        font-family: 'Times New Roman', Times, serif;
                        font-style: italic;
                        font-size: 1rem;
                        border: 1px solid transparent;
                    }
                    
                    .playlist-item:hover {
                        background: rgba(255,255,255,0.1);
                        border-color: rgba(255,255,255,0.3);
                    }
                    
                    .playlist-item.active {
                        background: rgba(255,133,161,0.2);
                        border-color: #ff85a1;
                    }
                    
                    .music-controls {
                        display: flex;
                        justify-content: center;
                        gap: 20px;
                        margin-top: 20px;
                        padding: 15px;
                        background: rgba(255,255,255,0.05);
                        border-radius: 10px;
                    }
                    
                    .control-btn {
                        background: rgba(255,255,255,0.1);
                        border: 1px solid rgba(255,255,255,0.3);
                        color: white;
                        padding: 10px 15px;
                        border-radius: 5px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        font-family: 'Times New Roman', Times, serif;
                        font-style: normal;
                        font-size: 0.9rem;
                    }
                    
                    .control-btn:hover {
                        background: rgba(255,255,255,0.2);
                        border-color: rgba(255,255,255,0.5);
                    }
                    
                    .control-btn:active {
                        transform: scale(0.95);
                    }
                    
                    /* Styles pour la section voyage */
                    .scroll-again-text {
                        color: white;
                        margin-top: 30px;
                        text-align: center;
                        font-size: 1rem;
                        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
                        font-family: 'Times New Roman', Times, serif;
                        font-style: italic;
                        opacity: 0;
                        transition: opacity 0.5s ease;
                    }
                    
                    .scroll-again-text.show {
                        opacity: 1;
                    }
                    
                    .travel-section {
                        min-height: 100vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        transition: opacity 1s ease;
                        padding: 10px 0;
                    }
                    
                    .travel-section.visible {
                        opacity: 1;
                    }
                    
                    .suit-container {
                        text-align: center;
                        margin-bottom: 30px;
                    }
                    
                    .suit-image {
                        max-width: 400px;
                        width: 100%;
                        height: auto;
                        border-radius: 10px;
                        cursor: pointer;
                        transition: transform 0.3s ease, opacity 0.5s ease;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    }
                    
                    .suit-image:hover {
                        transform: scale(1.05);
                    }
                    
                    .suit-text {
                        color: white;
                        font-size: 1.2rem;
                        margin-top: 20px;
                        text-align: center;
                        font-family: 'Times New Roman', Times, serif;
                        font-style: italic;
                        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
                    }
                    
                    /* Styles pour la section zodiaque */
                    .zodiac-section {
                        min-height: 100vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        transition: opacity 1s ease;
                        padding: 10px 0;
                    }
                    
                    .zodiac-section.visible {
                        opacity: 1;
                    }
                    
                    .zodiac-container {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        gap: 20px;
                        flex-wrap: wrap;
                    }
                    
                    .zodiac-image {
                        max-width: 250px;
                        width: 100%;
                        height: auto;
                        border-radius: 10px;
                        cursor: pointer;
                        transition: transform 0.3s ease;
                        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                    }
                    
                    .zodiac-image:hover {
                        transform: scale(1.1);
                    }
                    
                    .poetic-text {
                        max-width: 600px;
                        margin: 40px auto 20px;
                        text-align: center;
                        color: white;
                        font-family: 'Times New Roman', Times, serif;
                        font-style: italic;
                        font-size: 1.1rem;
                        line-height: 1.8;
                        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
                        padding: 20px;
                        background: rgba(255,255,255,0.05);
                        border-radius: 15px;
                        backdrop-filter: blur(5px);
                    }
                    
                    .poetic-text p {
                        margin: 8px 0;
                        opacity: 0;
                        animation: fadeInText 0.8s ease forwards;
                    }
                    
                    .poetic-text p:nth-child(1) { animation-delay: 0.2s; }
                    .poetic-text p:nth-child(2) { animation-delay: 0.4s; }
                    .poetic-text p:nth-child(3) { animation-delay: 0.6s; }
                    .poetic-text p:nth-child(4) { animation-delay: 0.8s; }
                    .poetic-text p:nth-child(5) { animation-delay: 1.0s; }
                    .poetic-text p:nth-child(6) { animation-delay: 1.2s; }
                    .poetic-text p:nth-child(7) { animation-delay: 1.4s; }
                    .poetic-text p:nth-child(8) { animation-delay: 1.6s; }
                    .poetic-text p:nth-child(9) { animation-delay: 1.8s; }
                    .poetic-text p:nth-child(10) { animation-delay: 2.0s; }
                    .poetic-text p:nth-child(11) { animation-delay: 2.2s; }
                    .poetic-text p:nth-child(12) { animation-delay: 2.4s; }
                    .poetic-text p:nth-child(13) { animation-delay: 2.6s; }
                    .poetic-text p:nth-child(14) { animation-delay: 2.8s; }
                    .poetic-text p:nth-child(15) { animation-delay: 3.0s; }
                    .poetic-text p:nth-child(16) { animation-delay: 3.2s; }
                    .poetic-text p:nth-child(17) { animation-delay: 3.4s; }
                    .poetic-text p:nth-child(18) { animation-delay: 3.6s; }
                    .poetic-text p:nth-child(19) { animation-delay: 3.8s; }
                    .poetic-text p:nth-child(20) { animation-delay: 4.0s; }
                    .poetic-text p:nth-child(21) { animation-delay: 4.2s; }
                    .poetic-text p:nth-child(22) { animation-delay: 4.4s; }
                    .poetic-text p:nth-child(23) { animation-delay: 4.6s; }
                    .poetic-text p:nth-child(24) { animation-delay: 4.8s; }
                    .poetic-text p:nth-child(25) { animation-delay: 5.0s; }
                    .poetic-text p:nth-child(26) { animation-delay: 5.2s; }
                    .poetic-text p:nth-child(27) { animation-delay: 5.4s; }
                    .poetic-text p:nth-child(28) { animation-delay: 5.6s; }
                    .poetic-text p:nth-child(29) { animation-delay: 5.8s; }
                    .poetic-text p:nth-child(30) { animation-delay: 6.0s; }
                    .poetic-text p:nth-child(31) { animation-delay: 6.2s; }
                    .poetic-text p:nth-child(32) { animation-delay: 6.4s; }
                    .poetic-text p:nth-child(33) { animation-delay: 6.6s; }
                    .poetic-text p:nth-child(34) { animation-delay: 6.8s; }
                    .poetic-text p:nth-child(35) { animation-delay: 7.0s; }
                    .poetic-text p:nth-child(36) { animation-delay: 7.2s; }
                    .poetic-text p:nth-child(37) { animation-delay: 7.4s; }
                    .poetic-text p:nth-child(38) { animation-delay: 7.6s; }
                    .poetic-text p:nth-child(39) { animation-delay: 7.8s; }
                    .poetic-text p:nth-child(40) { animation-delay: 8.0s; }
                    
                    @keyframes fadeInText {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    /* Media queries pour les petits écrans */
                    @media (max-width: 768px) {
                        .cake-container {
                            width: 180px;
                            height: 150px;
                        }
                        
                        .vinyl-image {
                            max-width: 120px;
                        }
                        
                        .playlist-container {
                            max-width: 300px;
                        }
                        
                        .playlist-title {
                            font-size: 1.2rem;
                            flex-direction: column;
                            gap: 5px;
                        }
                        
                        .song-counter {
                            font-size: 1rem;
                        }
                        
                        .playlist {
                            max-height: 150px;
                        }
                        
                        .zodiac-image {
                            max-width: 100px;
                        }
                        
                        .poetic-text {
                            max-width: 90%;
                            font-size: 0.9rem;
                            padding: 15px;
                        }
                        
                        .suit-image {
                            max-width: 200px;
                        }
                    }
                    
                    @media (max-width: 480px) {
                        .cake-container {
                            width: 150px;
                            height: 120px;
                        }
                        
                        .vinyl-image {
                            max-width: 100px;
                        }
                        
                        .playlist-container {
                            max-width: 250px;
                        }
                        
                        .playlist-title {
                            font-size: 1rem;
                        }
                        
                        .song-counter {
                            font-size: 0.9rem;
                        }
                        
                        .playlist {
                            max-height: 120px;
                        }
                        
                        .zodiac-image {
                            max-width: 80px;
                        }
                        
                        .poetic-text {
                            font-size: 0.8rem;
                            padding: 10px;
                        }
                        
                        .suit-image {
                            max-width: 150px;
                        }
                    }
                `;
                document.head.appendChild(cakeStyles);
                
                // Afficher le nouveau contenu
                imageContainer.style.display = 'flex';
                imageContainer.style.flexDirection = 'column';
                imageContainer.style.alignItems = 'center';
                imageContainer.style.opacity = '0';
                imageContainer.style.position = 'relative';
                imageContainer.style.zIndex = '10';
                
                setTimeout(() => {
                    imageContainer.style.transition = 'opacity 1s ease';
                    imageContainer.style.opacity = '1';
                }, 100);
                
                // Initialiser la logique du gâteau
                initCakeLogic();
                
                // Initialiser la logique de musique
                initMusicLogic();
                
                console.log('Gâteau d\'anniversaire chargé');
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

// Variables globales pour les feux d'artifice
let fireworksStarted = false;
let animationId = null;
let autoLaunchId = null;

// Fonction pour initialiser la logique du gâteau
function initCakeLogic() {
    const cake = document.getElementById('cake');
    const uiText = document.getElementById('ui-text');
    let candleCount = 0;

    // Position des bougies (en pourcentage horizontal)
    const positions = [25, 50, 75];

    cake.addEventListener('click', () => {
        if (candleCount < 3) {
            addCandle(positions[candleCount]);
            candleCount++;

            if (candleCount === 3) {
                // Les 3 bougies sont ajoutées, lancer les feux d'artifice
                startFireworks();
                fireworksStarted = true;
                
                // Afficher "scroll down"
                const scrollText = document.getElementById('scroll-text');
                scrollText.style.display = 'block';
                setTimeout(() => {
                    scrollText.classList.add('show');
                }, 100);
            }
        }
    });

    function addCandle(leftPos) {
        const candle = document.createElement('div');
        candle.className = 'candle';
        candle.style.left = leftPos + '%';
        
        const flame = document.createElement('div');
        flame.className = 'flame';
        
        candle.appendChild(flame);
        cake.appendChild(candle);
    }
}

// Fonction pour démarrer les feux d'artifice
function startFireworks() {
    // Créer le canvas pour les feux d'artifice
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '5'; // Derrière le gâteau mais devant le fond
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor(x, y, color, speedMultiplier) {
            this.x = x;
            this.y = y;
            this.color = color;
            
            const angle = Math.random() * Math.PI * 2;
            const force = (Math.random() * 8 + 2) * speedMultiplier;
            
            this.vx = Math.cos(angle) * force;
            this.vy = Math.sin(angle) * force;
            
            this.alpha = 1;
            this.friction = 0.96; 
            this.gravity = 0.12;
            this.size = Math.random() * 2 + 1;
            this.decay = Math.random() * 0.015 + 0.01;
            this.flicker = Math.random() > 0.5; 
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            
            if (this.flicker && Math.random() > 0.8) {
                ctx.globalAlpha = 0.2; 
            }

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            
            ctx.shadowBlur = 5;
            ctx.shadowColor = this.color;
            
            ctx.fill();
            ctx.restore();
        }

        update() {
            this.vx *= this.friction;
            this.vy *= this.friction;
            this.vy += this.gravity;
            this.x += this.vx;
            this.y += this.vy;
            this.alpha -= this.decay;
        }
    }

    let particles = [];

    function createFirework(x, y) {
        // Couleurs pastel
        const pastelColors = [
            '#FFB3BA', // Rose pastel
            '#FFDFBA', // Pêche pastel
            '#FFFFBA', // Jaune pastel
            '#BAFFC9', // Vert pastel
            '#BAE1FF', // Bleu pastel
            '#E0BBE4', // Lavande pastel
            '#FFC3E8', // Rose clair pastel
            '#C9F0FF', // Bleu clair pastel
            '#F0E6FF', // Violet pastel
            '#FFE5CC'  // Orange pastel
        ];
        
        const color = pastelColors[Math.floor(Math.random() * pastelColors.length)];
        const particleCount = Math.floor(Math.random() * 60) + 60;
        const speedMultiplier = Math.random() * 1.5 + 0.5;

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(x, y, color, speedMultiplier));
        }
    }

    function animate() {
        // Fond semi-transparent pour l'effet de traînée lumineuse
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // On parcourt à l'envers pour supprimer proprement
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.update();
            p.draw();

            if (p.alpha <= 0) {
                particles.splice(i, 1);
            }
        }

        animationId = requestAnimationFrame(animate);
    }

    function autoLaunch() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * (canvas.height * 0.6); 
        createFirework(x, y);
        
        autoLaunchId = setTimeout(autoLaunch, Math.random() * 1000 + 400);
    }

    function stopFireworks() {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
        if (autoLaunchId) {
            clearTimeout(autoLaunchId);
            autoLaunchId = null;
        }
    }

    function startFireworks() {
        stopFireworks(); // Nettoyer avant de commencer
        fireworksStarted = true;
        autoLaunch();
        animate();
    }

    startFireworks();
}

// Fonction pour initialiser la logique de musique
function initMusicLogic() {
    // Créer la section musique
    const musicSection = document.createElement('div');
    musicSection.className = 'music-section';
    musicSection.innerHTML = `
        <div class="vinyl-container">
            <img id="vinyl-image" class="vinyl-image" src="images/vinyl1.jpeg" alt="Vinyl">
            <p class="music-question">want to listen to some music?</p>
        </div>
        <div class="player-container">
            <div class="vinyl-player">
                <img id="spinning-vinyl" class="vinyl-player" src="images/vinyl2.jpeg" alt="Spinning Vinyl">
            </div>
            <div class="playlist-container">
                <h2 class="playlist-title">
                    <span>☆ anniversary playlist ☆</span>
                    <span class="song-counter" id="song-counter">1/22</span>
                </h2>
                <ul class="playlist" id="playlist">
                    <!-- Playlist sera remplie dynamiquement -->
                </ul>
                <div class="music-controls">
                    <button class="control-btn" id="prev-btn">​⏪​</button>
                    <button class="control-btn" id="play-pause-btn">​⏸️</button>
                    <button class="control-btn" id="next-btn">​⏩</button>
                    <button class="control-btn" id="loop-btn">🔁</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(musicSection);
    
    // Variables pour la logique musique
    let currentSongIndex = 0;
    let isPlaying = false;
    let isLooping = false;
    let clickCount = 0;
    let lastClickTime = 0;
    let currentAudio = null;
    
    // Playlist statique pour l'instant
    const playlist = [
        { title: 'At Last', artist: 'Etta James', file: 'At Last.mp3' },
        { title: 'Best Friend', artist: 'Sofi Tukker', file: 'Best Friend.mp3' },
        { title: 'Burning Love', artist: 'Elvis Presley', file: 'Burning Love.mp3' },
        { title: 'Can\'t Take My Eyes off You', artist: 'Frankie Valli', file: 'Can\'t Take My Eyes off You.mp3' },
        { title: 'Come On Eileen', artist: 'Dexys Midnight Runners', file: 'Come On Eileen.mp3' },
        { title: 'Cool Cat', artist: 'Queen', file: 'Cool Cat.mp3' },
        { title: 'Everywhere', artist: 'Fleetwood Mac', file: 'Everywhere.mp3' },
        { title: 'Going Gets Tough', artist: 'Nina Simone', file: 'Going Gets Tough.mp3' },
        { title: 'Here Comes The Sun', artist: 'The Beatles', file: 'Here Comes The Sun.mp3' },
        { title: 'Hooked On A Feeling', artist: 'Blue Swede', file: 'Hooked On A Feeling.mp3' },
        { title: 'How Deep Is Your Love', artist: 'Bee Gees', file: 'How Deep Is Your Love.mp3' },
        { title: 'Say you love me', artist: 'Fleetwood Mac', file: 'Say You Love Me.mp3' },
        { title: 'I Want To Hold Your Hand', artist: 'The Beatles', file: 'I Want To Hold Your Hand.mp3' },
        { title: 'Spooky', artist: 'Dusty Springfield', file: 'Spooky.mp3' },
        { title: 'It\'s Not For Me To Say', artist: 'Johnny Mathis', file: 'It\'s Not For Me To Say.mp3' },
        { title: 'Lay All Your Love On Me', artist: 'ABBA', file: 'Lay All Your Love On Me.mp3' },
        { title: 'Our House', artist: 'Madness', file: 'Our House.mp3' },
        { title: 'Put Your Hand On My Shoulder', artist: 'Paul Anka', file: 'Put Your Hand On My Shoulder.mp3' },
        { title: 'Raindrops Keep Fallin\' On My Head', artist: 'B.J. Thomas', file: 'Raindrops Keep Fallin\' On My Head.mp3' },
        { title: 'Tea for Two', artist: 'Doris Day', file: 'Tea for Two.mp3' },
        { title: 'Valentine', artist: 'Etta James', file: 'Valentine.mp3' },
        { title: 'Wild Horses', artist: 'The Rolling Stones', file: 'Wild Horses.mp3' },
        { title: 'You Make My Dreams (Come True)', artist: 'Hall & Oates', file: 'You Make My Dreams (Come True).mp3' },
        { title: 'Yours', artist: 'Ella Fitzgerald', file: 'Yours.mp3' }
    ];
    
    // Remplir la playlist
    const playlistElement = document.getElementById('playlist');
    playlist.forEach((song, index) => {
        const li = document.createElement('li');
        li.className = 'playlist-item';
        li.textContent = `${song.title} - ${song.artist}`;
        li.dataset.index = index;
        if (index === 0) li.classList.add('active');
        playlistElement.appendChild(li);
    });
    
    // Éléments DOM
    const vinylImage = document.getElementById('vinyl-image');
    const vinylContainer = document.querySelector('.vinyl-container');
    const spinningVinyl = document.getElementById('spinning-vinyl');
    const playerContainer = document.querySelector('.player-container');
    const musicQuestion = document.querySelector('.music-question');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const loopBtn = document.getElementById('loop-btn');
    const songCounter = document.getElementById('song-counter');
    
    // Fonction pour mettre à jour le compteur de chansons
    function updateSongCounter() {
        songCounter.textContent = `${currentSongIndex + 1}/24`;
    }
    
    // Initialiser le compteur
    updateSongCounter();
    
    // Gestion du clic sur le vinyle
    vinylImage.addEventListener('click', () => {
        vinylContainer.style.opacity = '0';
        setTimeout(() => {
            vinylContainer.style.display = 'none';
            playerContainer.classList.add('visible');
            playerContainer.style.opacity = '0';
            setTimeout(() => {
                playerContainer.style.opacity = '1';
            }, 100);
        }, 500);
    });
    
    // Gestion du clic sur les chansons de la playlist
    playlistElement.addEventListener('click', (e) => {
        if (e.target.classList.contains('playlist-item')) {
            const clickedIndex = parseInt(e.target.dataset.index);
            if (clickedIndex === currentSongIndex && isPlaying) {
                // Double clic sur la même chanson -> reprise
                currentSongIndex = 0;
                updateActiveSong();
                loadSong(currentSongIndex);
                playSong();
            } else {
                currentSongIndex = clickedIndex;
                updateActiveSong();
                loadSong(currentSongIndex);
                playSong();
            }
        }
    });
    
    // Fonctions de contrôle audio
    function loadSong(index) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.remove();
        }
        
        const song = playlist[index];
        currentAudio = new Audio(`playlist/${song.file}`);
        currentAudio.addEventListener('ended', () => {
            if (isLooping) {
                // Rejouer la même chanson
                currentAudio.currentTime = 0;
                currentAudio.play();
            } else {
                // Passer à la chanson suivante
                currentSongIndex = (currentSongIndex + 1) % playlist.length;
                updateActiveSong();
                playSong();
            }
        });
        
        currentAudio.addEventListener('error', (e) => {
            console.error('Erreur de chargement audio:', e);
        });
    }
    
    function updateActiveSong() {
        document.querySelectorAll('.playlist-item').forEach((item, index) => {
            item.classList.toggle('active', index === currentSongIndex);
        });
        updateSongCounter();
    }
    
    function playSong() {
        if (!currentAudio || currentAudio.src !== `playlist/${playlist[currentSongIndex].file}`) {
            loadSong(currentSongIndex);
        }
        
        isPlaying = true;
        playPauseBtn.textContent = '⏸️';
        spinningVinyl.classList.add('spinning');
        
        currentAudio.play().catch(error => {
            console.error('Erreur de lecture:', error);
        });
    }
    
    function pauseSong() {
        isPlaying = false;
        playPauseBtn.textContent = '▶️';
        spinningVinyl.classList.remove('spinning');
        
        if (currentAudio) {
            currentAudio.pause();
        }
    }
    
    // Gestion du bouton play/pause
    playPauseBtn.addEventListener('click', () => {
        const currentTime = Date.now();
        if (currentTime - lastClickTime < 300) {
            clickCount++;
        } else {
            clickCount = 1;
        }
        lastClickTime = currentTime;
        
        if (clickCount === 1) {
            if (isPlaying) {
                pauseSong();
            } else {
                playSong();
            }
        } else if (clickCount === 2) {
            // Double clic -> reprise depuis le début
            currentSongIndex = 0;
            updateActiveSong();
            playSong();
            clickCount = 0;
        }
        
        setTimeout(() => {
            clickCount = 0;
        }, 400);
    });
    
    // Gestion du bouton précédent
    prevBtn.addEventListener('click', () => {
        const currentTime = Date.now();
        if (currentTime - lastClickTime < 300) {
            clickCount++;
        } else {
            clickCount = 1;
        }
        lastClickTime = currentTime;
        
        if (clickCount === 2) {
            // Double clic -> chanson précédente
            currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
            updateActiveSong();
            playSong();
            clickCount = 0;
        }
        
        setTimeout(() => {
            clickCount = 0;
        }, 400);
    });
    
    // Gestion du bouton suivant
    nextBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        updateActiveSong();
        playSong();
    });
    
    // Gestion du bouton loop
    loopBtn.addEventListener('click', () => {
        isLooping = !isLooping;
        loopBtn.style.background = isLooping ? 'rgba(255,133,161,0.3)' : 'rgba(255,255,255,0.1)';
        loopBtn.style.borderColor = isLooping ? '#ff85a1' : 'rgba(255,255,255,0.3)';
    });
    
    // Fonctions de contrôle
    function updateActiveSong() {
        document.querySelectorAll('.playlist-item').forEach((item, index) => {
            item.classList.toggle('active', index === currentSongIndex);
        });
        updateSongCounter();
    }
    
    function playSong() {
        isPlaying = true;
        playPauseBtn.textContent = '⏸️';
        spinningVinyl.classList.add('spinning');
    }
    
    function pauseSong() {
        isPlaying = false;
        playPauseBtn.textContent = '▶️​';
        spinningVinyl.classList.remove('spinning');
    }
    
    // Gestion du scroll pour afficher la section musique
    let musicSectionShown = false;
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        if (scrollPosition >= documentHeight * 0.3 && !musicSectionShown) {
            musicSection.classList.add('visible');
            musicSectionShown = true;
        }
    });
    
    // Créer la phrase "scroll down again" sous la playlist
    const scrollAgainText = document.createElement('div');
    scrollAgainText.className = 'scroll-again-text';
    scrollAgainText.textContent = 'scroll down again';
    musicSection.appendChild(scrollAgainText);
    
    // Afficher "scroll down again" après l'apparition de la musique
    setTimeout(() => {
        scrollAgainText.classList.add('show');
    }, 2000);
    
    // Créer la section voyage
    const travelSection = document.createElement('div');
    travelSection.className = 'travel-section';
    travelSection.innerHTML = `
        <div class="suit-container">
            <img id="suit-image" class="suit-image" src="images/suit1.jpeg" alt="Suit">
            <p class="suit-text">let's travel</p>
        </div>
    `;
    
    document.body.appendChild(travelSection);
    
    // Variables pour la logique voyage
    let currentSuitImage = 1;
    
    // Éléments DOM pour la section voyage
    const suitImage = document.getElementById('suit-image');
    const suitContainer = document.querySelector('.suit-container');
    const suitText = document.querySelector('.suit-text');
    
    // Gestion du clic sur les images suit
    suitImage.addEventListener('click', () => {
        if (currentSuitImage === 1) {
            // Passage à suit2.jpeg
            suitImage.style.opacity = '0';
            setTimeout(() => {
                suitImage.src = 'images/suit2.jpeg';
                suitText.textContent = 'now open the suitcase';
                suitImage.style.opacity = '1';
                currentSuitImage = 2;
            }, 500);
        } else if (currentSuitImage === 2) {
            // Ouvrir la valise quand on clique sur suit2.jpeg
            suitImage.style.opacity = '0';
            setTimeout(() => {
                suitImage.src = 'images/suit3.jpeg';
                suitText.textContent = 'scroll down some more';
                suitImage.style.opacity = '1';
                currentSuitImage = 3;
                openSuitcase();
            }, 500);
        }
    });
    
    // Fonction pour ouvrir la valise
    function openSuitcase() {
        const suitcaseImages = [
            'boot.jpeg',
            'cats.jpeg', 
            'heartshoes.jpeg',
            'j.jpeg',
            'luck.jpeg',
            'psiloveyou.jpeg',
            'starcharm.jpeg',
            'charm2.jpeg',
            'onepiece.jpeg',
            'onepiece2.jpeg',
            'noodles.jpeg',
            'basketball.jpeg',
            'celtics.jpeg',
            'lol.jpeg',
            'minecraft.jpeg',
            'rose.jpeg',
            'bee.jpeg',
            'sushi.jpeg',
            'weliveintime.jpeg',
            'boupking.jpeg',
            'cards.jpeg',
            'c.jpeg',
            'camp1.jpeg',
            'camp2.jpeg',
            'camp3.jpeg'
        ];
        
        // Créer un conteneur pour les images de la valise
        const suitcaseContainer = document.createElement('div');
        suitcaseContainer.className = 'suitcase-container';
        suitcaseContainer.style.position = 'absolute';
        suitcaseContainer.style.top = travelSection.offsetTop + 'px';
        suitcaseContainer.style.left = '0';
        suitcaseContainer.style.width = '100%';
        suitcaseContainer.style.height = '2000px'; // Hauteur suffisante pour contenir toutes les images
        suitcaseContainer.style.pointerEvents = 'none';
        suitcaseContainer.style.zIndex = '1000';
        
        // Ajouter chaque image avec position aléatoire
        suitcaseImages.forEach((imageName, index) => {
            const img = document.createElement('img');
            img.src = `suitcase/${imageName}`;
            img.className = 'suitcase-item';
            img.style.position = 'absolute';
            img.style.width = '100px'; // Taille plus petite
            img.style.height = 'auto';
            img.style.borderRadius = '8px';
            img.style.boxShadow = '0 3px 10px rgba(0,0,0,0.3)';
            img.style.cursor = 'move';
            img.style.pointerEvents = 'auto';
            img.style.transition = 'transform 0.2s ease';
            img.style.zIndex = '1001';
            
            // Position aléatoire près du centre de l'écran (relatif à la section voyage)
            const sectionCenterX = window.innerWidth / 2;
            const sectionCenterY = 400; // Centre relatif à la section voyage
            const spreadRadius = 200; // Rayon de dispersion autour du centre
            
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * spreadRadius;
            const randomX = sectionCenterX + Math.cos(angle) * distance - 50; // -50 pour centrer l'image
            const randomY = sectionCenterY + Math.sin(angle) * distance - 50; // -50 pour centrer l'image
            
            img.style.left = randomX + 'px';
            img.style.top = randomY + 'px';
            
            // Animation d'apparition
            img.style.opacity = '0';
            img.style.transform = 'scale(0.3) rotate(180deg)';
            
            suitcaseContainer.appendChild(img);
            
            // Animation d'apparition progressive
            setTimeout(() => {
                img.style.opacity = '1';
                img.style.transform = 'scale(1) rotate(0deg)';
            }, index * 80); // Apparition plus rapide
            
            // Rendre l'image déplaçable
            makeDraggable(img);
        });
        
        document.body.appendChild(suitcaseContainer);
        
        // Sauvegarder les positions dans localStorage
        loadSavedPositions();
    }
    
    // Fonction pour rendre un élément déplaçable
    function makeDraggable(element) {
        let isDragging = false;
        let startX = 0;
        let startY = 0;
        let initialLeft = 0;
        let initialTop = 0;
        
        // Restaurer la position sauvegardée
        const savedPosition = localStorage.getItem(element.src);
        if (savedPosition) {
            const pos = JSON.parse(savedPosition);
            element.style.left = pos.x + 'px';
            element.style.top = pos.y + 'px';
        }
        
        // Détecter si c'est un appareil tactile
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        if (isTouchDevice) {
            // Événements tactiles pour mobile
            element.addEventListener('touchstart', touchStart, { passive: false });
            document.addEventListener('touchmove', touchMove, { passive: false });
            document.addEventListener('touchend', touchEnd);
        } else {
            // Événements souris pour desktop
            element.addEventListener('mousedown', dragStart);
            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', dragEnd);
        }
        
        function touchStart(e) {
            e.preventDefault();
            const touch = e.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
            
            // Position initiale de l'élément
            initialLeft = parseInt(element.style.left) || 0;
            initialTop = parseInt(element.style.top) || 0;
            
            if (e.target === element) {
                isDragging = true;
                element.style.zIndex = '1002';
                element.style.transform = 'scale(1.2)';
                element.style.boxShadow = '0 8px 25px rgba(0,0,0,0.4)';
                element.style.cursor = 'grabbing';
            }
        }
        
        function touchMove(e) {
            if (isDragging) {
                e.preventDefault();
                const touch = e.touches[0];
                
                // Calculer la différence de position
                const deltaX = touch.clientX - startX;
                const deltaY = touch.clientY - startY;
                
                // Appliquer la différence à la position initiale
                const newLeft = initialLeft + deltaX;
                const newTop = initialTop + deltaY;
                
                element.style.left = newLeft + 'px';
                element.style.top = newTop + 'px';
            }
        }
        
        function touchEnd(e) {
            if (isDragging) {
                isDragging = false;
                element.style.zIndex = '1001';
                element.style.transform = 'scale(1)';
                element.style.boxShadow = '0 3px 10px rgba(0,0,0,0.3)';
                element.style.cursor = 'move';
                
                // Sauvegarder la position finale
                const finalLeft = parseInt(element.style.left) || 0;
                const finalTop = parseInt(element.style.top) || 0;
                const position = { x: finalLeft, y: finalTop };
                localStorage.setItem(element.src, JSON.stringify(position));
            }
        }
        
        function dragStart(e) {
            // Position de la souris au début du drag
            startX = e.clientX;
            startY = e.clientY;
            
            // Position initiale de l'élément
            initialLeft = parseInt(element.style.left) || 0;
            initialTop = parseInt(element.style.top) || 0;
            
            if (e.target === element) {
                isDragging = true;
                element.style.zIndex = '1002';
                element.style.transform = 'scale(1.2)';
                element.style.boxShadow = '0 8px 25px rgba(0,0,0,0.4)';
                element.style.cursor = 'grabbing';
                e.preventDefault(); // Empêche la sélection de texte
            }
        }
        
        function drag(e) {
            if (isDragging) {
                e.preventDefault();
                
                // Calculer la différence de position
                const deltaX = e.clientX - startX;
                const deltaY = e.clientY - startY;
                
                // Appliquer la différence à la position initiale
                const newLeft = initialLeft + deltaX;
                const newTop = initialTop + deltaY;
                
                element.style.left = newLeft + 'px';
                element.style.top = newTop + 'px';
            }
        }
        
        function dragEnd(e) {
            if (isDragging) {
                isDragging = false;
                element.style.zIndex = '1001';
                element.style.transform = 'scale(1)';
                element.style.boxShadow = '0 3px 10px rgba(0,0,0,0.3)';
                element.style.cursor = 'move';
                
                // Sauvegarder la position finale
                const finalLeft = parseInt(element.style.left) || 0;
                const finalTop = parseInt(element.style.top) || 0;
                const position = { x: finalLeft, y: finalTop };
                localStorage.setItem(element.src, JSON.stringify(position));
            }
        }
    }
    
    // Fonction pour charger les positions sauvegardées
    function loadSavedPositions() {
        const suitcaseItems = document.querySelectorAll('.suitcase-item');
        suitcaseItems.forEach(item => {
            const savedPosition = localStorage.getItem(item.src);
            if (savedPosition) {
                const pos = JSON.parse(savedPosition);
                item.style.left = pos.x + 'px';
                item.style.top = pos.y + 'px';
            }
        });
    }
    
    // Gestion du scroll pour afficher la section voyage
    let travelSectionShown = false;
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Vérifier que la section musique est visible avant d'afficher la section voyage
        if (musicSectionShown && scrollPosition >= documentHeight * 0.6 && !travelSectionShown) {
            travelSection.classList.add('visible');
            travelSectionShown = true;
        }
    });
    
    // Créer la section zodiaque
    const zodiacSection = document.createElement('div');
    zodiacSection.className = 'zodiac-section';
    zodiacSection.innerHTML = `
        <div class="zodiac-container">
            <img id="cancer-image" class="zodiac-image" src="images/cancer.jpeg" alt="Cancer">
            <img id="dancing-image" class="zodiac-image" src="images/vinyl3.jpeg" alt="Dancing">
            <img id="scorpio-image" class="zodiac-image" src="images/scorpio.jpeg" alt="Scorpio">
        </div>
        <div class="poetic-text">
            <p>polish my feelings with laughs</p>
            <p>you bring life to my crafts like answers on a telegraph</p>
            <p>i could fall for every version of you.</p>
            <p>sew back the tapestry of my heart you're all a girl could ever want.</p>
            <br>
            <p>breaking my tendencies</p>
            <p>your arms all over me</p>
            <p>it's like telepathy.</p>
            <p>you decode my heart</p>
            <p>like i'm an open door</p>
            <p>i'm in your shadow</p>
            <p>yet you enlighten me,</p>
            <p>sweet land where all my desires drink wide</p>
            <p>just stay with me for a while</p>
            <p>i'd love for you to call me "mine".</p>
            <br>
            <p>you light my fire</p>
            <p>you're all i desire</p>
            <p>both our hearts beat faster</p>
            <p>a speed even light can't beat.</p>
            <p>trust one another and i'm yours forever</p>
            <p>i fall, you catch me, i'm fine.</p>
            <p>feathers and clouds, glitter, cried mascara</p>
            <p>we're on the phone, it's like you're right there</p>
            <p>hugging me while i break down on the bathroom floor</p>
            <p>suddenly i don't feel so sore.</p>
            <br>
            <p>i'm in love</p>
            <p>i'm. in. love.</p>
            <p>with you.</p>
            <p>you made me fall in love with myself too.</p>
            <p>whenever you're near, all my ghosts disappear</p>
            <p>every memory's like a cherished polaroid.</p>
            <p>our jokes are unforgettable.</p>
            <br>
            <p>glass</p>
            <p>on the floor, it's painful but painted</p>
            <p>with matches, all burnt and thrown away.</p>
            <p>you taught me not to let the pain take over.</p>
            <p>wish i kept dreaming of your warmth every night</p>
            <p>you're precious like the moon but so full of sunlight</p>
            <p>i think of you and every ink tear evaporates.</p>
            <br>
            <p>your skin is like nothing i've ever touched before</p>
            <p>it swallows me deep and i always want more</p>
            <p>only three words and i wake another day</p>
            <p>you're by my side, always.</p>
            <br>
            <p>snow on my face while i feel your embrace</p>
            <p>you're all i ever needed.</p>
            <p>and i can't wait to grow up with you and keep singing happy birthday too</p>
            <p><3</p>
        </div>
    `;
    
    document.body.appendChild(zodiacSection);
    
    // Gestion du scroll pour afficher la section zodiaque
    let zodiacSectionShown = false;
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Vérifier que la section voyage est visible avant d'afficher la section zodiaque
        if (travelSectionShown && scrollPosition >= documentHeight * 0.85 && !zodiacSectionShown) {
            zodiacSection.classList.add('visible');
            zodiacSectionShown = true;
        }
    });
    
    // Gestion du focus de la page pour les feux d'artifice
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // Page cachée - arrêter les feux d'artifice
            stopFireworks();
        } else {
            // Page visible - reprendre les feux d'artifice s'ils étaient actifs
            if (fireworksStarted) {
                startFireworks();
            }
        }
    });
    
    window.addEventListener('blur', () => {
        // Fenêtre perdue - arrêter les feux d'artifice
        if (fireworksStarted) {
            stopFireworks();
        }
    });
    
    window.addEventListener('focus', () => {
        // Fenêtre récupérée - reprendre les feux d'artifice
        if (fireworksStarted) {
            startFireworks();
        }
    });
    
    // Simulation de fin de chanson pour le loop
    setInterval(() => {
        if (isPlaying && isLooping) {
            // Simuler la fin de la chanson et la rejouer
            // Dans une vraie implémentation, ceci serait déclenché par l'événement 'ended' de l'audio
            console.log('Looping current song');
        }
    }, 3000); // Toutes les 3 secondes pour la simulation
}
