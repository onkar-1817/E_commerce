# 🛒 E-Commerce Application

A full-stack **MERN E-Commerce application** built with **React, TypeScript, Node.js, Express.js, and MongoDB**.

The project provides a complete foundation for an online shopping platform, including product management, user authentication, product browsing, and REST API integration. The application is containerized using **Docker and Docker Compose**, with **Nginx** used to serve the production frontend.

---

## 🚀 Features

### 👤 User Management

* User registration
* User authentication
* JWT-based authentication
* Password hashing using bcrypt
* User-related REST APIs
* Email functionality using Nodemailer

### 🛍️ Product Management

* View all products
* View individual product details
* Add new products
* Update product information
* Partially update product fields
* Delete products
* MongoDB-based product storage

### 🌐 Frontend

* React 19
* TypeScript
* Vite
* React Router
* Axios for API communication
* Tailwind CSS
* Toast notifications
* Responsive UI

### 🔧 Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* REST APIs
* JWT authentication
* CORS
* Environment-based configuration

### 🐳 DevOps / Deployment

* Docker
* Docker Compose
* Multi-stage Docker builds
* Nginx
* MongoDB container
* Backend container
* Frontend container
* Docker health checks
* Separate frontend and backend Docker networks
* Persistent MongoDB volume

---

## 🏗️ Architecture

```text
                    ┌──────────────────────┐
                    │       Browser        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   React Frontend     │
                    │ React + TypeScript   │
                    │       + Vite         │
                    └──────────┬───────────┘
                               │
                               │ REST API
                               ▼
                    ┌──────────────────────┐
                    │    Express Backend   │
                    │       Node.js        │
                    └──────────┬───────────┘
                               │
                               │ Mongoose
                               ▼
                    ┌──────────────────────┐
                    │       MongoDB        │
                    │       Database       │
                    └──────────────────────┘

              Docker Compose manages all services
```

---

## 🧰 Tech Stack

| Layer             | Technology     |
| ----------------- | -------------- |
| Frontend          | React          |
| Language          | TypeScript     |
| Build Tool        | Vite           |
| Styling           | Tailwind CSS   |
| Routing           | React Router   |
| HTTP Client       | Axios          |
| Backend           | Node.js        |
| API Framework     | Express.js     |
| Database          | MongoDB        |
| ODM               | Mongoose       |
| Authentication    | JWT            |
| Password Security | bcrypt         |
| Email             | Nodemailer     |
| Web Server        | Nginx          |
| Containerization  | Docker         |
| Orchestration     | Docker Compose |

---

## 📁 Project Structure

```text
E_commerce/
│
├── backend/
│   ├── Model/
│   │   ├── ProductModel.js
│   │   └── UserModel.js
│   │
│   ├── Routes/
│   │   └── userRoutes.js
│   │
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── nginx/
│   │   └── nginx.conf
│   │
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.tsx
│   │   ├── Container.tsx
│   │   ├── GlobalContext.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   │
│   ├── Dockerfile
│   ├── package.json
│   ├── tailwind.config.ts
│   └── vite.config.ts
│
├── docker-compose.yml
├── .env
└── README.md
```

---

## 🔌 REST API

The backend currently exposes product and user-related APIs.

### Health Check

```http
GET /api/health
```

Response:

```json
{
  "status": "ok"
}
```

### Products

| Method | Endpoint        | Description                |
| ------ | --------------- | -------------------------- |
| GET    | `/products`     | Get all products           |
| GET    | `/products/:id` | Get a product by ID        |
| POST   | `/products`     | Create a product           |
| PUT    | `/products/:id` | Update a product           |
| PATCH  | `/products/:id` | Partially update a product |
| DELETE | `/products/:id` | Delete a product           |

### Users

```text
/api/users
```

User routes are handled through the dedicated `userRoutes.js` module.

---

# 🐳 Running with Docker

## Prerequisites

Make sure you have:

* Git
* Docker
* Docker Compose

Check Docker:

```bash
docker --version
```

Check Docker Compose:

```bash
docker compose version
```

---

## 1. Clone the Repository

```bash
git clone https://github.com/onkar-1817/E_commerce.git
```

```bash
cd E_commerce
```

---

## 2. Configure Environment Variables

Create your `.env` file:

```bash
touch .env
```

Configure the required MongoDB and application environment variables.

Example:

```env
PORT=5000

MONGO_ROOT_USERNAME=admin
MONGO_ROOT_PASSWORD=your_secure_password
MONGO_ROOT_DB=ecommerce

MONGO_URI=mongodb://admin:your_secure_password@mongo:27017/ecommerce?authSource=admin
```

> ⚠️ Never commit real passwords, JWT secrets, email credentials, or other sensitive information to GitHub.

---

