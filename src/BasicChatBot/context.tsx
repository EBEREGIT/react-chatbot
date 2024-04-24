/* eslint-disable @typescript-eslint/no-explicit-any */
// external
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";
import OpenAI from "openai";

type BasicChatBotType = {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  openAiApiKey: string;
  setOpenAiApiKey: Dispatch<SetStateAction<string>>;
  chatTitle: string;
  setChatTitle: Dispatch<SetStateAction<string>>;
  systemPrompt: string;
  setSystemPrompt: Dispatch<SetStateAction<string>>;
  chats: any[];
  setChats: Dispatch<SetStateAction<any[]>>;
  isTyping: boolean;
  setIsTyping: Dispatch<SetStateAction<boolean>>;

  basicChat: () => void;
};

type BasicChatBotProviderProps = {
  children: React.ReactNode;
};

export const BasicChatBot = createContext({} as BasicChatBotType);

export default function BasicChatBotProvider({
  children,
}: BasicChatBotProviderProps) {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState<any[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [openAiApiKey, setOpenAiApiKey] = useState("");
  const [chatTitle, setChatTitle] = useState("");
  const [systemPrompt, setSystemPrompt] = useState("");

  const basicChat = async () => {
    if (!message) return;

    const openai = new OpenAI({
      apiKey: openAiApiKey,
      dangerouslyAllowBrowser: true,
    });

    setIsTyping(true);
    scrollTo(0, 1e10);

    const msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);

    setMessage("");

    await openai.chat.completions
      .create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: systemPrompt ? systemPrompt : "",
          },
          ...chats,
        ],
      })
      .then((res) => {
        msgs.push(res.choices[0].message);
        setChats(msgs);
        setIsTyping(false);
        scrollTo(0, 1e10);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <BasicChatBot.Provider
      value={{
        message,
        setMessage,
        chats,
        setChats,
        isTyping,
        setIsTyping,
        basicChat,
        openAiApiKey,
        setOpenAiApiKey,
        chatTitle,
        setChatTitle,
        systemPrompt,
        setSystemPrompt,
      }}
    >
      {children}
    </BasicChatBot.Provider>
  );
}
