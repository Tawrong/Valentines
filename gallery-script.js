// Gallery image data with unique descriptions
const imageData = {
    1: {
        title: "Love",
        description: "First Date Natin sa Vigan my love hahaha + Bembang haahahahahahah",
        image: "images/love.jpg"
    },
    2: {
        title: "Warmth",
        description: "Idi napan ta nag ramen idjay Robinsons love ko hahahaha.",
        image: "images/love2.jpg"
    },
    3: {
        title: "Passion",
        description: "Jak malagip nu anya binuya ta love hahaha basta napan ta nag sine buya idi.",
        image: "images/love2.jpg"
    },
    4: {
        title: "Joy",
        description: "Idi immay ka intulod love naggapo kadtoy balay hahahahaha",
        image: "images/love3.jpg"
    },
    5: {
        title: "Together",
        description: "Hihi photoshoot ta love after graduation pic, nga adda dumokdukol love ko hahahaha hays makapamiss",
        image: "images/love4.jpg"
    },
    6: {
        title: "Connection",
        description: "Buya ulit sine my lovee hahahah",
        image: "images/love5.jpg"
    },
    7: {
        title: "Bloom",
        description: "Idjay candon love ko idi adda iti convention yu my love nga dimmagdagas kapay idjay balay sa  tas napan ta nag kape in libre nak hahaha",
        image: "images/love6.jpg"
    },
    8: {
        title: "Sparkle",
        description: "Hays, LDR na tayo here love ko, awan mt pic ta nga ag VC nga mayat love. Mamiss kan love ko huhu agawid kan.",
        image: "images/love7.jpg"
    }
};

// Get modal elements
const modal = document.getElementById('imageModal');
const modalClose = document.querySelector('.modal-close');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalImagePlaceholder = document.querySelector('.modal-image-placeholder');
const modalImage = document.getElementById('modalImage');
const modalContent = document.querySelector('.modal-content');

// Track modal state to prevent double clicks
let isModalAnimating = false;

// Gallery item click effects
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item, index) => {
    item.addEventListener('click', function(e) {
        if (isModalAnimating) return;
        const itemId = this.getAttribute('data-id');
        openModal(itemId);
    });
});

// Open Modal Function with optimized animations
function openModal(itemId) {
    if (isModalAnimating) return;
    isModalAnimating = true;
    
    const data = imageData[itemId];
    
    // Update modal content before showing
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalImage.src = data.image;
    modalImage.alt = data.title;
    
    // Show modal with animation
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Allow animations to complete
    setTimeout(() => {
        isModalAnimating = false;
    }, 500);
}

// Close Modal Function with optimized animations
function closeModal() {
    if (isModalAnimating) return;
    isModalAnimating = true;
    
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    
    setTimeout(() => {
        isModalAnimating = false;
    }, 400);
}

// Close button click
modalClose.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
});

// Close when clicking outside the modal content
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Close on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// Gallery item hover and click effects
galleryItems.forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
        this.style.animation = 'itemPulse 0.4s ease';
    });

    item.style.cursor = 'pointer';
});

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }

    @keyframes itemPulse {
        0%, 100% {
            filter: brightness(1);
        }
        50% {
            filter: brightness(1.1);
        }
    }
`;
document.head.appendChild(style);

// Keyboard navigation with debounce
let currentItemIndex = 0;
let keyboardDebounce = false;

document.addEventListener('keydown', function(e) {
    if (keyboardDebounce || modal.classList.contains('show')) return;
    
    if (e.key === 'ArrowRight') {
        keyboardDebounce = true;
        currentItemIndex = (currentItemIndex + 1) % galleryItems.length;
        galleryItems[currentItemIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => { keyboardDebounce = false; }, 300);
    } else if (e.key === 'ArrowLeft') {
        keyboardDebounce = true;
        currentItemIndex = (currentItemIndex - 1 + galleryItems.length) % galleryItems.length;
        galleryItems[currentItemIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => { keyboardDebounce = false; }, 300);
    }
});

// Double-click for favorite effect
galleryItems.forEach((item) => {
    item.addEventListener('dblclick', function(e) {
        e.preventDefault();
        
        // Create heart burst from the item
        const rect = this.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        createHeartBurst(x, y);
    });
});

function createHeartBurst(x, y) {
    const heartCount = 6;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = '24px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1001';
        heart.textContent = '❤️';
        heart.style.willChange = 'transform';
        
        document.body.appendChild(heart);
        
        // Random direction
        const angle = (i / heartCount) * Math.PI * 2;
        const velocity = {
            x: Math.cos(angle) * 4,
            y: Math.sin(angle) * 4 - 2
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
            heart.style.opacity = Math.max(0, 1 - Math.abs(posY - y) / 250);
            
            if (posY - y > 250 || heart.style.opacity == 0) {
                clearInterval(burstInterval);
                heart.remove();
            }
        }, 30);
    }
}

// Optimize animations on load
window.addEventListener('load', () => {
    // Enable GPU acceleration on gallery grid
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
        galleryGrid.style.willChange = 'transform';
    }
    
    // Stagger animation for gallery items
    galleryItems.forEach((item, index) => {
        item.style.animationDelay = (index * 0.1) + 's';
    });
    
    // Log optimization info
    console.log('💕 Welcome to Valentine\'s Gallery! 💕');
    console.log('✨ Page optimized for smooth animations');
    console.log('📸 Click any image to view details in the modal!');
    console.log('💗 Double-click gallery items for heart effects!');
});

