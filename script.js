// Destination Data - Comprehensive Information
const destinationData = {
    Agra: {
        name: "Agra",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
        description: "Home to the magnificent Taj Mahal, Agra is a symbol of love and one of the Seven Wonders of the World.",
        famousPlaces: [
            { name: "Taj Mahal", lat: 27.1751, lng: 78.0421 },
            { name: "Agra Fort", lat: 27.1799, lng: 77.9784 },
            { name: "Fatehpur Sikri", lat: 27.0845, lng: 77.5440 },
            { name: "Itimad-ud-Daulah", lat: 27.1888, lng: 78.0378 },
            { name: "Mariam's Tomb", lat: 27.1758, lng: 78.0233 }
        ],
        famousFood: [
            "Petha (Agra's famous sweet)",
            "Dal Moth",
            "Bedai",
            "Jalebi",
            "Samosa",
            "Chaats"
        ],
        transport: [
            "Auto Rickshaw",
            "Electric Rickshaw",
            "Taxis/Uber",
            "Local Buses",
            "Cycle Rickshaw",
            "Tourist Buses"
        ],
        cost: {
            budget: "₹3,000-5,000/day",
            moderate: "₹5,000-10,000/day",
            luxury: "₹15,000+/day"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d354270.40536694916!2d77.82399446549886!3d27.17646814483862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974715e4f2ebf87%3A0x7a73a548a3cfd55b!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1645000000000"
    },
    Jaipur: {
        name: "Jaipur",
        image: "https://tse1.mm.bing.net/th/id/OIP.ZgPwFFfxv0PCwjxkw0G6EQHaFj?pid=Api&P=0&h=180",
        description: "The Pink City of Rajasthan, known for its rich heritage, magnificent palaces, and vibrant culture.",
        famousPlaces: [
            { name: "Hawa Mahal", lat: 26.9259, lng: 75.8269 },
            { name: "City Palace", lat: 26.9256, lng: 75.8239 },
            { name: "Jal Mahal", lat: 26.9914, lng: 75.8097 },
            { name: "Amer Fort", lat: 26.9859, lng: 75.8513 },
            { name: "Jantar Mantar", lat: 26.9248, lng: 75.8243 },
            { name: "Nahargarh Fort", lat: 26.9365, lng: 75.8236 }
        ],
        famousFood: [
            "Daal Baati Churma",
            "Laal Maas",
            "Ghevar",
            "Gajar Ka Halwa",
            "Pyaaz Kachori",
            "Mishri Mang"
        ],
        transport: [
            "Auto Rickshaw",
            "Ola/Uber Taxis",
            "Cycle Rickshaw",
            "Tourist Buses",
            "Horse Carriages",
            "Metro (Pink Line)"
        ],
        cost: {
            budget: "₹4,000-7,000/day",
            moderate: "₹8,000-15,000/day",
            luxury: "₹25,000+/day"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453997.4126335386!2d75.78723124323273!3d26.92604454946933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5b5b6b0b1bf%3A0x68a5a21e9d5c2e91!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1645000000000"
    },
    Kerala: {
        name: "Kerala",
        image: "https://tse1.mm.bing.net/th/id/OIP.HyjU2tItxGqeu1piwJogEQHaE8?pid=Api&P=0&h=180",
        description: "God's Own Country, famous for its backwaters, ayurvedic treatments, and pristine beaches.",
        famousPlaces: [
            { name: "Alleppey Backwaters", lat: 9.4981, lng: 76.3388 },
            { name: "Munnar Tea Gardens", lat: 10.0889, lng: 77.0595 },
            { name: "Kovalam Beach", lat: 8.4013, lng: 76.9828 },
            { name: "Wayanad Hills", lat: 11.6878, lng: 76.1328 },
            { name: "Fort Kochi", lat: 9.9642, lng: 76.2428 },
            { name: "Kumarakom", lat: 9.6157, lng: 76.4396 }
        ],
        famousFood: [
            "Sadya (Kerala Feast)",
            "Appam with Stew",
            "Puttu and Kadala Curry",
            "Malabar Biryani",
            "Fish Curry",
            "Banana Chips"
        ],
        transport: [
            "Houseboats",
            "Auto Rickshaw",
            "KSRTC Buses",
            "Taxis",
            "Boat Services",
            "Motorbikes"
        ],
        cost: {
            budget: "₹5,000-8,000/day",
            moderate: "₹10,000-20,000/day",
            luxury: "₹30,000+/day"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251料理.968309626!2d76.27108397447586!3d10.85051491023397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b8b2c8b0b0b%3A0x1d2b3c4d5e6f7g8h!2sKerala!5e0!3m2!1sen!2sin!4v1645000000000"
    },
    Goa: {
        name: "Goa",
        image: "https://wallpapers.com/images/hd/goa-beach-pictures-nky6f6agn0qeb4h8.jpg",
        description: "India's beach paradise, famous for its stunning beaches, nightlife, and Portuguese-influenced culture.",
        famousPlaces: [
            { name: "Baga Beach", lat: 15.5526, lng: 73.7504 },
            { name: "Anjuna Beach", lat: 15.5789, lng: 73.7393 },
            { name: "Fort Aguada", lat: 15.5205, lng: 73.7743 },
            { name: "Dudhsagar Falls", lat: 15.3143, lng: 74.3142 },
            { name: "Se Cathedral", lat: 15.3982, lng: 73.9125 },
            { name: "Basilica of Bom Jesus", lat: 15.4003, lng: 73.9300 }
        ],
        famousFood: [
            "Goan Fish Curry",
            "Pork Vindaloo",
            "Bebinca",
            "Feni (Local Liquor)",
            "Sorpotel",
            "Coconut Fish Curry"
        ],
        transport: [
            "Scooters/Bikes",
            "Auto Rickshaw",
            "Taxis",
            "Rented Cars",
            "Water Taxis",
            "Local Buses"
        ],
        cost: {
            budget: "₹4,000-7,000/day",
            moderate: "₹8,000-15,000/day",
            luxury: "₹25,000+/day"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248料理.8!2d73.7638779!3d15.2993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba10dbe5b91d%3A0x9b0d9a6c7c6b7e6f!2sGoa!5e0!3m2!1sen!2sin!4v1645000000000"
    },
    Varanasi: {
        name: "Varanasi",
        image: "https://tse2.mm.bing.net/th/id/OIP.6z-eJvXtAnj70uu7NXQdwgHaEK?pid=Api&P=0&h=180",
        description: "The spiritual capital of India, one of the oldest continuously inhabited cities in the world.",
        famousPlaces: [
            { name: "Kashi Vishwanath Temple", lat: 25.3109, lng: 82.9971 },
            { name: "Dashashwamedh Ghat", lat: 25.3107, lng: 83.0106 },
            { name: "Manikarnika Ghat", lat: 25.3164, lng: 83.0203 },
            { name: "Sarnath", lat: 25.3763, lng: 83.0237 },
            { name: "Ramnagar Fort", lat: 25.2818, lng: 83.0614 },
            { name: "Bharat Mata Temple", lat: 25.3181, lng: 82.9918 }
        ],
        famousFood: [
            "Tam Cha",
            "Kachori Sabzi",
            "Lassi",
            "Chooda Matar",
            "Banarasi Paan",
            "Malaiyo"
        ],
        transport: [
            "Auto Rickshaw",
            "Cycle Rickshaw",
            "E-Rickshaw",
            "Boat Ride",
            "Taxis",
            "City Buses"
        ],
        cost: {
            budget: "₹2,000-4,000/day",
            moderate: "₹5,000-8,000/day",
            luxury: "₹12,000+/day"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230料理.1!2d82.973446!3d25.3176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db4c8b0b0b%3A0x9c8d9a7c6b5d4e3f!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1645000000000"
    },
    Darjeeling: {
        name: "Darjeeling",
        image: "https://tse1.mm.bing.net/th/id/OIP.76-Cz4cMwRPJGEs0HZ0NQgHaEO?pid=Api&P=0&h=180",
        description: "The Queen of Hills, famous for its tea gardens, toy train, and stunning mountain views.",
        famousPlaces: [
            { name: "Tiger Hill", lat: 27.0463, lng: 88.3963 },
            { name: "Batasia Loop", lat: 27.0197, lng: 88.3838 },
            { name: "Darjeeling Toy Train", lat: 27.0417, lng: 88.2637 },
            { name: "Happy Valley Tea Estate", lat: 27.0453, lng: 88.4165 },
            { name: "Rock Garden", lat: 27.0093, lng: 88.3574 },
            { name: "Padmaja Naidu Zoo", lat: 27.0471, lng: 88.2698 }
        ],
        famousFood: [
            "Momos",
            "Thukpa",
            "Darjeeling Tea",
            "Makai Chaat",
            "Chowmein",
            "Sel Roti"
        ],
        transport: [
            "Toy Train",
            "Taxi (Knight King)",
            "Jeep Services",
            "Ropeway",
            "Hiking/Trekking",
            "Cycle Rickshaw"
        ],
        cost: {
            budget: "₹3,000-5,000/day",
            moderate: "₹6,000-12,000/day",
            luxury: "₹18,000+/day"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d302料理.99999999999!2d88.2637!3d27.0417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf04c0d7c0b0b%3A0x9a8c7d6e5f4b3a2d!2sDarjeeling%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1645000000000"
    }
};

// Modal Functionality
let currentDestination = null;

function openDestinationModal(destinationName) {
    const data = destinationData[destinationName];
    if (!data) return;
    
    currentDestination = destinationName;
    
    // Set modal content
    document.getElementById('modalDestinationImg').src = data.image;
    document.getElementById('modalDestinationName').textContent = data.name + ' - Explore More';
    document.getElementById('modalDestinationDesc').textContent = data.description;
    document.getElementById('modalMapFrame').src = data.mapUrl;
    
    // Populate Famous Food
    const foodList = document.getElementById('modalFoodList');
    foodList.innerHTML = data.famousFood.map(food => 
        `<li><i class="fas fa-utensils"></i> ${food}</li>`
    ).join('');
    
    // Populate Famous Places with click to view on map
    const placesList = document.getElementById('modalPlacesList');
    placesList.innerHTML = data.famousPlaces.map((place, index) => 
        `<li onclick="focusOnMap(${place.lat}, ${place.lng})" style="cursor:pointer;"><i class="fas fa-map-marker-alt"></i> ${place.name}</li>`
    ).join('');
    
// Populate Transport
    const transportList = document.getElementById('modalTransportList');
    transportList.innerHTML = data.transport.map(transport => 
        `<li><i class="fas fa-${transport.includes('Bus') ? 'bus' : transport.includes('Taxi') ? 'taxi' : transport.includes('Auto') ? 'car' : 'map'}"></i> ${transport}</li>`
    ).join('');
    
    // Populate Cost
    document.getElementById('modalCostBudget').textContent = data.cost.budget;
    document.getElementById('modalCostModerate').textContent = data.cost.moderate;
    document.getElementById('modalCostLuxury').textContent = data.cost.luxury;
    
    // Populate Interactive Places List with Map
    const placesListInteractive = document.getElementById('modalPlacesListInteractive');
    placesListInteractive.innerHTML = data.famousPlaces.map((place, index) => 
        `<div class="place-item" onclick="focusOnPlacesMap(${place.lat}, ${place.lng}, '${place.name}')">
            <span class="place-number">${index + 1}</span>
            <span class="place-name">${place.name}</span>
        </div>`
    ).join('');
    
    // Set the interactive places map
    document.getElementById('modalPlacesMapFrame').src = data.mapUrl;
    
    // Show modal
    const modal = document.getElementById('destinationModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeDestinationModal() {
    const modal = document.getElementById('destinationModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentDestination = null;
}

function focusOnMap(lat, lng) {
    // Update map with focused location
    const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${lat}%2C${lng}!5e0!3m2!1sen!2sin!4v1`;
    document.getElementById('modalMapFrame').src = mapUrl;
}

function focusOnPlacesMap(lat, lng, placeName) {
    // Update the places map with focused location
    const placeNameEncoded = encodeURIComponent(placeName);
    const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${placeNameEncoded}!5e0!3m2!1sen!2sin!4v1`;
    document.getElementById('modalPlacesMapFrame').src = mapUrl;
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Search Box Functionality
const searchButton = document.querySelector('.search-box button');
searchButton.addEventListener('click', () => {
    const input = document.querySelector('.search-box input');
    const duration = document.querySelector('.search-box select');
    
    if (input.value.trim() === '') {
        alert('Please enter your destination!');
        input.focus();
    } else {
        alert(`Searching for trips to ${input.value} for ${duration.value} duration!`);
    }
});

// Destination Card Animation on Scroll
const destinationCards = document.querySelectorAll('.destination-card');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

destinationCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Package Card Hover Effects
const packageCards = document.querySelectorAll('.package-card');

packageCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(-5px)';
    });
});

// Contact Form Handling - Now with Backend API
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const phone = contactForm.querySelector('input[type="tel"]').value;
    const destination = contactForm.querySelector('select').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Validation
    if (!name || !email || !phone || destination === 'Select Destination' || !message) {
        alert('Please fill in all fields!');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address!');
        return;
    }
    
    // Phone validation
    const phoneRegex = /^[0-9]{10,}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
        alert('Please enter a valid phone number!');
        return;
    }
    
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phone, destination, message })
        });
        
        const data = await response.json();
        
        if (data.success) {
            alert(data.message);
            contactForm.reset();
        } else {
            alert(data.message || 'Something went wrong. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Thank you, ' + name + '! We have received your inquiry about ' + destination + '. We will contact you shortly.');
        contactForm.reset();
    }
});

