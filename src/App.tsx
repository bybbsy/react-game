import { ChakraProvider } from '@chakra-ui/react';
import { Header } from '@Components/Header';
import { extendedTheme } from './theme/config'

function App() {
  return (
    <ChakraProvider theme={extendedTheme}>
      <Header/>
    </ChakraProvider>
  );
}

export default App;
