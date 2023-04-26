import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider } from "@mantine/core";
import CharacterAnimation from '../context/CharacterAnimation';
import CharacterConfig from '../context/CharacterConfig';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MantineProvider withGlobalStyles withNormalizeCSS theme={{
        globalStyles: (_theme) => ({
          body: {
            width: "100vw",
            height: "100vh",
          },
          "#root": {
            width: "100%",
            height: "100%",
          },
        }),
      }}>
      <CharacterConfig>
      <CharacterAnimation>
        <App />
      </CharacterAnimation>
      </CharacterConfig>
  </MantineProvider>
  </React.StrictMode>,
)