// Newsletter Form - Now with Backend API
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = newsletterForm.querySelector('input').value;
    
    if (!email) {
        alert('Please enter your email!');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email!');
        return;
    }
    
    try {
        const response = await fetch('/api/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });
        
        const data = await response.json();
        alert(data.message);
        newsletterForm.reset();
    } catch (error) {
        console.error('Error:', error);
        alert('Thank you for subscribing! You will now receive exclusive travel offers.');
        newsletterForm.reset();
    }
});

// Package Book Now Buttons - Now with Backend API
const bookButtons = document.querySelectorAll('.package-card button');

bookButtons.forEach(button => {
    button.addEventListener('click', async () => {
        const packageCard = button.closest('.package-card');
        const packageName = packageCard.querySelector('.package-header h3').textContent;
        const price = packageCard.querySelector('.new-price').textContent;
        
        // Ask for user details for booking
        const customerName = prompt(`Booking ${packageName} for ${price}!\n\nPlease enter your name:`);
        if (!customerName) return;
        
        const email = prompt('Please enter your email:');
        if (!email) return;
        
        const phone = prompt('Please enter your phone number:');
        if (!phone) return;
        
        // Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,}$/;
        
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address!');
            return;
        }
        
        if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
            alert('Please enter a valid phone number!');
            return;
        }
        
        try {
            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    packageName,
                    price,
                    customerName,
                    email,
                    phone
                })
            });
            
            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error('Error:', error);
            alert(`Booking ${packageName} for ${price}! Our team will contact you shortly.`);
        }
    });
});

