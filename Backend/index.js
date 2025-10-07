import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import noteRoutes from './routes/note.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Database Connected Successfully');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error while connecting with the database:', error);
    process.exit(1);
  }
};

const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173", // Default to Vite dev server
  optionsSuccessStatus: 200
};

// CORS Middleware
app.use(cors(corsOptions));

// Middleware to parse JSON request bodies
app.use(express.json());

// Add a simple GET route for the root path
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Note Taking App API!' });
});

// Routing Middleware
app.use('/api/v1/noteapp', noteRoutes);

connectDB();