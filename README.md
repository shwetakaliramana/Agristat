<div align="center">

# 🌾 AgriStats
### Agricultural Land Assessment & Analytics Platform

<p align="center">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Recharts-FF6384?style=flat-square" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white" />
</p>

<h3>🚀 A comprehensive full-stack MERN application for monitoring and analyzing agricultural data across India 🇮🇳</h3>

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [API](#-api-documentation)

---

</div>

## 📋 Table of Contents

- [🌟 Overview](#-overview)
- [✨ Features](#-features)  
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ Architecture](#️-architecture)
- [📥 Installation](#-installation)
- [🚀 Quick Start](#-quick-start)
- [📡 API Documentation](#-api-documentation)
- [📁 Project Structure](#-project-structure)
- [🗄️ Database Schema](#️-database-schema)
- [🎨 Design System](#-design-system)
- [🔒 Security](#-security)
- [🚀 Deployment](#-deployment)

---

## 🌟 Overview

**AgriStats** is a cutting-edge, full-stack web application revolutionizing agricultural data management in India. Built with the powerful **MERN stack**, it provides an intuitive and visually stunning platform for comprehensive agricultural assessment.

### 🎯 The Problem

Agricultural planning in India faces significant challenges:
- 📊 Fragmented data on land holding patterns
- 💧 Inefficient irrigation resource tracking
- 🌱 Limited visibility into cropping patterns
- 🚰 Poor monitoring of groundwater levels

### 💡 Our Solution

AgriStats delivers a **unified, modern platform** that transforms agricultural data management with:

- ✅ Beautiful, intuitive interface with dark/light theme
- ✅ Real-time statistics and data visualization
- ✅ Mobile-responsive design
- ✅ Interactive charts powered by Recharts
- ✅ Smooth animations with Framer Motion
- ✅ RESTful API architecture
- ✅ Production-ready code

---

## ✨ Features

### 🎨 Stunning User Experience

| Feature | Description |
|---------|-------------|
| 🌓 **Theme Toggle** | Seamless dark/light mode with 0.3s smooth transitions |
| ✨ **Animations** | Framer Motion powered hover effects & micro-interactions |
| 📱 **Responsive** | Mobile-first design working flawlessly on all devices |
| 🎯 **Navigation** | Intuitive routing with React Router |

### 📊 Powerful Dashboard

- 📈 **Real-time Statistics** - Animated stat cards with live data
- 🗺️ **Geographic Analysis** - State-wise land distribution  
- 💰 **Aggregate Metrics** - Total areas, counts, and averages
- 🔄 **Auto-refresh** - Stay updated without page reload
- 🎯 **Trend Indicators** - Visual percentage changes

### 📝 Comprehensive Data Entry

- 📋 **4 Data Categories** - Land, Irrigation, Crops, Wells
- ✅ **Smart Validation** - Prevent invalid entries with Mongoose schemas
- 🎯 **Dropdown Menus** - Consistent data standards
- 📍 **GPS Integration** - Optional location tracking
- 🔔 **Instant Feedback** - Toast notifications for all actions
- 💾 **Database Persistence** - MongoDB secure storage

### 📈 Advanced Analytics

- 📊 **Multiple Chart Types** - Pie, Bar, Line graphs
- 🖱️ **Interactive Elements** - Hover tooltips, clickable legends
- 🎨 **Color-coded Data** - Easy visual differentiation
- 📑 **Report Summaries** - Key insights at a glance

---

## 🛠️ Tech Stack

<div align="center">

### Frontend Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black) | 18.2.0 | UI Framework |
| ![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=react-router) | 6.20.1 | Navigation |
| ![Framer Motion](https://img.shields.io/badge/-Framer-0055FF?logo=framer) | 10.16.16 | Animations |
| ![Recharts](https://img.shields.io/badge/-Recharts-FF6384) | 2.10.3 | Charts |
| ![Axios](https://img.shields.io/badge/-Axios-5A29E4?logo=axios) | 1.6.2 | HTTP Client |

### Backend Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js) | Latest | Runtime |
| ![Express](https://img.shields.io/badge/-Express-000000?logo=express) | 4.18.2 | Web Framework |
| ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb) | 8.0.11 | Database |
| ![Mongoose](https://img.shields.io/badge/-Mongoose-880000) | 8.0.3 | ODM |

</div>

---

## 🏗️ Architecture

```
┌──────────────────────────────────────┐
│     React Frontend (Port 3000)       │
│  ┌──────────┐  ┌──────────┐         │
│  │Dashboard │  │DataEntry │         │
│  └──────────┘  └──────────┘         │
│        │            │                │
│        └────────┬───┘                │
│              Axios                   │
└───────────────────┼──────────────────┘
                    │
                    ▼
┌──────────────────────────────────────┐
│    Express API (Port 5000)           │
│  ┌────────────────────────────┐     │
│  │   Routes → Controllers     │     │
│  └────────────────────────────┘     │
│              │                       │
│  ┌────────────────────────────┐     │
│  │    Mongoose Models         │     │
│  └────────────────────────────┘     │
└───────────────────┼──────────────────┘
                    │
                    ▼
┌──────────────────────────────────────┐
│        MongoDB Database              │
│  ┌─────┐ ┌──────┐ ┌────┐ ┌─────┐   │
│  │lands│ │irrig.│ │crop│ │wells│   │
│  └─────┘ └──────┘ └────┘ └─────┘   │
└──────────────────────────────────────┘
```

---

## 📥 Installation

### Prerequisites

- **Node.js** v14+ - [Download](https://nodejs.org/)
- **MongoDB** v4.4+ - [Download](https://www.mongodb.com/try/download/community)
- **npm** v6+ (comes with Node.js)

### Quick Setup

#### 1️⃣ Backend Setup
```bash
cd backend
npm install
```

#### 2️⃣ Configure Environment
Create `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/agriculture_assessment
NODE_ENV=development
```

#### 3️⃣ Start MongoDB
```powershell
net start MongoDB  # Windows
# or use MongoDB Compass / Atlas
```

#### 4️⃣ Start Backend
```bash
npm run dev
# ✅ Server running on http://localhost:5000
```

#### 5️⃣ Frontend Setup (New Terminal)
```bash
cd frontend
npm install
npm start
# ✅ Browser opens at http://localhost:3000
```

---

## 🚀 Quick Start

### Get Running in 2 Minutes

```bash
# Terminal 1 - Backend
cd backend && npm install && npm run dev

# Terminal 2 - Frontend
cd frontend && npm install && npm start
```

### First Steps

1. **Explore Dashboard** - See animated statistics
2. **Toggle Theme** - Click sun/moon icon
3. **Add Data** - Go to Data Entry → Fill form → Submit
4. **View Charts** - Navigate to Reports page

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### 🏞️ Land Holdings
```http
GET    /api/lands          # Get all
POST   /api/lands          # Create new
GET    /api/lands/:id      # Get single
PUT    /api/lands/:id      # Update
DELETE /api/lands/:id      # Delete
GET    /api/lands/stats    # Statistics
```

#### 💧 Irrigation
```http
GET    /api/irrigation
POST   /api/irrigation
GET    /api/irrigation/:id
PUT    /api/irrigation/:id
DELETE /api/irrigation/:id
GET    /api/irrigation/stats
```

#### 🌾 Cropping Patterns
```http
GET    /api/cropping
POST   /api/cropping
GET    /api/cropping/:id
PUT    /api/cropping/:id
DELETE /api/cropping/:id
GET    /api/cropping/stats
```

#### 🚰 Wells
```http
GET    /api/wells
POST   /api/wells
GET    /api/wells/:id
PUT    /api/wells/:id
DELETE /api/wells/:id
GET    /api/wells/stats
```

#### 📊 Dashboard
```http
GET /api/dashboard/stats   # Overall statistics
```

### Sample Request

```bash
curl -X POST http://localhost:5000/api/lands \
  -H "Content-Type: application/json" \
  -d '{
    "state": "Punjab",
    "district": "Ludhiana",
    "village": "Khurana",
    "farmerName": "Rajesh Kumar",
    "landSize": 5.5,
    "landType": "Medium (4-10 acres)",
    "soilType": "Alluvial"
  }'
```

---

## 📁 Project Structure

```
agristats/
│
├── backend/                    # Node.js + Express
│   ├── controllers/            # Business logic
│   │   ├── landController.js
│   │   ├── irrigationController.js
│   │   ├── croppingController.js
│   │   ├── wellController.js
│   │   └── dashboardController.js
│   ├── models/                 # MongoDB schemas
│   │   ├── LandHolding.js
│   │   ├── Irrigation.js
│   │   ├── CroppingPattern.js
│   │   └── Well.js
│   ├── routes/                 # API routes
│   │   ├── landRoutes.js
│   │   ├── irrigationRoutes.js
│   │   ├── croppingRoutes.js
│   │   ├── wellRoutes.js
│   │   └── dashboardRoutes.js
│   ├── server.js               # Entry point
│   ├── .env                    # Config
│   └── package.json
│
├── frontend/                   # React App
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── Navbar.js
│   │   │   ├── StatCard.js
│   │   │   └── LoadingSpinner.js
│   │   ├── context/
│   │   │   └── ThemeContext.js # Theme management
│   │   ├── pages/
│   │   │   ├── Dashboard.js
│   │   │   ├── DataEntry.js
│   │   │   └── Reports.js
│   │   ├── services/
│   │   │   └── api.js          # Axios setup
│   │   ├── App.js              # Root component
│   │   └── index.js
│   └── package.json
│
├── README.md                   # This file
├── STARTUP_GUIDE.md
└── QUICK_START.md
```

---

## 🗄️ Database Schema

### LandHolding Model
```javascript
{
  state: String,              // Required
  district: String,           // Required
  village: String,            // Required
  farmerName: String,         // Required
  landSize: Number,           // In acres
  landType: Enum,             // Marginal/Small/Medium/Large
  soilType: Enum,             // Alluvial/Black/Red/etc
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  createdAt: Date,
  updatedAt: Date
}
```

### Irrigation Model
```javascript
{
  state, district, village,
  irrigationSource: Enum,     // Canal/Tube Well/Drip/etc
  irrigatedArea: Number,      // In acres
  efficiency: Number,         // Percentage
  waterAvailability: Enum,    // Abundant/Sufficient/etc
  yearEstablished: Number
}
```

### CroppingPattern Model
```javascript
{
  state, district, village,
  cropName: String,
  cropType: Enum,             // Kharif/Rabi/Zaid/Perennial
  cropCategory: Enum,         // Cereals/Pulses/etc
  areaCultivated: Number,     // In acres
  expectedYield: Number,      // Quintals/acre
  season: String,
  year: Number
}
```

### Well Model
```javascript
{
  state, district, village,
  wellType: Enum,             // Bore/Open/Tube/Step Well
  depth: Number,              // In feet
  waterLevel: Number,         // Feet from surface
  diameter: Number,           // In feet
  waterQuality: Enum,         // Excellent/Good/Fair/etc
  status: Enum,               // Active/Inactive/Seasonal/Dry
  coordinates: { lat, long }
}
```

---

## 🎨 Design System

### Color Palette

**Light Theme:**
```css
--bg-primary: #f8fafc
--bg-secondary: #ffffff
--text-primary: #1e293b
--accent-primary: #10b981   /* Green */
--accent-secondary: #3b82f6 /* Blue */
```

**Dark Theme:**
```css
--bg-primary: #0f172a
--bg-secondary: #1e293b
--text-primary: #f1f5f9
/* Accent colors remain same */
```

### Typography
- **Font**: System fonts for performance
- **Headings**: Bold, gradient colors
- **Body**: 1rem (16px), Regular weight

### Animations
- **Page Transitions**: 0.4s fade-in
- **Hover Effects**: 0.3s scale(1.05)
- **Theme Toggle**: 0.3s rotate(180deg)
- **Cards**: Staggered entrance

---

## 🔒 Security

### Implemented Features

- ✅ **CORS** - Configured cross-origin requests
- ✅ **Input Validation** - Mongoose schema validation
- ✅ **Data Sanitization** - NoSQL injection prevention
- ✅ **Error Handling** - Graceful error responses
- ✅ **Environment Variables** - Sensitive data protection

### Future Enhancements

- [ ] JWT Authentication
- [ ] Rate Limiting
- [ ] API Key Management
- [ ] HTTPS Enforcement

---

## 🚀 Deployment

### Backend - Render/Railway

```bash
1. Push to GitHub
2. Connect repository
3. Set env variables
4. Deploy
```

### Frontend - Vercel/Netlify

```bash
npm run build
# Upload build folder
# Set REACT_APP_API_URL
```

### Database - MongoDB Atlas

```bash
1. Create free cluster
2. Get connection string
3. Update .env
```

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- **MongoDB** - Excellent NoSQL database
- **React Team** - Amazing framework
- **Framer Motion** - Smooth animations
- **Recharts** - Beautiful visualizations
- **Open Source Community** - Endless inspiration

---

## 📄 License

MIT License - See [LICENSE](LICENSE) for details

---

<div align="center">

### Made with ❤️ for Indian Agriculture

**AgriStats** - Empowering Agricultural Planning Through Data

![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white)
![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)

**MERN Stack | Full Stack Development | Agricultural Technology**

[⬆ Back to Top](#-agristats)

**© 2025 AgriStats. Built for CA2 Assignment.**

</div>
