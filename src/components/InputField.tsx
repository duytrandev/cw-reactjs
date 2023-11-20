import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import {  useState } from "react";
import "../styles/IconVisible.scss";

type Props = TextFieldProps & {
  borderLeftColor?: string,
  type?: string
}

const InputField = (props: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const [error, setError] = useState<boolean>(true);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(e.target.value === '');
  };
  return (
    <TextField
      type={props.type && showPassword ? "password" : "text"}
      onChange={handleInputChange}
      error= {error}
      helperText={error ? 'This field is required' : ''}
      sx={{ width: '100%', border: "none" }}
      InputProps={{
        disableUnderline: true,
        sx: {
          backgroundColor: '#fff', 
          fontSize: '1.8rem',
          fontWeight: '400',
          color: 'var(--main-color)',
          '&:before': {
          },
          ':hover': {
            backgroundColor: '#fff', 
          },
          ':focus-within':{
            borderLeft: '4px solid',
            borderColor: `${props.borderLeftColor || 'var(--main-color)'}`,
          },
          ':focus': {
            outline: "none"
          }
        },
        endAdornment: (
          props.type && <InputAdornment position="end">
          <IconButton
            className="icon-visible"
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
        )
      }}
      InputLabelProps={{
        sx: {
          fontSize: '1.8rem',
        }
      }}
      {...props}
    />
  );
}

export default InputField
