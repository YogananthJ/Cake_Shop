import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      // Sign up the user
      await axios.post('http://localhost:5000/signup', {
        name,
        email,
        password,
      });

      // Immediately log in after signup to get token and user info
      const loginRes = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      const { token, user } = loginRes.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Reload to update header state
      window.location.href = '/profile';
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.msg) {
        setErrorMsg(error.response.data.msg);
      } else {
        setErrorMsg('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-bakery p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-babyPink-500 to-lightBrown-600 bg-clip-text text-transparent">
            Create Account
          </CardTitle>
          <CardDescription>
            Sign up for CakeNest
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {errorMsg && (
              <div className="text-red-500 text-sm">{errorMsg}</div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button type="submit" className="w-full btn-primary">
              Sign Up
            </Button>
            <span className="text-sm text-lightBrown-600">
              Already have an account?{' '}
              <Link to="/login" className="text-babyPink-500 hover:underline">
                Login
              </Link>
            </span>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
