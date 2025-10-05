// src/index.ts

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './routes/auth';
import blogRoutes from './routes/blogs';
import projectRoutes from './routes/projects';
import userRoutes from './routes/users';

dotenv.config();

connectDB();

const app = express();

app.use(cors({
  origin: [
    'http://localhost:3000',  // Your local frontend
    'https://b5-a7-2-portfolio-frontend.vercel.app' // Your deployed frontend (add this later)
  ],
  credentials: true, // This is essential
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Be explicit about methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Be explicit about headers
}));


app.use(express.json());

// Your existing API routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);


// --- ADD THIS NEW CODE ---
// A simple root route to show the API is running
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Portfolio API is running!' });
});
// --- END OF NEW CODE ---


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});