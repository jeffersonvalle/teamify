import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useInitialSetup } from "../InitialSetupContext";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setNeedsInitialSetup, setOrganizationId } = useInitialSetup();
  const navigate = useNavigate();
  const { loginWithRedirect, isLoading } = useAuth0();

  const handleLogin = async () => {
    setError("");
    try {
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        setError("Invalid credentials");
        return;
      }
      const data = await response.json();
      // Guardar sesión en localStorage
      localStorage.setItem("session", JSON.stringify(data));
      // Paso 1.2: Definir organización sin datos
      // Una organización está 'sin datos' si falta nombre o dirección
      const org = data.organization;
      const orgMissingData = !org || !org.name || !org.address;
      if (orgMissingData) {
        setNeedsInitialSetup(true); // Paso 1.3: Guardar flag en estado global
        setOrganizationId(org?.id ?? null);
        navigate("/organization-setup");
      } else {
        setNeedsInitialSetup(false);
        setOrganizationId(org?.id ?? null);
        navigate("/coming-soon");
      }
    } catch (err) {
      setError("Login failed");
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fff' }}>
      {/* Header */}
      <Box
        sx={{
          width: '100%',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          pl: 6,
          borderBottom: '1px solid #ececec',
          position: 'fixed',
          top: 0,
          left: 0,
          bgcolor: '#fff',
          zIndex: 10,
        }}
      >
        <Typography variant="h5" fontWeight={700} sx={{ fontFamily: 'inherit', letterSpacing: 0 }}>
          Teamify
        </Typography>
      </Box>
      {/* Main Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          pt: 8,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ mb: 5, mt: 2, fontSize: 32, fontFamily: 'inherit', textAlign: 'center' }}
        >
          Welcome back
        </Typography>
        <Box
          sx={{
            width: 480,
            display: 'flex',
            flexDirection: 'column',
            gap: 2.5,
          }}
        >
          <Button
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: 999,
              fontWeight: 600,
              fontSize: 20,
              height: 56,
              textTransform: 'none',
              mt: 2,
            }}
            onClick={() => loginWithRedirect()}
            disabled={isLoading}
          >
            Iniciar sesión con Auth0
          </Button>
          {error && <Typography color="error">{error}</Typography>}
        </Box>
      </Box>
    </Box>
  );
} 