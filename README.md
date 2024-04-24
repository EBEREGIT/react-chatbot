# React Chatbot
Add an ai-powered chatbot widget to a react or nextjs application in 5 minutes using this package. It uses the functionalities of ChatGPT provided by OpenAI.

## Installation 
### npm
```javascript
npm i @ebereplenty/chatbot
```

### yarn
```javascript
yarn add @ebereplenty/chatbot
```

## Usage
### Create Openai API Key
- Navigate to https://platform.openai.com/api-keys to create an API key.
- Copy the key into a secure location such as a `.env` file.
- Reference the key in the code below

### Regular
The example below adds the default chatGPT behavior to your application.

```javascript

  <BasicChat openAiApiKey={open_ai_API_key} />

```

### Personalize
The example below adds a personalized chatbot to your application by the `systemPrompt` props.

```javascript

  <BasicChat 
    openAiApiKey={open_ai_API_key}
    chatTitle={"Wildlife Chat"}
    systemPrompt={
      `
        Your name is Ebere. You are wildlife expert. 
        The only thing you talk about is on wildlife related topics. 
        Always begin a discussion by introducing yourself
      `
    }
  />

```

- `systemPrompt` props tells the chatbot how it should behave 
- `chatTitle` props adds a title to the UI.

## Dependencies
- [OpenAI](https://openai.com/)
- [MUI](https://mui.com/)
- [React Markdown](https://www.npmjs.com/package/react-markdown)

## Documentation
See https://github.com/EBEREGIT/react-chatbot/blob/master/README.md

## Author
Njoku Samson Ebere: https://linktr.ee/ebereplenty
