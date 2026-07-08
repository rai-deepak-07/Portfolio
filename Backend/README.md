# 🚀 Portfolio Backend API

A scalable and production-ready backend built with **Django** and **Django REST Framework** to power my personal portfolio website. This backend is designed with a modular architecture, making it easy to extend into a freelance platform, SaaS products, and future business applications.

---

# 📌 Features

- Professional Django Project Structure
- Modular App Architecture
- Django REST Framework API
- Django Unfold Admin Dashboard
- RESTful API Design
- Slug-based URLs
- Image & File Upload Support
- Read-Only Public APIs
- Contact Form API
- SQLite (Development)
- PostgreSQL Ready
- Scalable Folder Structure
- Production Ready Architecture

---

# 🛠 Tech Stack

## Backend

- Python 3.14
- Django 6
- Django REST Framework

## Database

- SQLite (Development)
- PostgreSQL (Production Ready)

## Admin

- Django Unfold

## Media

- Pillow

## API

- REST API
- JSON

## Development

- Git
- Virtual Environment
- Modular Architecture

---

# 📂 Project Structure

```text
Backend/
│
├── apps/
│   │
│   ├── common/
│   │
│   ├── accounts/
│   │
│   └── portfolio/
│       │
│       ├── admin/
│       │
│       ├── api/
│       │   ├── serializers/
│       │   ├── views/
│       │   └── urls.py
│       │
│       ├── models/
│       │
│       ├── migrations/
│       │
│       ├── services/
│       │
│       ├── urls.py
│       └── apps.py
│
├── config/
│
├── media/
│
├── static/
│
├── templates/
│
├── requirements.txt
│
├── manage.py
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/<username>/portfolio-backend.git
```

```bash
cd Backend
```

---

## Create Virtual Environment

Windows

```bash
python -m venv venv
```

Activate

```bash
venv\Scripts\activate
```

Linux / macOS

```bash
python3 -m venv venv
```

```bash
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
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

## Run Server

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

# 📡 API Endpoints

## About

```
GET /api/v1/about/
```

---

## Categories

```
GET /api/v1/categories/
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
GET /api/v1/projects/<slug>/
```

---

## Resume

```
GET /api/v1/resume/
```

---

## Skills

```
GET /api/v1/skills/
```

---

## Certificates

```
GET /api/v1/certificates/
```

---

## Statistics

```
GET /api/v1/statistics/
```

---

## Maintenance

```
GET /api/v1/maintenance/
```

---

## Contact

```
POST /api/v1/contact/
```

---

# 🔐 Authentication

Currently the backend exposes **public read-only APIs** for portfolio content.

The Django Admin panel is protected using Django's authentication system.

Future releases will include:

- JWT Authentication
- Refresh Tokens
- User Roles
- Permission Management

---

# 🖼 Media

Uploaded media is stored in:

```text
media/
```

Supported:

- Profile Images
- Project Images
- Certificates
- Resume Files

---

# 🎯 Current Architecture

```text
React Frontend
        │
        ▼
REST API (Django REST Framework)
        │
        ▼
Business Logic
        │
        ▼
SQLite Database
        │
        ▼
Django Unfold Admin
```

---

# 📅 Roadmap

### ✅ Completed

- Project Structure
- Modular Models
- Modular Serializers
- Modular Views
- Modular URLs
- Django Unfold
- Public REST APIs

### 🚧 In Progress

- Frontend Development

### 📌 Planned

- JWT Authentication
- Visitor Analytics
- Search & Filtering
- API Documentation
- Docker Support
- CI/CD
- PostgreSQL Production Deployment
- Automated Testing

---

# 📖 Development Principles

- Clean Code
- DRY (Don't Repeat Yourself)
- SOLID Principles
- RESTful API Design
- Modular Architecture
- Scalable Folder Structure
- Separation of Concerns

---

# 👨‍💻 Author

**Deepak Raikwar**

MCA Graduate | Python Backend Developer | Django & DRF Developer

GitHub: https://github.com/<your-username>

LinkedIn: https://linkedin.com/in/<your-profile>

Portfolio: Coming Soon 🚀