// Gallery image data with unique descriptions
const imageData = {
    1: {
        title: "Love",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Ut sit amet vulputate felis. Vivamus nec turpis ut odio venenatis laoreet. Duis in pellentesque magna. Suspendisse potenti. Donec tincidunt eros in tempor volutpat. Maecenas dignissim lorem vel eros fermentum, a auctor lectus molestie.",
        gradient: "linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)",
        svg: '<path d="M50 85 Q30 70 20 55 Q10 40 20 25 Q35 10 50 20 Q65 10 80 25 Q90 40 80 55 Q70 70 50 85" fill="white" opacity="0.7"/>'
    },
    2: {
        title: "Romance",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        svg: '<circle cx="50" cy="50" r="30" fill="white" opacity="0.7"/><circle cx="50" cy="50" r="20" fill="#f5576c" opacity="0.7"/>'
    },
    3: {
        title: "Warmth",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        svg: '<rect x="20" y="20" width="60" height="60" rx="10" fill="white" opacity="0.7"/>'
    },
    4: {
        title: "Passion",
        description: "Wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquid ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.",
        gradient: "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)",
        svg: '<polygon points="50,10 90,90 10,90" fill="white" opacity="0.7"/>'
    },
    5: {
        title: "Joy",
        description: "Vel eu felis aperiam, nonummy nibh fringilla semper wisi in mauris sed lobortis sit vitae. Volutpat nonummy ipsum ac odio lacus pede. Mauris dui gravida luctus maecenas commodo fringilla vel. Sed tristique turpis vestibulum commodo et rhoncus.",
        gradient: "linear-gradient(135deg, #ffa751 0%, #ffe259 100%)",
        svg: '<circle cx="50" cy="50" r="40" fill="none" stroke="white" stroke-width="8" opacity="0.7"/>'
    },
    6: {
        title: "Together",
        description: "Praesent dapibus blandit nulla, sed sodales nisi sagittis malesuada. Fusce sollicitudin ante vitae massa porta fringilla. Maecenas mi lorem, scelerisque sed varius vestibulum, volutpat id risus. Sed condimentum leo id orci dictumst laoreet dolore.",
        gradient: "linear-gradient(135deg, #fd6e6e 0%, #ff9a56 100%)",
        svg: '<path d="M30 50 L50 30 L70 50 L60 50 L60 70 L40 70 L40 50 Z" fill="white" opacity="0.7"/>'
    },
    7: {
        title: "Connection",
        description: "Nam liber tempor cum soluta nobis est option cumque nihil impedit quo minus id quod maxime placeat facere possimus, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
        gradient: "linear-gradient(135deg, #ff006e 0%, #8338ec 100%)",
        svg: '<circle cx="35" cy="50" r="15" fill="white" opacity="0.7"/><circle cx="65" cy="50" r="15" fill="white" opacity="0.7"/>'
    },
    8: {
        title: "Bloom",
        description: "Nulla mi lacinia est, vel adipiscing mi lacinia sit. Sed non odio. Suspendisse suscipit eros non leo posuere convallis. Nullam in tortor. Phasellus molestie nunc sit amet nisi bibendum, non dictumst magna facilisis. Aliquam erat volutpat.",
        gradient: "linear-gradient(135deg, #fbf0e7 0%, #ff9a56 50%, #ff6a88 100%)",
        svg: '<path d="M50 10 Q60 30 70 50 Q60 70 50 90 Q40 70 30 50 Q40 30 50 10" fill="white" opacity="0.7"/>'
    },
    9: {
        title: "Sparkle",
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos.",
        gradient: "linear-gradient(135deg, #ffb088 0%, #ff9a56 50%, #ff6b9d 100%)",
        svg: '<polygon points="50,15 61,35 82,35 65,50 73,70 50,55 27,70 35,50 18,35 39,35" fill="white" opacity="0.7"/>'
    },
    10: {
        title: "Forever",
        description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores.",
        gradient: "linear-gradient(135deg, #ffa751 0%, #ffe259 50%, #ffde59 100%)",
        svg: '<path d="M50 20 Q70 30 75 50 Q70 70 50 80 Q30 70 25 50 Q30 30 50 20 Z" fill="white" opacity="0.7" stroke="white" stroke-width="3"/>'
    }
};

// Get modal elements
const modal = document.getElementById('imageModal');
const modalClose = document.querySelector('.modal-close');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalImagePlaceholder = document.querySelector('.modal-image-placeholder');
const modalSvg = document.getElementById('modalSvg');
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
    modalImagePlaceholder.style.background = data.gradient;
    modalSvg.innerHTML = data.svg;
    
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

