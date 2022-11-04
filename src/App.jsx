import { Box, ChakraProvider, Text } from "@chakra-ui/react";
import { theme } from "./style/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App"></div>
      <Box bg="mixFlavor">
        <Text fontSize="2xl" fontWeight="semibold" color="water">
          Teste
        </Text>
      </Box>
      <Text>Teste2</Text>
    </ChakraProvider>
  );
}

export default App;
