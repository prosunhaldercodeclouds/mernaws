// src/pages/SignUp.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, form).then((response) => {
      console.log('Signup response:', response.data);
      navigate('/login');
    }).catch((error) => {
      console.error('Login error:', error);
      // Handle login error here
    })
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>Sign Up</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth margin="normal" label="First Name" name="firstname" onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Last Name" name="lastname" onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Email" name="email" type="email" onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Phone" name="phone" onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Password" name="password" type="password" onChange={handleChange} required />
          <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>Sign Up</Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignUp;
