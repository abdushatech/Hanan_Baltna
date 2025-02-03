// Navigation Functions
function toggleNav() {
    document.body.classList.toggle('nav-open');
}

function closeNav() {
    document.body.classList.remove('nav-open');
}

// Click Outside to Close
document.addEventListener('click', (event) => {
    const sidenav = document.getElementById('sidenav');
    const hamburger = document.querySelector('.hamburger');
    
    if (!sidenav.contains(event.target) && !hamburger.contains(event.target)) {
        closeNav();
    }
});

// Smooth Scroll to Order Section
document.querySelectorAll('a[href="#orderSection"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Announcements
const announcements = [
    "🛍 Special Weekend Sale - 30% Off!",
    "🚚 Free Shipping on Orders Over $75",
    "🎉 New Collection Just Arrived!",
    "📞 24/7 Customer Support Available"
];

let currentAnnouncement = 0;
const announcementElement = document.getElementById('announcement');

function rotateAnnouncements() {
    announcementElement.textContent = announcements[currentAnnouncement];
    currentAnnouncement = (currentAnnouncement + 1) % announcements.length;
}

// Form Submission with Formspree
document.getElementById('orderForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            alert('Order received! We will contact you shortly.');
            form.reset();
        } else {
            alert('There was an error. Please try again later.');
        }
    } catch (error) {
        alert('Network error. Please check your connection.');
    }
});

// Initialize
setInterval(rotateAnnouncements, 3500);
rotateAnnouncements();
