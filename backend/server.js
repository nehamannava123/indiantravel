// IndiaTravel Backend Server
// Node.js + Express + File-based Storage (JSON)

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// ==================== DATA FILE PATHS ====================

const DATA_DIR = path.join(__dirname, 'data');
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json');
const NEWSLETTER_FILE = path.join(DATA_DIR, 'newsletter.json');

// ==================== CREATE DATA FOLDER ====================

if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// ==================== CREATE JSON FILES ====================

if (!fs.existsSync(CONTACTS_FILE)) {
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify([]));
}

if (!fs.existsSync(BOOKINGS_FILE)) {
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify([]));
}

if (!fs.existsSync(NEWSLETTER_FILE)) {
    fs.writeFileSync(NEWSLETTER_FILE, JSON.stringify([]));
}

// ==================== HELPER FUNCTIONS ====================

function readData(file) {
    try {
        return JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (error) {
        return [];
    }
}

function writeData(file, data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// ==================== MIDDLEWARE ====================

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==================== SERVE FRONTEND FILES ====================

app.use(express.static(path.join(__dirname, '..')));

// ==================== FRONTEND ROUTES ====================

// Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Admin Panel
app.get('/admin.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'admin.html'));
});

// ==================== API ROUTES ====================

// 1. Contact Form
app.post('/api/contact', (req, res) => {
    try {
        const { name, email, phone, destination, message } = req.body;

        if (!name || !email || !phone || !destination || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        const contacts = readData(CONTACTS_FILE);

        contacts.push({
            name,
            email,
            phone,
            destination,
            message,
            createdAt: new Date().toISOString()
        });

        writeData(CONTACTS_FILE, contacts);

        console.log('New Contact:', name);

        res.json({
            success: true,
            message: 'Contact form submitted successfully'
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
});

// 2. Booking Form
app.post('/api/booking', (req, res) => {
    try {

        const {
            packageName,
            price,
            customerName,
            email,
            phone,
            travelDate,
            numberOfPeople,
            specialRequests
        } = req.body;

        if (!packageName || !customerName || !email || !phone) {
            return res.status(400).json({
                success: false,
                message: 'Required fields missing'
            });
        }

        const bookings = readData(BOOKINGS_FILE);

        bookings.push({
            packageName,
            price,
            customerName,
            email,
            phone,
            travelDate,
            numberOfPeople,
            specialRequests,
            status: 'pending',
            createdAt: new Date().toISOString()
        });

        writeData(BOOKINGS_FILE, bookings);

        console.log('New Booking:', customerName);

        res.json({
            success: true,
            message: 'Booking successful'
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
});

// 3. Newsletter Subscription
app.post('/api/newsletter', (req, res) => {
    try {

        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email required'
            });
        }

        const subscribers = readData(NEWSLETTER_FILE);

        const alreadyExists = subscribers.find(
            subscriber => subscriber.email === email
        );

        if (alreadyExists) {
            return res.json({
                success: true,
                message: 'Already subscribed'
            });
        }

        subscribers.push({
            email,
            subscribedAt: new Date().toISOString()
        });

        writeData(NEWSLETTER_FILE, subscribers);

        console.log('New Subscriber:', email);

        res.json({
            success: true,
            message: 'Subscribed successfully'
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
});

// ==================== ADMIN API ROUTES ====================

// Get Contacts
app.get('/api/contacts', (req, res) => {
    try {

        const contacts = readData(CONTACTS_FILE);

        res.json({
            success: true,
            contacts
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
});

// Get Bookings
app.get('/api/bookings', (req, res) => {
    try {

        const bookings = readData(BOOKINGS_FILE);

        res.json({
            success: true,
            bookings
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
});

// Get Newsletter Subscribers
app.get('/api/newsletter', (req, res) => {
    try {

        const subscribers = readData(NEWSLETTER_FILE);

        res.json({
            success: true,
            subscribers
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
});

// ==================== 404 HANDLER ====================

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'index.html'));
});

// ==================== START SERVER ====================

app.listen(PORT, () => {

    console.log('\n========================================');
    console.log('IndiaTravel Server Running');
    console.log('========================================');

    console.log(`Server URL: http://localhost:${PORT}`);

    console.log('\nAPI ROUTES:');
    console.log('POST /api/contact');
    console.log('POST /api/booking');
    console.log('POST /api/newsletter');

    console.log('GET /api/contacts');
    console.log('GET /api/bookings');
    console.log('GET /api/newsletter');

    console.log('\n========================================\n');
});

module.exports = app;