import BasicChat from "./BasicChatBot";

function App() {
  return (
    <>
      <BasicChat
        openAiApiKey={import.meta.env.VITE_OPENAI_API_KEY}
      />
    </>
  );
}

export default App;
