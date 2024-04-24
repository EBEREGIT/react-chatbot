/* eslint-disable @typescript-eslint/ban-types */
// external import
import { Box, InputAdornment, TextField } from "@mui/material";
import { ReactNode, useContext } from "react";
import { BasicChatBot } from "../context";

export default function Input(props: {
  value: number | string | undefined;
  placeholder: string;
  type: string;
  name: string;
  setter: Function;
  error?: boolean;
  helperText?: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  disabled?: boolean;
}) {
  const { isTyping } = useContext(BasicChatBot);
  const {
    placeholder,
    setter,
    value,
    type,
    register,
    name,
    error,
    helperText,
    startAdornment,
    endAdornment,
    disabled,
  } = props;

  return (
    <Box>
      <TextField
        autoFocus
        disabled={disabled || isTyping}
        id={name}
        fullWidth
        name={name}
        error={error}
        {...(register ? { ...register(name) } : "")}
        helperText={helperText}
        color="primary"
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(e) => setter(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ cursor: "pointer" }}>
              {startAdornment}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end" sx={{ cursor: "pointer" }}>
              {endAdornment}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
