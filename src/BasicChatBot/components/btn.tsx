/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@mui/material";
import { ReactNode } from "react";

export default function Btn(props: {
  variant?: "contained" | "outlined" | "text";
  href?: string;
  label?: ReactNode;
  sx?: object;
  icon?: ReactNode;
  iconL?: ReactNode;
  handleClick: any;
  target?: "_blank";
  autoFocus?: boolean;
}) {
  const { variant, href, label, sx, icon, handleClick, iconL, autoFocus } =
    props;

  return (
    <Button
      variant={variant}
      href={href}
      sx={{ ...sx, textTransform: "capitalize" }}
      onClick={() => handleClick()}
      autoFocus={autoFocus}
    >
      {iconL}
      {label}
      {icon}
    </Button>
  );
}
