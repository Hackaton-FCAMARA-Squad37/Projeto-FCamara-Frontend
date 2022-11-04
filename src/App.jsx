import { Box, ChakraProvider, Text } from "@chakra-ui/react";
import { theme } from "./style/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <h1>Olá, mundo!</h1>
      </div>
      <Box bg="mixFlavor">
        <Text fontSize="3xl" color="grapeJuice">
          Teste
        </Text>
      </Box>
    </ChakraProvider>
  );
}

export default App;
