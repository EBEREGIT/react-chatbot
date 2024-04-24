import { FormEvent, useContext } from "react";
import { BasicChatBot } from "./context";
import Input from "./components/input";
import { Box } from "@mui/material";
import SendBtn from "./components/SendBtn";

export default function Form(){
  const { basicChat, setMessage, message } = useContext(BasicChatBot);

  const chat = async (e?: React.FormEvent<HTMLFormElement>) => {
    e ? e.preventDefault() : "";

    basicChat();
  };

  return (
    <Box
      component={"form"}
      action=""
      onSubmit={(e: FormEvent<HTMLFormElement>) => chat(e)}
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <Input
        type="text"
        name="message"
        value={message}
        placeholder="Enter message here..."
        setter={setMessage}
        endAdornment={<SendBtn handleSubmit={chat} />}
      />
    </Box>
  );
}
