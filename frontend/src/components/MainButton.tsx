import React from 'react';
import Button from '@mui/material/Button';

interface MainButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const MainButton: React.FC<MainButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled,
  fullWidth = true,
}) => (
  <Button
    variant="contained"
    color="primary"
    onClick={onClick}
    type={type}
    disabled={disabled}
    fullWidth={fullWidth}
    sx={{
      background: '#0a84ff',
      borderRadius: 999,
      fontWeight: 600,
      fontSize: 20,
      height: 56,
      textTransform: 'none',
      boxShadow: 'none',
      ':hover': {
        background: '#006be6',
        boxShadow: 'none',
      },
      marginTop: 2,
      marginBottom: 2,
    }}
  >
    {children}
  </Button>
);

export default MainButton; 