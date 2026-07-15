# 🚀 Portfolio Backend API

A production-ready backend built with **Django** and **Django REST Framework** that powers my personal portfolio website. The project follows a modular architecture with scalable REST APIs, PostgreSQL, Cloudinary media storage, and a modern Django admin dashboard.

---

## 🌐 Live Demo

- **Frontend:** https://your-frontend.vercel.app
- **Backend API:** https://portfolio-backend-qnz4.onrender.com
- **Admin Panel:** https://portfolio-backend-qnz4.onrender.com/admin/

---

# ✨ Features

- RESTful API built with Django REST Framework
- Modular application architecture
- Professional Django Unfold admin dashboard
- PostgreSQL database
- Cloudinary media storage
- Slug-based URLs
- Ordered content management
- Read-only public APIs
- Environment variable configuration
- Production-ready deployment
- CORS configuration
- WhiteNoise static file serving
- Responsive admin interface
- Clean and scalable codebase

---

# 🛠 Tech Stack

## Backend

- Python 3
- Django 6
- Django REST Framework

## Database

- PostgreSQL (Neon)

## Media Storage

- Cloudinary

## Static Files

- WhiteNoise

## Admin Panel

- Django Unfold

## Deployment

- Render
- Vercel (Frontend)

## Development Tools

- Git
- Virtual Environment
- dotenv

---

# 📂 Project Structure

```text
Backend/
│
├── apps/
│   ├── common/
│   └── portfolio/
│       ├── admin/
│       ├── api/
│       │   ├── serializers/
│       │   ├── views/
│       │   └── urls.py
│       ├── models/
│       ├── migrations/
│       ├── urls.py
│       └── apps.py
│
├── config/
│
├── static/
│
├── requirements.txt
├── manage.py
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/rai-deepak-07/Portfolio.git
```

```bash
cd Portfolio/Backend
```

---

## Create Virtual Environment

Windows

```bash
python -m venv venv
venv\Scripts\activate
```

Linux / macOS

```bash
python3 -m venv venv
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Configure Environment Variables

Create a `.env` file.

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

## Apply Migrations

```bash
python manage.py migrate
```

---

## Create Superuser

```bash
python manage.py createsuperuser
```

---

## Run Development Server

```bash
python manage.py runserver
```

Backend

```
http://127.0.0.1:8000/
```

Admin

```
http://127.0.0.1:8000/admin/
```

---

# 📡 REST API

## Portfolio Configuration

```
GET /api/v1/configuration/
```

---

## Technology Types

```
GET /api/v1/tech-types/
```

---

## Technologies

```
GET /api/v1/technologies/
```

---

## Services

```
GET /api/v1/services/
```

---

## Projects

```
GET /api/v1/projects/
```

```
GET /api/v1/projects/{slug}/
```

---

## Statistics

```
GET /api/v1/statistics/
```

---

## FAQs

```
GET /api/v1/faqs/
```

---

## Maintenance

```
GET /api/v1/maintenance/
```

---

# 🔐 Authentication

The current portfolio APIs are public and optimized for content delivery.

The Django admin dashboard is protected using Django's authentication system.

Future releases may include:

- JWT Authentication
- Refresh Tokens
- Role-based Access Control
- API Rate Limiting

---

# 🖼 Media Storage

All uploaded files are stored securely on **Cloudinary**.

Supported uploads include:

- Project thumbnails
- Project gallery images
- Profile image
- Resume
- Portfolio assets

---

# 🚀 Deployment Architecture

```text
                 GitHub Repository
                        │
        ┌───────────────┴───────────────┐
        │                               │
        ▼                               ▼
   Vercel Frontend                Render Backend
                                          │
                       ┌──────────────────┴──────────────────┐
                       │                                     │
                       ▼                                     ▼
                Neon PostgreSQL                    Cloudinary Storage
```

---

# 📅 Roadmap

## ✅ Completed

- Modular Django Architecture
- REST API
- PostgreSQL Integration
- Cloudinary Media Storage
- Django Unfold Admin
- Render Deployment
- Vercel Frontend Deployment
- Production Environment Configuration

## 🚧 In Progress

- Visitor Analytics
- SEO Enhancements
- Performance Optimization

## 📌 Planned

- JWT Authentication
- Docker Support
- API Documentation
- CI/CD Pipeline
- Unit Testing
- Redis Caching
- Background Tasks (Celery)

---

# 🧹 Development Principles

- Clean Architecture
- SOLID Principles
- DRY (Don't Repeat Yourself)
- RESTful API Design
- Modular Development
- Environment-based Configuration
- Production-first Deployment

---

# 👨‍💻 Author

**Deepak Raikwar**

Python Backend Developer • Django & Django REST Framework Developer

- GitHub: https://github.com/rai-deepak-07
- LinkedIn: https://linkedin.com/in/deepakraikwar
- Portfolio: https://your-portfolio.vercel.app

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.