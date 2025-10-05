# My Portfolio Website - Backend (API)

## ⚙️ Project Overview

This is the backend API repository for the personal portfolio website. Its primary responsibilities are handling **Authentication & Authorization** and managing the dynamic content (Blogs and Projects) via **CRUD (Create, Read, Update, Delete)** operations. It ensures that only the portfolio owner can modify content through a secure dashboard.

## 🔑 Core Features

* **Secure Authentication & Authorization:** Implements a robust login system using **JWT (JSON Web Tokens)** for session management.
* **Owner Access:** Only authorized users (the portfolio owner) can access protected endpoints for content management.
* **User Management:** Passwords are securely hashed using **bcrypt** before being stored in the database.
* **Admin Seeding:** The backend includes a mechanism to **seed an initial admin user** upon setup, enabling immediate owner login.
* **Blog Management API:** Full CRUD operations for creating, reading, updating, and deleting blog posts (owner-only access for CUD).
* **Project Management API:** CRUD operations for managing the projects showcased on the site.
* **Strict Error Handling:** Provides professional, informative error responses for form validation failures, API errors, and unauthorized requests.

## 🛠️ Technology Stack

* **Runtime Environment:** Node.js
* **Web Framework:** Express.js
* **Language:** TypeScript
* **Database:** PostgreSQL
* **ORM:** Prisma (Next-generation ORM)
* **Authentication:** JWT (JSON Web Tokens)
* **Security:** `bcrypt` (for password hashing)

## 🔗 Links & Credentials

| Category | Description | Link / Details |
| :--- | :--- | :--- |
| **Live API** | Deployed Backend API | [b5-a7-2-portfolio-backend.vercel.app](https://b5-a7-2-portfolio-backend.vercel.app/) |
| **GitHub Repo** | This Repository | [MdImranHossen01/B5A7-2-portfolio-backend](https://github.com/MdImranHossen01/B5A7-2-portfolio-backend) |
| **Frontend Site** | Live Frontend Application | [b5-a7-2-portfolio-frontend.vercel.app](https://b5-a7-2-portfolio-frontend.vercel.app/) |
| **Demo Video** | Project Walkthrough (10-15 mins) | [YouTube Demo](https://youtu.be/bErNuBeSlZI) |

### 🔒 Admin Credentials for Testing

Use these credentials to access the private dashboard on the frontend application:

| Detail | Value |
| :--- | :--- |
| **ADMIN\_EMAIL** | `admin@example.com` |
| **ADMIN\_PASSWORD**| `admin123` |

## ⚙️ Setup Instructions

Follow these steps to set up and run the backend locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/MdImranHossen01/B5A7-2-portfolio-backend.git](https://github.com/MdImranHossen01/B5A7-2-portfolio-backend.git)
    cd B5A7-2-portfolio-backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory and configure your database connection and secrets:
    ```env
    # Database Configuration
    DATABASE_URL="postgresql://[USER]:[PASSWORD]@[HOST]:[PORT]/[DB_NAME]?schema=public"

    # Application Configuration
    NODE_ENV="development"
    PORT=5000

    # JWT Secret for token signing
    JWT_SECRET="YOUR_STRONG_SECRET_KEY"

    # Admin Seeding Credentials (Used to create the initial admin user)
    ADMIN_EMAIL="admin@example.com"
    ADMIN_PASSWORD="admin123"
    ```

4.  **Setup Database and Seed Admin User (Prisma):**
    Apply migrations and run the seeding script to initialize the database schema and create the admin user:
    ```bash
    # Run Prisma migrations and seed the database
    npx prisma migrate dev --name init
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The API will be running locally, typically at `http://localhost:5000/api/`.
    Also Vercel Live API Link: `https://b5-a7-2-portfolio-backend.vercel.app/api`

    ### Thanks
    ### Md. Imran Hossen