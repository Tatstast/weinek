// Jahr im Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobil-Menü
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
});

// Menü schließen nach Klick auf Link
links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    });
});
