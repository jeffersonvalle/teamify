import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface PasswordFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  autoComplete?: string;
  disabled?: boolean;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  autoComplete,
  disabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <TextField
      fullWidth
      label={label}
      placeholder={placeholder}
      type={showPassword ? 'text' : 'password'}
      value={value}
      onChange={onChange}
      name={name}
      autoComplete={autoComplete}
      disabled={disabled}
      margin="normal"
      InputProps={{
        style: {
          background: '#f5f7fa',
          borderRadius: 12,
          fontSize: 18,
          height: 56,
        },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
              size="large"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      InputLabelProps={{
        style: {
          fontWeight: 500,
          fontSize: 16,
        },
        shrink: true,
      }}
      variant="filled"
    />
  );
};

export default PasswordField; 