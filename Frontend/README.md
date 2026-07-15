# 🚀 Deepak Portfolio Frontend

A modern, responsive, and high-performance portfolio website built with **React**, **Vite**, and **Tailwind CSS**. The application consumes a Django REST Framework backend and showcases projects, skills, services, statistics, and professional experience through a clean and interactive user interface.

---

## 🌐 Live Demo

- **Portfolio:** https://your-portfolio.vercel.app
- **Backend API:** https://portfolio-backend-qnz4.onrender.com

---

# ✨ Features

- Modern UI/UX
- Fully Responsive Design
- Dark Theme
- REST API Integration
- Dynamic Portfolio Content
- Featured Projects
- Project Details
- Services Section
- Technology Stack
- Statistics Section
- FAQ Section
- Maintenance Mode Support
- SEO Friendly
- Fast Loading
- Component-Based Architecture
- Environment Variable Configuration
- Production Ready

---

# 🛠 Tech Stack

## Frontend

- React 19
- Vite
- React Router DOM

## Styling

- Tailwind CSS
- CSS Variables
- Responsive Design

## State Management

- React Context API

## Data Fetching

- Axios
- TanStack React Query

## Icons

- Lucide React
- React Icons

## Animation

- Framer Motion

## Notifications

- React Hot Toast

## Deployment

- Vercel

---

# 📂 Project Structure

```text
frontend/
│
├── public/
│
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── news/
│   │   └── ui/
│   │
│   ├── constants/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── routes/
│   ├── styles/
│   ├── utils/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/rai-deepak-07/Portfolio.git
```

```bash
cd Portfolio/frontend
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file.

```env
VITE_API_URL=http://127.0.0.1:8000/api/v1
VITE_APP_NAME=Deepak Portfolio
```

For production:

```env
VITE_API_URL=https://portfolio-backend-qnz4.onrender.com/api/v1
```

---

## Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## Production Build

```bash
npm run build
```

Preview:

```bash
npm run preview
```

---

# 📱 Pages

- Home
- About
- Services
- Projects
- Project Details
- Experience
- Technologies
- Statistics
- FAQ
- Contact
- Maintenance

---

# 🔗 Backend Integration

The frontend consumes REST APIs from the Django backend.

Example endpoints:

```
GET /api/v1/configuration/
```

```
GET /api/v1/projects/
```

```
GET /api/v1/services/
```

```
GET /api/v1/technologies/
```

```
GET /api/v1/statistics/
```

```
GET /api/v1/faqs/
```

```
GET /api/v1/maintenance/
```

---

# 🚀 Deployment

The frontend is deployed on **Vercel**.

Deployment workflow:

```text
GitHub
   │
   ▼
Vercel
   │
   ▼
React Application
```

---

# 🎨 UI Highlights

- Mobile-first Design
- Responsive Navigation
- Dynamic Hero Section
- Featured Projects
- Technology Showcase
- Modern Cards
- Smooth Animations
- Interactive Components
- Loading Skeletons
- Error States
- Empty States

---

# 📅 Roadmap

## ✅ Completed

- React + Vite Setup
- Responsive Layout
- Dynamic API Integration
- Routing
- Context API
- Project Showcase
- Services Section
- Technologies Section
- FAQ
- Production Deployment

## 🚧 In Progress

- Performance Optimization
- Accessibility Improvements
- SEO Enhancements

## 📌 Planned

- Blog Section
- Theme Customization
- Internationalization (i18n)
- PWA Support
- Visitor Analytics

---

# 🧹 Development Principles

- Component-Based Architecture
- Reusable UI Components
- Responsive Design
- Clean Code
- Separation of Concerns
- API-Driven Development
- Performance Optimization

---

# 👨‍💻 Author

**Deepak Raikwar**

Python Backend Developer • React Developer • Django & Django REST Framework

- GitHub: https://github.com/rai-deepak-07
- LinkedIn: https://linkedin.com/in/deepakraikwar
- Portfolio: https://your-portfolio.vercel.app

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.