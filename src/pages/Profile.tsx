import { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({ name: '', email: '', phone: '', profilePic: 'profile.jpg' });
  const [phone, setPhone] = useState('');
  const [profilePic, setProfilePic] = useState('profile.jpg');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [alertMsg, setAlertMsg] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    setUser({ ...storedUser, profilePic: storedUser.profilePic || 'profile.jpg' });
    setPhone(storedUser.phone || '');
    setProfilePic(storedUser.profilePic || 'profile.jpg');
  }, []);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Update user profile API call
      await axios.put('http://localhost:5000/profile', { phone, profilePic }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setAlertMsg('Profile updated successfully!');
      const updatedUser = { ...user, phone, profilePic };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
    } catch {
      setAlertMsg('Failed to update profile.');
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/reset-password', {
        currentPassword,
        newPassword
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setAlertMsg('Password updated successfully!');
      setCurrentPassword('');
      setNewPassword('');
    } catch {
      setAlertMsg('Password update failed.');
    }
  };

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // For demo: just use the file name, in real app upload to server and get URL
      setProfilePic(e.target.files[0].name);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      {alertMsg && <div className="mb-4 text-green-600">{alertMsg}</div>}
      <div className="flex flex-col items-center mb-4">
        <img
          src={`/${profilePic}`}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border mb-2"
        />
        <input type="file" accept="image/*" onChange={handleProfilePicChange} />
      </div>
      <form onSubmit={handleProfileUpdate} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input className="input" value={user.name} disabled />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input className="input" value={user.email} disabled />
        </div>
        <div>
          <label className="block font-medium">Phone Number</label>
          <input
            className="input"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="Enter phone number"
          />
        </div>
        <button type="submit" className="btn-primary w-full">Update Profile</button>
      </form>
      <hr className="my-6" />
      <form onSubmit={handlePasswordReset} className="space-y-4">
        <div>
          <label className="block font-medium">Current Password</label>
          <input
            className="input"
            type="password"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-medium">New Password</label>
          <input
            className="input"
            type="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-primary w-full">Reset Password</button>
      </form>
    </div>
  );
};

export default Profile;