import React from "react";
import { Send } from "@mui/icons-material";
import Btn from "./btn";

export default function SendBtn(props: {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
}) {
  const { handleSubmit } = props;

  return <Btn icon={<Send sx={{}} />} handleClick={() => handleSubmit()} />;
}
