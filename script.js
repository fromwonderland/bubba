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
            imageContainer.style.opacity = '0';
            
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
                    
                    .icing {
                        position: absolute;
                        bottom: 145px;
                        width: 120%;
                        height: 35px;
                        background: 
                            radial-gradient(ellipse at 30% 20%, #fce4ec 0%, #f8bbd0 30%, #f48fb1 60%, #e91e63 100%),
                            linear-gradient(90deg, #f48fb1 0%, #f8bbd0 50%, #f48fb1 100%);
                        border-radius: 50% 50% 45% 45% / 70% 70% 30% 30%;
                        left: -10%;
                        z-index: 2;
                        box-shadow: 
                            0 8px 25px rgba(233, 30, 99, 0.3),
                            inset 0 3px 8px rgba(255,255,255,0.6),
                            inset 0 -3px 8px rgba(0,0,0,0.15);
                        border: 2px solid #c2185b;
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
                `;
                document.head.appendChild(cakeStyles);
                
                // Afficher le nouveau contenu
                imageContainer.style.display = 'flex';
                imageContainer.style.flexDirection = 'column';
                imageContainer.style.alignItems = 'center';
                imageContainer.style.opacity = '0';
                
                setTimeout(() => {
                    imageContainer.style.transition = 'opacity 1s ease';
                    imageContainer.style.opacity = '1';
                }, 100);
                
                // Initialiser la logique du gâteau
                initCakeLogic();
                
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

// Fonction pour initialiser la logique du gâteau
function initCakeLogic() {
    const cake = document.getElementById('cake');
    const uiText = document.getElementById('ui-text');
    let candleCount = 0;
    let fireworksStarted = false;

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
    canvas.id = 'fireworks';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
    `;
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
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.update();
            p.draw();

            if (p.alpha <= 0) {
                particles.splice(i, 1);
            }
        }

        requestAnimationFrame(animate);
    }

    function autoLaunch() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * (canvas.height * 0.6); 
        createFirework(x, y);
        
        setTimeout(autoLaunch, Math.random() * 1000 + 400);
    }

    autoLaunch();
    animate();
}
