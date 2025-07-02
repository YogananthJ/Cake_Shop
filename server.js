import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // ✅ Added CORS import
import User from './models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import auth from './middleware/auth.js';

const app = express();

// ✅ Enable CORS for all origins (or restrict if needed)
app.use(cors());

// Enable JSON body parsing
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

/* Signup API */
app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: 'User already exists' });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ msg: 'User created successfully' });

  } catch (err) {
    console.error('Signup Error:', err);
    res.status(500).json({ msg: 'Server error during signup' });
  }
});

/* Login API */
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'User not found' });

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    // Create JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });

  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ msg: 'Server error during login' });
  }
});

/* Protected Route Example */
app.get('/protected', auth, (req, res) => {
  res.json({ msg: `Hello user ${req.user.id}, you accessed a protected route.` });
});

app.listen(5000, () => console.log('Server running on port 5000'));
