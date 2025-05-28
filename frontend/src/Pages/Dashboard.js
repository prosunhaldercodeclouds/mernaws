// src/pages/Dashboard.js
import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth logic here (if any)
    navigate('/login');
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Welcome to the Dashboard
        </Typography>
        <Typography variant="h6" gutterBottom>
          You are now logged in!
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleLogout} sx={{ mt: 4 }}>
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Dashboard;
