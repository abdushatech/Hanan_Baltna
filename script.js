// Toggle navigation
function toggleNav() {
    document.body.classList.toggle('nav-open');
}

function closeNav() {
    document.body.classList.remove('nav-open');
}

// Close nav when clicking outside
document.addEventListener('click', function(event) {
    const sidenav = document.getElementById('sidenav');
    const hamburger = document.querySelector('.hamburger-menu');
    
    if (!sidenav.contains(event.target) && !hamburger.contains(event.target)) {
        closeNav();
    }
});

// Rest of the existing JavaScript remains same
const announcements = [
    "Special Discounts Today Only!",
    "Free Delivery on Orders Over $50!",
    "New Products Arrived!",
    "24/7 Customer Support Available"
];

let currentAnnouncement = 0;
const announcementElement = document.getElementById('announcement');

function rotateAnnouncements() {
    announcementElement.textContent = announcements[currentAnnouncement];
    currentAnnouncement = (currentAnnouncement + 1) % announcements.length;
}

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Order received! We will contact you shortly.');
    this.reset();
});

// Font Awesome
const fa = document.createElement('link');
fa.rel = 'stylesheet';
fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
document.head.appendChild(fa);

// Initialize
setInterval(rotateAnnouncements, 3000);
rotateAnnouncements();