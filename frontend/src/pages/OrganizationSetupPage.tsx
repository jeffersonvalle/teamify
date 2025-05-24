import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputField from "../components/InputField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useInitialSetup } from "../InitialSetupContext";

export default function OrganizationSetupPage() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const { setNeedsInitialSetup } = useInitialSetup();
  const navigate = useNavigate();

  const handleSave = async () => {
    setError("");
    if (!name || !address) {
      setError("Todos los campos son obligatorios");
      return;
    }
    try {
      // Simulación de guardado exitoso
      setNeedsInitialSetup(false);
      navigate("/login");
    } catch (err) {
      setError("Error al guardar los datos");
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
        Configuración inicial de la organización
      </Typography>
      <Box sx={{ width: 400, display: 'flex', flexDirection: 'column', gap: 3 }}>
        <InputField
          label="Nombre de la organización"
          placeholder="Ej: Acme Corp"
          value={name}
          onChange={e => setName(e.target.value)}
          name="org-name"
        />
        <InputField
          label="Dirección"
          placeholder="Ej: Calle Falsa 123"
          value={address}
          onChange={e => setAddress(e.target.value)}
          name="org-address"
        />
        <Button variant="contained" onClick={handleSave} sx={{ height: 48, fontWeight: 600, fontSize: 18 }}>
          Guardar configuración
        </Button>
        {error && <Typography color="error">{error}</Typography>}
      </Box>
    </Box>
  );
} 