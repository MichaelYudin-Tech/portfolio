import { inject } from '@vercel/analytics';

inject();

// --- Background Orb Parallax ---
const orbs = document.querySelectorAll('.orb');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    orbs.forEach((orb, index) => {
        // Different speeds for depth perception
        const speed = (index + 1) * 0.5;
        const yOffset = scrollY * speed;
        // We update a CSS variable or direct transform. 
        // Since we have an existing animation on the orbs (float), we need to be careful not to override it.
        // Best approach: wrap the orb in a container or use a css variable for the scroll offset.
        orb.style.setProperty('--scroll-offset', `${yOffset}px`);
    });
});


// --- Text Scramble Effect ---
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

class TextScramble {
    constructor(el) {
        this.el = el;
        this.originalText = el.innerText;
        this.frame = 0;
        this.queue = [];
        this.scrambling = false;

        // Split text into an array of objects representing final state
        this.init();
    }

    init() {
        this.update = this.update.bind(this);
    }

    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);

        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 20); // Much shorter delay
            const end = start + Math.floor(Math.random() * 30); // Shorter duration
            this.queue.push({ from, to, start, end });
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }

    update() {
        let output = '';
        let complete = 0;

        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];

            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                // progressive slowdown
                const progress = (this.frame - start) / (end - start);
                const shouldSwap = Math.random() < (1 - progress) * 0.9;

                if (!char || shouldSwap) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                const isGold = Math.random() < 0.5;
                output += `<span class="${isGold ? 'scramble-gold' : 'scramble-muted'} scramble-motion">${char}</span>`;
            } else {
                output += from;
            }
        }

        this.el.innerHTML = output;

        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }

    randomChar() {
        return letters[Math.floor(Math.random() * letters.length)];
    }
}

// Initialize Scramble on Project Titles
const titles = document.querySelectorAll('.project h2');
titles.forEach(title => {
    const fx = new TextScramble(title);
    const originalText = title.innerText;

    // Find parent project card to handle hover
    const card = title.closest('.project');

    card.addEventListener('mouseenter', () => {
        title.style.color = 'var(--accent)'; // Turn gold
        fx.setText(originalText);
    });

    card.addEventListener('mouseleave', () => {
        title.style.color = ''; // Revert color
    });
});

// --- Mobile/Scroll Focus Logic ---
// Use IntersectionObserver to highlight cards when they are center viewport (mostly for mobile)
const observerOptions = {
    root: null,
    rootMargin: '-40% 0px -40% 0px', // Active when in the middle 20% of screen
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    // Check if device supports hover (basic check)
    // We can enable this always as a "scroll highlight" feature
    const projectsContainer = document.querySelector('.projects');

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove focus from others
            document.querySelectorAll('.project').forEach(p => p.classList.remove('is-focused'));

            // Add focus to current
            entry.target.classList.add('is-focused');
            projectsContainer.classList.add('has-focus');

            // Trigger text scramble if not already running context
            const title = entry.target.querySelector('h2');
            if (title) {
                // Manually trigger the scramble instance we created earlier?
                // We need access to the TextScramble instance. 
                // Let's attach it to the element or just recreate since it’s cheap.
                // Recreating is safer here to avoid closure complexity.
                title.style.color = 'var(--accent)';
                new TextScramble(title).setText(title.innerText);
            }
        } else {
            // We don't remove properties immediately to keep the "dimmed" state stable 
            // while scrolling between items.
            // But if we scroll fast, we might want to cleanup? 
            // Let's leave cleanup to the "isIntersecting" of the next item.
        }
    });
}, observerOptions);

const projects = document.querySelectorAll('.project');
projects.forEach(project => observer.observe(project));

// Cleanup focus when clicking outside or scrolling away completely?
// For simpler UX, we might just let the last one stay focused or rely on hover on desktop.
// On desktop, hover CSS overrides this cleanly because we used combined selectors.

