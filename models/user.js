import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: { type: String, default: '' },
  profilePic: { type: String, default: '// Example for Express.js
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  // Return user details (add phone and profilePic if available)
  res.json({
    token,
    user: {
      name: user.name,
      email: user.email,
      phone: user.phone || '',
      profilePic: user.profilePic || 'profile.jpg'
    }
  });
});' }
});

const User = mongoose.model('User', userSchema);
export default User;