import React from 'react';
import TextField from '@mui/material/TextField';

interface InputFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  autoComplete?: string;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  name,
  autoComplete,
  disabled,
}) => (
  <TextField
    fullWidth
    label={label}
    placeholder={placeholder}
    type={type}
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

export default InputField; 