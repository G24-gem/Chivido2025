 
        // Enhanced floating hearts
        function createFloatingHeart() {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            
            const heartStyles = ['♥', '💕', '❤️', '💖', '💗', '💝'];
            heart.innerHTML = heartStyles[Math.floor(Math.random() * heartStyles.length)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 8 + 8) + 's';
            heart.style.fontSize = (Math.random() * 20 + 25) + 'px';
            
            const redShades = [
                'rgba(220, 20, 60, 0.7)',
                'rgba(255, 20, 147, 0.6)', 
                'rgba(255, 105, 180, 0.5)',
                'rgba(178, 34, 34, 0.7)'
            ];
            heart.style.color = redShades[Math.floor(Math.random() * redShades.length)];
            
            document.getElementById('heartsContainer').appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.remove();
                }
            }, 12000);
        }
        
        // Create hearts at intervals
        setInterval(createFloatingHeart, 1500);
        
        // Enhanced interactions
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.highlight-card, .memory-card');
            
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    // Create heart burst on hover
                    for(let i = 0; i < 3; i++) {
                        setTimeout(() => createFloatingHeart(), i * 100);
                    }
                });
                
                card.addEventListener('click', function() {
                    this.style.transform = 'translateY(-15px) scale(0.98)';
                    
                    // Heart explosion on click
                    for(let i = 0; i < 5; i++) {
                        setTimeout(() => createFloatingHeart(), i * 50);
                    }
                    
                    setTimeout(() => {
                        this.style.transform = 'translateY(-15px) scale(1.02)';
                    }, 200);
                });
            });
            
            // Smooth parallax scrolling
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('.hero');
                const romanticBg = document.querySelector('.romantic-bg');
                
                if (hero) {
                    hero.style.transform = `translateY(${scrolled * 0.4}px)`;
                }
                if (romanticBg) {
                    romanticBg.style.transform = `translateY(${scrolled * 0.2}px) scale(1.1)`;
                }
            });
            
            // Add sparkle effect on scroll
            let sparkleTimeout;
            window.addEventListener('scroll', function() {
                clearTimeout(sparkleTimeout);
                sparkleTimeout = setTimeout(() => {
                    for(let i = 0; i < 2; i++) {
                        setTimeout(() => createFloatingHeart(), i * 200);
                    }
                }, 100);
            });
        });
        
        // Initial heart burst
        window.addEventListener('load', function() {
            for(let i = 0; i < 8; i++) {
                setTimeout(() => createFloatingHeart(), i * 500);
            }
        });
    