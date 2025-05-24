'use client';

import { useEffect, useState } from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

export default function Home() {
  const [healthMessage, setHealthMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch('http://localhost:8000/health');
        const data = await response.json();
        setHealthMessage(data.message);
      } catch (err) {
        setError('Failed to connect to backend');
      }
    };

    checkHealth();
  }, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Teamify Frontend
          </Typography>
          {error ? (
            <Typography color="error">{error}</Typography>
          ) : (
            <Typography variant="body1">
              Backend Status: {healthMessage || 'Checking...'}
            </Typography>
          )}
        </Paper>
      </Box>
    </Container>
  );
}
