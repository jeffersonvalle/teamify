import React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

interface SwitchFieldProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  disabled?: boolean;
}

const SwitchField: React.FC<SwitchFieldProps> = ({
  label,
  checked,
  onChange,
  name,
  disabled,
}) => (
  <FormControlLabel
    control={
      <Switch
        checked={checked}
        onChange={onChange}
        name={name}
        disabled={disabled}
        sx={{
          '& .MuiSwitch-switchBase.Mui-checked': {
            color: '#2196f3',
          },
          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: '#2196f3',
          },
        }}
      />
    }
    label={label}
    labelPlacement="start"
    sx={{
      width: '100%',
      justifyContent: 'space-between',
      marginLeft: 0,
      marginRight: 0,
      '.MuiFormControlLabel-label': {
        fontWeight: 500,
        fontSize: 16,
      },
    }}
  />
);

export default SwitchField; 