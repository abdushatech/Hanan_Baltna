// Updated Navigation Functions
function toggleNav() {
    const nav = document.getElementById('dropdownNav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('show');
    hamburger.classList.toggle('active'); // Added for animation
}

function closeNav() {
    const nav = document.getElementById('dropdownNav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.remove('show');
    hamburger.classList.remove('active'); // Added for animation
}

// Smooth Scroll to Sections
document.querySelectorAll('.dropdown-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        closeNav();
        const targetId = this.getAttribute('href');
        if(targetId !== '#') {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic Announcements
const announcements = [
    "🛍 በጅምላ ለሚያዙ ደንበኞቻችን ልዩ ቅናሽ እናደርጋለን።",
    "🚚 ያነጋግሩን ባሉበት እናደርሳለን።",
    "🎉 ለአዲስ ደንበኞች የ10 % ቅናሽ እናደርጋለን!",
    "📞 ስለ ጣዕምና ጥራት ምስክሮቻችን ደንበኞቻችን ናቸዉ ስለጎበኙን እናመሰግናለን!"
];

let currentAnnouncement = 0;
const announcementElement = document.getElementById('announcement');

function rotateAnnouncements() {
    announcementElement.textContent = announcements[currentAnnouncement];
    currentAnnouncement = (currentAnnouncement + 1) % announcements.length;
}

// Form Submission
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
            alert('Order received! We will contact you shortly. ስላዘዙን እናመሰግናለን ትዕዛዞትን እንደደረሰ እናሳውቆታለን!');
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
