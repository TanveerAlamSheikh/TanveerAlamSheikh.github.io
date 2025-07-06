// Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Close mobile menu if open
                navLinks.classList.remove('active');
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 120,
                    behavior: 'smooth'
                });
                
                // Update active link
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
        
        // Active link on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section, footer');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
        
        // Set home as active initially
        document.querySelector('.nav-links a[href="#home"]').classList.add('active');
        
        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        const themeIcon = themeToggle.querySelector('i');
        
        // Check for saved theme preference or prefer dark scheme
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const currentTheme = localStorage.getItem('theme');
        
        if (currentTheme === 'light' || (!currentTheme && !prefersDarkScheme.matches)) {
            body.classList.add('light-theme');
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            
            if (body.classList.contains('light-theme')) {
                themeIcon.className = 'fas fa-sun';
                localStorage.setItem('theme', 'light');
            } else {
                themeIcon.className = 'fas fa-moon';
                localStorage.setItem('theme', 'dark');
            }
        });