# Portfolio Backend API

A professional backend built with Django REST Framework to power my personal portfolio, freelance projects, and future SaaS products.

---

## Tech Stack

- Python
- Django
- Django REST Framework
- PostgreSQL
- JWT Authentication
- Pillow
- Django Filter

---

## Project Structure

```
PortfolioBackend/

apps/

    accounts/

    common/

    portfolio/

config/

media/

static/

docs/

manage.py

requirements.txt

README.md
```

---

## Setup

Clone repository

```bash
git clone <repository-url>
```

Move into project

```bash
cd PortfolioBackend
```

Create virtual environment

```bash
python -m venv venv
```

Activate

Windows

```bash
venv\Scripts\activate
```

Linux

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create `.env`

Example

```
SECRET_KEY=your-secret-key
DEBUG=True
DATABASE_NAME=portfolio
DATABASE_USER=postgres
DATABASE_PASSWORD=password
DATABASE_HOST=localhost
DATABASE_PORT=5432
```

Run migrations

```bash
python manage.py migrate
```

Run server

```bash
python manage.py runserver
```

---

## Applications

- Accounts
- Portfolio
- Common

---

## Development Standards

- Black
- isort
- flake8
- DRY
- SOLID
- REST API
- JWT Authentication

---

## Author

Deepak Raikwar