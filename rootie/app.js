// Portfolio App JavaScript - Updated with OptimiHost & No Linktree
(function() {
    'use strict';
    
    // Initialize everything immediately when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializePortfolio);
    } else {
        initializePortfolio();
    }
    
    function initializePortfolio() {
        try {
            // Initialize Feather Icons first
            if (window.feather) {
                feather.replace();
            }
            
            // Set up all functionality immediately
            setupNavigation();
            setupMobileMenu();
            setupProjectCards();
            setupSocialLinks();
            setupScrollEffects();
            setupAnimations();
            
            console.log('✅ Portfolio initialized successfully - 6 projects, no Linktree!');
            
        } catch (error) {
            console.warn('Non-critical initialization error:', error);
        }
    }
    
    // Navigation Setup - Immediate functionality
    function setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    const targetSection = document.querySelector(href);
                    
                    if (targetSection) {
                        const navbarHeight = 70;
                        const offsetTop = targetSection.offsetTop - navbarHeight;
                        
                        // Immediate smooth scroll without loading states
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                        
                        // Update active nav immediately
                        updateActiveNavLink();
                        
                        // Close mobile menu if open
                        const navMenu = document.getElementById('navMenu');
                        const hamburger = document.getElementById('hamburger');
                        if (navMenu) navMenu.classList.remove('active');
                        if (hamburger) hamburger.classList.remove('active');
                    }
                }
            });
        });
    }
    
    // Mobile Menu Setup
    function setupMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        }
    }
    
    // Project Cards - Immediate interaction with new OptimiHost project
    function setupProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const projectName = this.getAttribute('data-project');
                showProjectInfo(projectName);
            });
            
            // Hover effects
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }
    
    // Project Information Display - Updated with OptimiHost
    function showProjectInfo(projectName) {
        const projects = {
            'toscr': {
                title: 'TOSCR Project',
                subtitle: 'thesomewhatyou\'s Old Computer MC Revival',
                description: 'A comprehensive Minecraft optimization modpack designed specifically for older computers with integrated graphics.',
                stats: '254+ downloads • Active development • CC BY-NC-SA 4.0',
                features: [
                    '🚀 100+ FPS optimization for old PCs',
                    '💻 Integrated graphics compatibility',
                    '📅 Monthly updates and support',
                    '👥 Growing community',
                    '🔧 Easy installation process'
                ],
                link: 'https://modrinth.com/user/gabrielpolikerpaul'
            },
            'horror': {
                title: 'Horror Hell',
                subtitle: 'thesomewhatyou\'s Horror Hell',
                description: 'A spine-chilling Minecraft modpack that transforms gameplay into a horror survival experience.',
                stats: 'Forge 1.19.2 • 10+ mods • Shader support',
                features: [
                    '👻 Horror and survival elements',
                    '🎭 Creepypasta integration',
                    '🌟 Shader compatibility',
                    '🎃 Seasonal content updates',
                    '⚡ Optimized performance'
                ],
                link: 'https://modrinth.com/user/gabrielpolikerpaul'
            },
            'gabeos': {
                title: 'GabeOS',
                subtitle: 'Open Source Operating System',
                description: 'An ambitious OS project pushing boundaries in open-source systems development.',
                stats: 'Active development • Open source • Community-driven',
                features: [
                    '💻 Modern OS architecture',
                    '🔄 Continuous development',
                    '🌟 Community contributions welcome',
                    '🛠️ Development tools included',
                    '📖 Well-documented codebase'
                ],
                link: 'https://github.com/thesomewhatyou'
            },
            'gabeos-workflow': {
                title: 'GabeOS-Workflow-Dev',
                subtitle: 'Development Tools & Automation',
                description: 'Development tools and automated workflows for the GabeOS ecosystem, streamlining the development process.',
                stats: 'Active development • CI/CD automation • Build optimization',
                features: [
                    '🔄 CI/CD pipelines',
                    '⚡ Development automation',
                    '🛠️ Build system optimization',
                    '🧪 Testing frameworks',
                    '📊 Performance monitoring'
                ],
                link: 'https://github.com/thesomewhatyou'
            },
            'p2installer': {
                title: 'P2Installer',
                subtitle: 'Player2 Linux Installer',
                description: 'A streamlined installer for Player2 on various Linux distributions with automated setup.',
                stats: 'Linux compatible • User-friendly • Maintained',
                features: [
                    '🐧 Multi-distro support',
                    '⚡ Quick installation process',
                    '👥 Intuitive interface',
                    '📖 Comprehensive documentation',
                    '🔧 Easy configuration management'
                ],
                link: 'https://github.com/thesomewhatyou'
            },
            'optimihost': {
                title: 'OptimiHost',
                subtitle: 'Hosting Solutions & Server Optimization',
                description: 'Contributing to hosting solutions and server optimization, focusing on performance improvements and infrastructure reliability.',
                stats: 'Team collaboration • Active contributor • Performance focused',
                features: [
                    '🚀 Server performance optimization',
                    '📊 Performance monitoring systems',
                    '☁️ Advanced hosting solutions',
                    '🔧 Infrastructure management',
                    '🛡️ Reliability improvements'
                ],
                link: 'https://github.com/thesomewhatyou'
            }
        };
        
        const project = projects[projectName];
        if (project) {
            const message = `${project.title}\n${project.subtitle}\n\n${project.description}\n\n📊 ${project.stats}\n\n✨ Key Features:\n${project.features.join('\n')}\n\n🌐 Learn more: ${project.link}`;
            alert(message);
        }
    }
    
    // Social Links - Immediate functionality (no Linktree)
    function setupSocialLinks() {
        const socialLinks = document.querySelectorAll('a[href^="http"]');
        
        socialLinks.forEach(link => {
            // Ensure proper attributes
            if (!link.hasAttribute('target')) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
            
            // Remove any potential loading states
            link.addEventListener('click', function(e) {
                // Let the browser handle the link naturally - no preventDefault
                const platform = this.getAttribute('aria-label') || this.textContent.trim();
                console.log(`Opening ${platform}: ${this.href}`);
            });
        });
    }
    
    // Scroll Effects - Performance optimized
    function setupScrollEffects() {
        let isScrolling = false;
        
        function handleScroll() {
            if (!isScrolling) {
                requestAnimationFrame(() => {
                    updateActiveNavLink();
                    handleScrollAnimations();
                    updateNavbarBackground();
                    isScrolling = false;
                });
                isScrolling = true;
            }
        }
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Initial call
        handleScroll();
        
        // Counter animation
        setupCounterAnimation();
    }
    
    // Active Navigation Highlighting
    function updateActiveNavLink() {
        try {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            const scrollPos = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                const correspondingNavLink = document.querySelector(`a[href="#${sectionId}"]`);

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    if (correspondingNavLink) {
                        correspondingNavLink.classList.add('active');
                    }
                }
            });
        } catch (error) {
            // Silent fail
        }
    }
    
    // Scroll Animations
    function handleScrollAnimations() {
        const elements = document.querySelectorAll('.fade-in:not(.visible)');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < window.innerHeight - 100) {
                element.classList.add('visible');
            }
        });
    }
    
    // Navbar Background
    function updateNavbarBackground() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            const opacity = window.scrollY > 50 ? '0.95' : '0.9';
            navbar.style.background = `rgba(10, 10, 15, ${opacity})`;
        }
    }
    
    // Counter Animation
    function setupCounterAnimation() {
        const aboutSection = document.querySelector('#about');
        if (!aboutSection) return;
        
        let animated = false;
        
        function checkCounters() {
            if (!animated && aboutSection.getBoundingClientRect().top < window.innerHeight) {
                animateCounters();
                animated = true;
            }
        }
        
        window.addEventListener('scroll', checkCounters, { passive: true });
        checkCounters(); // Initial check
    }
    
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number[data-count]');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const startTime = performance.now();
            
            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const current = Math.floor(target * progress);
                
                counter.textContent = current;
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            }
            
            requestAnimationFrame(updateCounter);
        });
    }
    
    // Animations Setup
    function setupAnimations() {
        // Add fade-in classes
        const animatedSelectors = [
            '.about-content',
            '.project-card',
            '.presence-card',
            '.content-category',
            '.skills-section',
            '.contact-content'
        ];

        animatedSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((element, index) => {
                element.classList.add('fade-in');
                element.style.transitionDelay = `${index * 100}ms`;
            });
        });
        
        // Optional enhancements
        setupSkillTags();
        setupContactHovers();
        setupProjectGridAnimations();
        createFloatingParticles();
        
        // Trigger initial animations
        setTimeout(handleScrollAnimations, 100);
    }
    
    // Project Grid Animations - Enhanced for 6-project layout
    function setupProjectGridAnimations() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach((card, index) => {
            // Stagger animations for visual appeal
            card.style.transitionDelay = `${index * 150}ms`;
            
            // Enhanced hover effects for grid layout
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
                this.style.zIndex = '10';
                this.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.zIndex = '1';
                this.style.boxShadow = '';
            });
        });
    }
    
    // Skill Tags
    function setupSkillTags() {
        const skillTags = document.querySelectorAll('.skill-tag');
        
        skillTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // Contact Hovers
    function setupContactHovers() {
        const contactLinks = document.querySelectorAll('.contact-link');
        
        contactLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }
    
    // Floating Particles (Optional)
    function createFloatingParticles() {
        if (window.innerWidth < 768) return; // Skip on mobile
        
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        const particleCount = Math.min(12, Math.floor(window.innerWidth / 100));
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 8}s`;
            particle.style.animationDuration = `${8 + Math.random() * 4}s`;
            hero.appendChild(particle);
        }
    }
    
    // Responsive Grid Handling
    function handleResponsiveGrid() {
        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return;
        
        function updateGridLayout() {
            const width = window.innerWidth;
            const mainProject = document.querySelector('.main-project');
            
            if (width <= 768) {
                // Mobile: single column
                projectsGrid.style.gridTemplateColumns = '1fr';
                if (mainProject) mainProject.style.gridColumn = 'span 1';
            } else if (width <= 1024) {
                // Tablet: 2 columns
                projectsGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
                if (mainProject) mainProject.style.gridColumn = 'span 2';
            } else {
                // Desktop: 3 columns
                projectsGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
                if (mainProject) mainProject.style.gridColumn = 'span 3';
            }
        }
        
        window.addEventListener('resize', updateGridLayout, { passive: true });
        updateGridLayout(); // Initial call
    }
    
    // Initialize responsive grid
    handleResponsiveGrid();
    
    // Responsive handling
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            const navMenu = document.getElementById('navMenu');
            const hamburger = document.getElementById('hamburger');
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        }
    }, { passive: true });
    
    // Easter eggs (optional fun)
    setupEasterEggs();
    
    function setupEasterEggs() {
        let konamiCode = [];
        const sequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        
        document.addEventListener('keydown', function(e) {
            konamiCode.push(e.keyCode);
            if (konamiCode.length > sequence.length) {
                konamiCode.shift();
            }
            
            if (konamiCode.length === sequence.length && 
                konamiCode.every((code, i) => code === sequence[i])) {
                document.body.style.filter = 'hue-rotate(180deg) saturate(1.5)';
                setTimeout(() => {
                    document.body.style.filter = 'none';
                }, 3000);
                konamiCode = [];
                console.log('🎉 Easter egg! Gabriel approves the 6-project layout!');
            }
        });
        
        // Space bar scrolling
        document.addEventListener('keydown', function(e) {
            if (e.code === 'Space' && !e.target.matches('input, textarea, [contenteditable]')) {
                e.preventDefault();
                window.scrollBy({
                    top: window.innerHeight * 0.8,
                    behavior: 'smooth'
                });
            }
        });
    }
    
})();

// Performance logging
console.log('🚀 Gabriel\'s Portfolio - Updated with OptimiHost');
console.log('✅ 6 balanced projects in grid layout');
console.log('🚫 All Linktree references removed');
console.log('⚡ All interactions work immediately');
console.log('🎯 Navigation scrolls to sections instantly');
console.log('🎨 Smooth animations with balanced grid');