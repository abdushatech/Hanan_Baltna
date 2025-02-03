/* Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #f8f9fa;
    transition: margin-left 0.5s;
}

/* Hamburger Menu */
.hamburger {
    position: fixed;
    top: 25px;
    left: 25px;
    z-index: 1001;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.9);
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.hamburger .bar {
    width: 30px;
    height: 2px;
    background: #2c3e50;
    margin: 6px 0;
    transition: 0.4s;
    transform-origin: left center;
}

/* Hamburger Animation */
body.nav-open .top-bar {
    transform: rotate(45deg) translate(4px, -1px);
}

body.nav-open .middle-bar {
    opacity: 0;
}

body.nav-open .bottom-bar {
    transform: rotate(-45deg) translate(4px, 1px);
}

/* Side Navigation */
.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    top: 0;
    left: 0;
    background: #2c3e50;
    overflow-x: hidden;
    padding-top: 80px;
    transition: 0.5s;
    z-index: 1000;
}

.sidenav a {
    padding: 15px 25px;
    text-decoration: none;
    font-size: 1.1rem;
    color: #ecf0f1;
    display: block;
    transition: 0.3s;
}

.sidenav a:hover {
    background: #34495e;
}

/* Header */
header {
    background: #2c3e50;
    color: white;
    text-align: center;
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    position: relative;
    z-index: 999;
}

/* Main Content */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

/* Announcement Section */
.announcement {
    background: #e67e22;
    color: white;
    padding: 1.5rem;
    margin: 2rem 0;
    border-radius: 8px;
    text-align: center;
    font-size: 1.1rem;
}

/* Gallery */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 3rem 0;
}

.gallery img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

/* Order Form */
.order-form {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    margin: 2rem 0;
}

.form-group {
    margin-bottom: 1.5rem;
}

input, textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

input:focus, textarea:focus {
    border-color: #3498db;
    outline: none;
}

button {
    background: #2c3e50;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;
}

button:hover {
    background: #34495e;
}

/* Contact Section */
.contact-info {
    text-align: center;
    padding: 2rem;
    background: white;
    border-radius: 10px;
    margin: 3rem 0;
}

.phone-numbers a {
    display: block;
    color: #2c3e50;
    text-decoration: none;
    margin: 1rem 0;
    font-size: 1.1rem;
}

.social-media {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin: 2rem 0;
}

.social-media a {
    color: #2c3e50;
    font-size: 2rem;
    transition: color 0.3s;
}

.social-media a:hover {
    color: #3498db;
}

.address p {
    color: #666;
    line-height: 1.6;
}

/* Copyright Footer */
.copyright {
    background: #2c3e50;
    color: white;
    text-align: center;
    padding: 1.5rem;
    margin-top: 3rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }

    .hamburger {
        top: 15px;
        left: 15px;
    }

    body.nav-open {
        margin-left: 0;
    }

    body.nav-open .sidenav {
        width: 250px;
    }
}