// Destination Explore Buttons - Open Modal
const exploreButtons = document.querySelectorAll('.destination-card .card-content button');

exploreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.destination-card');
        const destination = card.querySelector('.card-content h3').textContent;
        
        // Open modal with destination details
        openDestinationModal(destination);
    });
});

// Modal Close Functionality
const modalClose = document.querySelector('.close-modal');
if (modalClose) {
    modalClose.addEventListener('click', closeDestinationModal);
}

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    const modal = document.getElementById('destinationModal');
    if (e.target === modal) {
        closeDestinationModal();
    }
});

// Footer Links
const footerLinks = document.querySelectorAll('.footer-section ul li a');

footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('This section is coming soon!');
    });
});

// Social Media Links
const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('This link is coming soon!');
    });
});

// Nav Links Active State
const navItems = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Add parallax effect to hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    if (scrollPosition < 700) {
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    }
});

// Loader
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #FF6B35;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    const loaderContent = document.createElement('div');
    loaderContent.innerHTML = '<i class="fas fa-plane-departure" style="font-size: 3rem; color: white;"></i>';
    loaderContent.style.cssText = 'animation: fly 1s infinite;';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fly {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
        }
    `;
    
    document.head.appendChild(style);
    loader.appendChild(loaderContent);
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1500);
});

// Feature Cards Animation
const featureCards = document.querySelectorAll('.feature-card');

const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

featureCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    featureObserver.observe(card);
});

// Search Enhancement
const searchInput = document.querySelector('.search-box input');
const popularSearches = ['Goa', 'Kerala', 'Jaipur', 'Agra', 'Darjeeling', 'Varanasi'];

searchInput.addEventListener('focus', () => {
    searchInput.placeholder = 'Search destinations...';
});

searchInput.addEventListener('blur', () => {
    searchInput.placeholder = 'Where do you want to go?';
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.id = 'backToTop';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #FF6B35;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 5px 20px rgba(255, 107, 53, 0.4);
`;

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

console.log('IndiaTravel.com - Website Loaded Successfully!');
