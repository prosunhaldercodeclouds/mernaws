// src/pages/Login.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/auth/login', form).then((response) => {
      console.log('Login response:', response.data);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/dashboard');
    }).catch((error) => {
      console.error('Login error:', error);
      // Handle login error here
    })
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth margin="normal" label="Email" name="email" type="email" onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Password" name="password" type="password" onChange={handleChange} required />
          <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>Login</Button>
          <Button fullWidth variant="outlined" onClick={() => navigate('/signup')} sx={{ mt: 2 }}>SignUp</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
