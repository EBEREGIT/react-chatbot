import { useContext, useEffect } from "react";
import Body from "./Body";
import Form from "./Form";
import { BasicChatBot } from "./context";
import Heading from "./heading";
import { Paper } from "@mui/material";

export default function Layer(props: {
  openAiApiKey: string;
  chatTitle: string;
  systemPrompt: string;
}) {
  const { openAiApiKey, chatTitle, systemPrompt } = props;
  const { chats, setOpenAiApiKey, setChatTitle, setSystemPrompt } =
    useContext(BasicChatBot);

  useEffect(() => {
    setOpenAiApiKey(openAiApiKey);
    setChatTitle(chatTitle);
    setSystemPrompt(systemPrompt);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Paper
      component={"div"}
      sx={{
        position: chats && chats.length ? "absolute" : "relative",
        backgroundColor: "#EBECF1",
        height: "100vh",
        width: "100vw",
      }}
      square
      elevation={0}
    >
      <Heading />
      <Body />
      <Form />
    </Paper>
  );
}
