import BasicChatBotProvider from "./context";
import Layer from "./Layer";

function BasicChat(props: {
  openAiApiKey: string;
  chatTitle?: string;
  systemPrompt?: string;
}) {
  const { openAiApiKey, chatTitle, systemPrompt } = props;

  return (
    <BasicChatBotProvider>
      <Layer
        openAiApiKey={openAiApiKey}
        chatTitle={chatTitle as string}
        systemPrompt={systemPrompt as string}
      />
    </BasicChatBotProvider>
  );
}

export default BasicChat;
