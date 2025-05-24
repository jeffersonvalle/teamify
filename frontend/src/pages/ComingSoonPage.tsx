import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputField from "../components/InputField";
import MainButton from "../components/MainButton";
import Alert from "@mui/material/Alert";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Por favor, introduce un email válido.");
      return;
    }
    // Aquí podrías hacer una petición para guardar el email
    setSubmitted(true);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'linear-gradient(135deg, #0a84ff 0%, #6dd5ed 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 2 }}>
      <Box sx={{
        bgcolor: 'white',
        borderRadius: 6,
        boxShadow: '0 8px 32px rgba(10,132,255,0.15)',
        p: { xs: 3, sm: 6 },
        maxWidth: 420,
        width: '100%',
        textAlign: 'center',
      }}>
        <Typography variant="h2" fontWeight={800} sx={{ color: '#0a84ff', mb: 2, fontSize: 48, letterSpacing: 2 }}>
          PRÓXIMAMENTE
        </Typography>
        <Typography sx={{ color: '#333', mb: 4, fontSize: 20 }}>
          Estamos trabajando en algo increíble.<br />
          Déjanos tu email y te avisaremos cuando lancemos el producto.
        </Typography>
        {submitted ? (
          <Alert severity="success">¡Gracias! Te avisaremos cuando lancemos el producto.</Alert>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <InputField
              label="Email"
              placeholder="tucorreo@ejemplo.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
              autoComplete="email"
            />
            {error && <Alert severity="error">{error}</Alert>}
            <MainButton type="submit">Notificarme</MainButton>
          </form>
        )}
      </Box>
    </Box>
  );
} 