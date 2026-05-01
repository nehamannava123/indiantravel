// IndiaTravel Backend Server
// Node.js + Express + File-based Storage (JSON)

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Data file paths
const DATA_DIR = path.join(__dirname, 'data');
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json');
const NEWSLETTER_FILE = path.join(DATA_DIR, 'newsletter.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initialize data files if they don't exist
if (!fs.existsSync(CONTACTS_FILE)) fs.writeFileSync(CONTACTS_FILE, JSON.stringify([]));
if (!fs.existsSync(BOOKINGS_FILE)) fs.writeFileSync(BOOKINGS_FILE, JSON.stringify([]));
if (!fs.existsSync(NEWSLETTER_FILE)) fs.writeFileSync(NEWSLETTER_FILE, JSON.stringify([]));

// Helper functions to read/write data
function readData(file) {
    try {
        return JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch { return []; }
}

function writeData(file, data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the root directory (frontend)
app.use(express.static(path.join(__dirname, '..')));

// ==================== API ROUTES ====================

// 1. Contact Form Submission
app.post('/api/contact', (req, res) => {
    try {
        const { name, email, phone, destination, message } = req.body;

        // Validation
        if (!name || !email || !phone || !destination || !message) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ success: false, message: 'Invalid email format' });
        }

        // Phone validation
        const phoneRegex = /^[0-9]{10,}$/;
        if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
            return res.status(400).json({ success: false, message: 'Invalid phone number' });
        }

        // Save to file
        const contacts = readData(CONTACTS_FILE);
        contacts.push({ name, email, phone, destination, message, createdAt: new Date().toISOString() });
        writeData(CONTACTS_FILE, contacts);
        
        console.log('📝 New contact submission:', name);

        res.json({ 
            success: true, 
            message: `Thank you, ${name}! We have received your inquiry about ${destination}. We will contact you shortly.` 
        });
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
    }
});

// 2. Package Booking
app.post('/api/booking', (req, res) => {
    try {
        const { packageName, price, customerName, email, phone, travelDate, numberOfPeople, specialRequests } = req.body;

        // Validation
        if (!packageName || !customerName || !email || !phone) {
            return res.status(400).json({ success: false, message: 'Required fields are missing' });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ success: false, message: 'Invalid email format' });
        }

        // Save to file
        const bookings = readData(BOOKINGS_FILE);
        bookings.push({
            packageName,
            price,
            customerName,
            email,
            phone,
            travelDate,
            numberOfPeople: numberOfPeople || 1,
            specialRequests,
            status: 'pending',
            createdAt: new Date().toISOString()
        });
        writeData(BOOKINGS_FILE, bookings);
        
        console.log('🎫 New booking:', packageName, 'by', customerName);

        res.json({ 
            success: true, 
            message: `Booking confirmed for ${packageName}! Our team will contact you shortly to confirm details.` 
        });
    } catch (error) {
        console.error('Booking error:', error);
        res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
    }
});

// 3. Newsletter Subscription
app.post('/api/newsletter', (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ success: false, message: 'Email is required' });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ success: false, message: 'Invalid email format' });
        }

        // Save to file
        const subscribers = readData(NEWSLETTER_FILE);
        
        // Check if already subscribed
        if (subscribers.find(s => s.email === email)) {
            return res.json({ success: true, message: 'You are already subscribed!' });
        }
        
        subscribers.push({ email, subscribedAt: new Date().toISOString() });
        writeData(NEWSLETTER_FILE, subscribers);
        
        console.log('📧 New newsletter subscriber:', email);

        res.json({ success: true, message: 'Thank you for subscribing! You will now receive exclusive travel offers.' });
    } catch (error) {
        console.error('Newsletter error:', error);
        res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
    }
});

// 4. Get All Bookings
app.get('/api/bookings', (req, res) => {
    try {
        const bookings = readData(BOOKINGS_FILE);
        res.json({ success: true, bookings });
    } catch (error) {
        console.error('Get bookings error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// 5. Get All Contacts
app.get('/api/contacts', (req, res) => {
    try {
        const contacts = readData(CONTACTS_FILE);
        res.json({ success: true, contacts });
    } catch (error) {
        console.error('Get contacts error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// 6. Get All Newsletter Subscribers
app.get('/api/newsletter', (req, res) => {
    try {
        const subscribers = readData(NEWSLETTER_FILE);
        res.json({ success: true, subscribers });
    } catch (error) {
        console.error('Get newsletter error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// ==================== FRONTEND ROUTES ====================

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'index.html'));
});

// ==================== START SERVER ====================

app.listen(PORT, () => {
    console.log('\n🚀 IndiaTravel Backend Server Running');
    console.log(`   Local: http://localhost:${PORT}`);
    console.log(`   Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log('\n📡 API Endpoints:');
    console.log(`   POST /api/contact    - Submit contact form`);
    console.log(`   POST /api/booking   - Book a package`);
    console.log(`   POST /api/newsletter - Subscribe to newsletter`);
    console.log(`   GET  /api/bookings   - Get all bookings (admin)`);
    console.log(`   GET  /api/contacts  - Get all contacts (admin)`);
    console.log(`   GET  /api/newsletter - Get newsletter subscribers`);
    console.log('\n💾 Storage:');
    console.log(`   Data directory: ${DATA_DIR}`);
    console.log(`   Using JSON file storage`);
    console.log('\n' + '='.repeat(50));
});

module.exports = app;
