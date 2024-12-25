import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraBaseProvider } from '@chakra-ui/react'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraBaseProvider>
    <App />
    </ChakraBaseProvider>
  </StrictMode>,
)
