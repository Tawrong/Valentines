// Array of romantic messages
const romanticMessages = [
    "Let love bloom...",
    "You make my heart flutter...",
    "Forever starts with you...",
    "Love is in the air...",
    "You are my everything...",
    "My heart belongs to you...",
    "With you, every moment is magical...",
    "You are my greatest treasure...",
    "Together forever...",
    "I love you to the moon and back..."
];

// Get the romantic text element
const romanticText = document.getElementById('romantic-text');
let messageIndex = 0;

// Change message on interval
setInterval(() => {
    messageIndex = (messageIndex + 1) % romanticMessages.length;
    romanticText.style.opacity = '0';
    
    setTimeout(() => {
        romanticText.textContent = romanticMessages[messageIndex];
        romanticText.style.opacity = '1';
    }, 300);
}, 4000);

// Add click effects on flowers
const flowers = document.querySelectorAll('.flower');

flowers.forEach((flower) => {
    flower.addEventListener('click', function(e) {
        // Create sparkle effect
        createSparkle(e.pageX, e.pageY);
        
        // Add celebration effect
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });

    // Add mouse hover effects
    flower.addEventListener('mouseenter', function() {
        this.style.filter = 'drop-shadow(0 0 15px rgba(255, 105, 180, 0.8))';
    });

    flower.addEventListener('mouseleave', function() {
        this.style.filter = 'drop-shadow(none)';
    });
});

// Sparkle effect function
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '10px';
    sparkle.style.height = '10px';
    sparkle.style.backgroundColor = '#ff69b4';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.boxShadow = '0 0 10px #ff1744';
    sparkle.style.zIndex = '1000';
    
    document.body.appendChild(sparkle);
    
    // Animate sparkle
    let opacity = 1;
    let scale = 1;
    const sparkleInterval = setInterval(() => {
        opacity -= 0.1;
        scale += 0.5;
        sparkle.style.opacity = opacity;
        sparkle.style.transform = `scale(${scale})`;
        
        if (opacity <= 0) {
            clearInterval(sparkleInterval);
            sparkle.remove();
        }
    }, 50);
}

// Add smooth transitions to romantic text
romanticText.style.transition = 'opacity 0.3s ease';

// Double-click to create heart burst
document.addEventListener('dblclick', function(e) {
    // Only create hearts if double-clicking on flowers
    if (e.target.closest('.flower')) {
        createHeartBurst(e.pageX, e.pageY);
    }
});

function createHeartBurst(x, y) {
    const heartCount = 8;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = '24px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.textContent = '❤️';
        
        document.body.appendChild(heart);
        
        // Random direction
        const angle = (i / heartCount) * Math.PI * 2;
        const velocity = {
            x: Math.cos(angle) * 5,
            y: Math.sin(angle) * 5 - 2
        };
        
        let posX = x;
        let posY = y;
        let velocityY = velocity.y;
        
        const burstInterval = setInterval(() => {
            posX += velocity.x;
            posY += velocityY;
            velocityY += 0.2; // gravity
            
            heart.style.left = posX + 'px';
            heart.style.top = posY + 'px';
            heart.style.opacity = Math.max(0, 1 - Math.abs(posY - y) / 300);
            
            if (posY - y > 300 || heart.style.opacity == 0) {
                clearInterval(burstInterval);
                heart.remove();
            }
        }, 30);
    }
}

// Add some interactivity text on page load
window.addEventListener('load', () => {
    console.log('💕 Happy Valentine\'s Day! 💕');
    console.log('Try clicking on flowers or double-clicking them for effects!');
});

// Keyboard interaction
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        // Create hearts around the screen when space or enter is pressed
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        createHeartBurst(randomX, randomY);
    }
});
