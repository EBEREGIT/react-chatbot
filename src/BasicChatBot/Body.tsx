import { useContext, useEffect, useRef } from "react";
import { BasicChatBot } from "./context";
import Markdown from "react-markdown";
import { Box } from "@mui/material";

export default function Body() {
  const { isTyping, chats } = useContext(BasicChatBot);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [chats]);

  const userStyle = {
    backgroundColor: "#61677A",
    ml: "25%",
    display: "flex",
    flexDirection: "row-reverse",
  };

  const assistantStyle = {
    backgroundColor: "#000000",
    width: "75%",
  };

  const generalStyle = {
    color: "white",
    padding: 1,
    mb: 2,
    borderRadius: 2,
  };

  return (
    <Box
      component={"main"}
      sx={{
        maxWidth: "100vw",
        pb: 10,
        height: "auto",
        backgroundColor: "#EBECF1",
      }}
    >
      <section style={{ padding: 10 }}>
        {chats && chats.length
          ? chats.map((chat, index) => (
              <Box
                component={"p"}
                key={index}
                sx={
                  chat.role === "user"
                    ? { ...userStyle, ...generalStyle }
                    : chat.role === "assistant"
                    ? { ...assistantStyle, ...generalStyle }
                    : {}
                }
              >
                <span>
                  <Markdown>{chat.content as string}</Markdown>
                </span>
              </Box>
            ))
          : ""}
      </section>

      <Box
        component={"section"}
        sx={{
          ...assistantStyle,
          ...generalStyle,
          visibility: isTyping ? "visible" : "hidden",
          ml: 1,
        }}
      >
        <p>
          <i>{isTyping ? "Typing" : ""}</i>
        </p>
      </Box>

      <div ref={ref} />
    </Box>
  );
}
