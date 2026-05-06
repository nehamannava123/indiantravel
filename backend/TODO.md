# India Travel Website - Project Plan

## Task
Upgrade the codes so that:
- See famous places once click on the destination - ✅ Completed
- See famous food - ✅ Completed
- See transport options - ✅ Completed
- See cost of vacation - ✅ Completed
- Add maps to look all the famous places - ✅ Completed
- **Add backend** - ✅ Completed (New!)

## Backend Implementation (Completed)

### Files Created
1. **backend/package.json** - Node.js dependencies configuration
2. **backend/server.js** - Express server with API endpoints and MongoDB integration

### API Endpoints
- `POST /api/contact` - Submit contact form
- `POST /api/booking` - Book a travel package
- `POST /api/newsletter` - Newsletter subscription
- `GET /api/bookings` - Get all bookings (admin)
- `GET /api/contacts` - Get all contacts (admin)

### Features
- MongoDB integration (optional - works without database too)
- Form validation on server-side
- CORS enabled
- Static file serving for frontend

## Frontend Updates (Completed)

### Changes Made to script.js
- Contact form now calls `/api/contact`
- Newsletter form now calls `/api/newsletter`
- Package booking now calls `/api/booking`
- Graceful fallback when backend is not running

## Run Instructions

### Option 1: Run with Backend (Recommended)
```bash
cd backend
npm install
npm start
# Then open http://localhost:3000
```

### Option 2: Run Frontend Only
Simply open `index.html` in a web browser (forms will work with local alerts)
