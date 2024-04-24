import { Box } from "@mui/material";
import { useContext } from "react";
import { BasicChatBot } from "./context";

export default function Heading() {
  const { chatTitle } = useContext(BasicChatBot);

  return (
    <Box
      component={"section"}
      sx={{
        margin: 0,
        backgroundColor: "black",
        color: "white",
        padding: 2,
        position: "sticky",
        top: 0,
        borderBottom: "1px solid white",
      }}
    >
      <Box component={"h1"}>{chatTitle}</Box>
    </Box>
  );
}
