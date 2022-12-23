import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  Button,
  Image,
  Flex,
  Card,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import ConjuntoCartoes from './components/Conjunto';
import SelecaoImg from './components/SelecaoImg';
import Topo from './components/Topo';
import Meio from './components/Meio';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Topo></Topo>
      <Meio></Meio>
      <ConjuntoCartoes></ConjuntoCartoes>
      <SelecaoImg></SelecaoImg>
    </ChakraProvider>
  );
}

export default App;
