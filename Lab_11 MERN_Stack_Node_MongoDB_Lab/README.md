# Ecommerce Lab Task

Beautiful full-stack ecommerce starter built with:
- **Frontend:** Next.js + Tailwind CSS
- **Backend:** Node.js + Express.js + MongoDB

## Project Structure

```txt
ecommerce-app/
├── backend/   # Node + Express + MongoDB API
└── frontend/  # Next.js + Tailwind UI
```

## Step-by-Step Setup

### 1) Setup Backend

1. Open terminal in `backend`:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file:
   ```bash
   copy .env.example .env
   ```
4. Make sure MongoDB is running locally.
5. Seed demo products:
   ```bash
   npm run seed
   ```
6. Start backend server:
   ```bash
   npm run dev
   ```

Backend runs at: `http://localhost:5000`

### 2) Setup Frontend

1. Open new terminal in `frontend`:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. (Optional) Create `.env.local`:
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
   ```
4. Start frontend:
   ```bash
   npm run dev
   ```

Frontend runs at: `http://localhost:3000`

## API Endpoint

- `GET /api/products` -> returns product list from MongoDB.

## What Is Implemented

- MongoDB connection with Mongoose
- Product model/schema
- Express route/controller for fetching products
- Product seed script with sample data
- Modern product grid UI in Next.js + Tailwind
- Dynamic frontend fetch from backend API
