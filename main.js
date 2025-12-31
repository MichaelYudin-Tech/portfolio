import { inject } from '@vercel/analytics';

inject();

// --- Background Orb Parallax ---
const orbs = document.querySelectorAll('.orb');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    orbs.forEach((orb, index) => {
        // Different speeds for depth perception
        const speed = (index + 1) * 0.15;
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
            const start = Math.floor(Math.random() * 100);
            const end = start + Math.floor(Math.random() * 80);
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
                if (!char || Math.random() < 0.1) { // slowed down char switching
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                const isGold = Math.random() < 0.5; // Randomly highlight scrambling chars
                output += `<span class="${isGold ? 'scramble-gold' : 'scramble-muted'}">${char}</span>`;
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
        // Optional: Scramble back or just stay? Usually just staying is fine, 
        // or we could 'heal' it back if we wanted a reverse effect, but normally resetting isn't needed 
        // if the scramble ends on the correct text.
    });
});