## 3. Build and Start the Application

Run:

```bash
docker compose up -d --build
```

Check running containers:

```bash
docker compose ps
```

You should have three main services:

```text
mongo
backend
frontend
```

The Docker Compose configuration uses MongoDB on port `27017`, the backend on port `5000`, and the frontend through Nginx on port `8080`.

---

## 4. Access the Application

### Frontend

```text
http://localhost:8080
```

### Backend

```text
http://localhost:5000
```

### API Health Check

```text
http://localhost:5000/api/health
```

Expected response:

```json
{
  "status": "ok"
}
```

---

# 🐋 Docker Commands

### Start containers

```bash
docker compose up -d
```

### Build containers

```bash
docker compose build
```

### Build and start

```bash
docker compose up -d --build
```

### Check containers

```bash
docker compose ps
```

### View logs

```bash
docker compose logs
```

### Follow logs

```bash
docker compose logs -f
```

### View backend logs

```bash
docker compose logs -f backend
```

### View frontend logs

```bash
docker compose logs -f frontend
```

### Stop containers

```bash
docker compose stop
```

### Stop and remove containers

```bash
docker compose down
```

### Stop containers and remove volumes

```bash
docker compose down -v
```

> ⚠️ `docker compose down -v` removes the MongoDB Docker volume and therefore deletes the persisted database data.

---

# 🔄 Docker Architecture

The application is divided into three Docker services:

```text
                  Docker Compose
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
     Frontend       Backend        MongoDB
      Nginx        Node.js        MongoDB 7
       :8080         :5000          :27017
        │              │              │
        └────── frontend-network ─────┘
                       │
                 backend-network
```

The frontend uses a multi-stage Docker build:

```text
Node.js 20 Alpine
       │
       ├── Install dependencies
       ├── Build React application
       │
       ▼
Nginx Alpine
       │
       └── Serve production build
```

The backend also uses a multi-stage build and runs the Node.js application as a non-root user.

---

# 🗄️ MongoDB Persistence

MongoDB uses a Docker named volume:

```text
mongo-data
```

This allows MongoDB data to persist when the containers are restarted.

```yaml
volumes:
  mongo-data:
```

---

# 🔐 Security

The application includes several security-related components:

* JWT authentication
* Password hashing with bcrypt
* Environment variables for configuration
* CORS configuration
* Non-root backend Docker user
* Docker network isolation

For production deployment, additional security controls such as HTTPS, secure secrets management, rate limiting, input validation, and stronger CORS policies should be added.

---

# 🧪 Development

## Frontend

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend uses Vite for development and production builds.

---

## Backend

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

For development with Nodemon:

```bash
npm run dev
```

The backend package uses Express, Mongoose, MongoDB, JWT, bcrypt, CORS, dotenv, and Nodemailer.

---

# 📊 Application Flow

```text
User
 │
 ▼
React Frontend
 │
 │ Axios / REST API
 ▼
Express.js Backend
 │
 ├── Authentication
 │
 ├── User Management
 │
 └── Product Management
 │
 ▼
Mongoose
 │
 ▼
MongoDB
```

---

# 🎯 Project Goals

This project was built to practice and demonstrate:

* Full-stack web development
* REST API development
* React + TypeScript
* Node.js and Express
* MongoDB and Mongoose
* JWT authentication
* Docker containerization
* Docker Compose
* Nginx
* Multi-container application deployment
* Environment-based configuration
* Basic production-oriented deployment practices

---

# 🚀 Future Improvements

Planned improvements could include:

* [ ] Shopping cart functionality
* [ ] Order management
* [ ] Payment gateway integration
* [ ] Admin dashboard
* [ ] Product search and filtering
* [ ] Product categories
* [ ] Product image upload
* [ ] Pagination
* [ ] Wishlist
* [ ] Email verification
* [ ] Password reset flow
* [ ] Automated testing
* [ ] CI/CD with GitHub Actions
* [ ] AWS deployment
* [ ] HTTPS with SSL/TLS
* [ ] Monitoring with Prometheus and Grafana
* [ ] Centralized logging
* [ ] Production secrets management

---

# ☁️ DevOps Deployment Roadmap

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
GitHub Actions
    │
    ├── Build
    ├── Test
    ├── Docker Build
    └── Push Docker Images
             │
             ▼
        Docker Registry
             │
             ▼
        AWS EC2 / ECS
             │
       ┌─────┴─────┐
       ▼           ▼
   Frontend     Backend
    Nginx       Node.js
                   │
                   ▼
                MongoDB
```

---

# 👨‍💻 Author

**Onkar Ghugare**

GitHub:
https://github.com/onkar-1817

Repository:
https://github.com/onkar-1817/E_commerce

---

# ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is intended for learning and development purposes.
