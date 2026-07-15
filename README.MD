# 🚀 Deepak Portfolio

A modern, full-stack developer portfolio built with **React**, **Vite**, **Django**, and **Django REST Framework**. The project follows a scalable monorepo architecture and showcases my professional profile, projects, services, technologies, experience, and achievements through a production-ready web application.

---

## 🌐 Live Demo

- **Portfolio Website:** https://your-portfolio.vercel.app
- **Backend API:** https://portfolio-backend-qnz4.onrender.com
- **Admin Dashboard:** https://portfolio-backend-qnz4.onrender.com/admin

---

# 📸 Preview

> Add screenshots or GIFs here.

```
Landing Page
Projects
Services
About
Admin Dashboard
Mobile View
```

---

# ✨ Features

## Frontend

- Modern UI/UX
- Responsive Design
- Dark Theme
- REST API Integration
- Dynamic Portfolio Content
- Featured Projects
- Project Details
- Services
- Technology Stack
- Statistics
- FAQ
- Maintenance Mode
- SEO Friendly
- Loading Skeletons
- Error Handling

---

## Backend

- Django REST Framework
- PostgreSQL Database
- Cloudinary Media Storage
- Django Unfold Admin
- RESTful APIs
- Modular Architecture
- Slug-based URLs
- Ordered Content Management
- Production Ready Configuration
- Environment Variables
- WhiteNoise Static Files

---

# 🛠 Tech Stack

## Frontend

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- Axios
- TanStack React Query
- Framer Motion
- Lucide React
- React Hot Toast

---

## Backend

- Python 3
- Django 6
- Django REST Framework
- Django Filters
- Django Unfold

---

## Database

- PostgreSQL (Neon)

---

## Media Storage

- Cloudinary

---

## Deployment

- Vercel
- Render

---

## Version Control

- Git
- GitHub

---

# 🏗 Architecture

```text
                        GitHub Repository
                               │
                ┌──────────────┴──────────────┐
                │                             │
                ▼                             ▼
         React + Vite                  Django REST API
             (Vercel)                     (Render)
                │                             │
                └──────────────┬──────────────┘
                               │
                     PostgreSQL (Neon)
                               │
                         Cloudinary CDN
```

---

# 📂 Project Structure

```text
Portfolio/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── backend/
│   ├── apps/
│   ├── config/
│   ├── manage.py
│   ├── requirements.txt
│   └── README.md
│
├── .gitignore
├── README.md
└── LICENSE
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/rai-deepak-07/Portfolio.git
```

```bash
cd Portfolio
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Runs on

```
http://localhost:5173
```

---

## Backend

```bash
cd backend

python -m venv venv
```

Activate

Windows

```bash
venv\Scripts\activate
```

Linux/macOS

```bash
source venv/bin/activate
```

Install packages

```bash
pip install -r requirements.txt
```

Run migrations

```bash
python manage.py migrate
```

Create superuser

```bash
python manage.py createsuperuser
```

Run server

```bash
python manage.py runserver
```

Backend

```
http://127.0.0.1:8000
```

---

# 🔑 Environment Variables

## Frontend

```env
VITE_API_URL=http://127.0.0.1:8000/api/v1
VITE_APP_NAME=Deepak Portfolio
```

---

## Backend

```env
SECRET_KEY=your-secret-key

DEBUG=True

DATABASE_URL=your-neon-postgresql-url

ALLOWED_HOSTS=127.0.0.1,localhost

CORS_ALLOWED_ORIGINS=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your-cloud-name

CLOUDINARY_API_KEY=your-api-key

CLOUDINARY_API_SECRET=your-api-secret
```

---

# 📡 API Overview

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

# 🌟 Project Highlights

- Full Stack Architecture
- Production Deployment
- PostgreSQL Database
- Cloudinary Media Storage
- REST API
- Responsive UI
- Modern Admin Dashboard
- Clean Folder Structure
- SEO Friendly
- Scalable Design

---

# 📅 Roadmap

## ✅ Completed

- React Frontend
- Django Backend
- REST APIs
- PostgreSQL Integration
- Cloudinary Integration
- Admin Dashboard
- Render Deployment
- Vercel Deployment
- Production Environment Configuration

---

## 🚧 In Progress

- Portfolio Analytics
- Performance Optimization
- Accessibility Improvements

---

## 📌 Planned

- Blog Module
- JWT Authentication
- Docker Support
- API Documentation
- CI/CD Pipeline
- Redis Caching
- Celery Background Tasks
- Unit & Integration Testing
- PWA Support

---

# 💻 Development Principles

- Clean Code
- SOLID Principles
- DRY
- RESTful Design
- Modular Architecture
- Responsive Design
- Production First
- Scalable Development

---

# 👨‍💻 Author

## Deepak Raikwar

**Python Backend Developer | React Developer | Django & Django REST Framework**

- 🌐 Portfolio: https://your-portfolio.vercel.app
- 💼 LinkedIn: https://linkedin.com/in/deepakraikwar
- 💻 GitHub: https://github.com/rai-deepak-07

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

# 📄 License

This project is licensed under the **MIT License**.