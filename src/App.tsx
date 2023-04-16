import { ChakraProvider, Container } from '@chakra-ui/react'
import TimerProvider from './TimerContext'
import Set from './components/Set/Index'
import Run from './components/Run'

function App() {
  return (
    <ChakraProvider >
      <TimerProvider>
        <Container maxW="container.lg" height="100vh" py={4}>
          <Set />
        </Container>
      </TimerProvider>
    </ChakraProvider>
  )
}

export default App
