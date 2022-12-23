import Cartao from '../Cartao';
import {
  Box,
  Center,
  chakra,
  ChakraProvider,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  Textarea,
} from '@chakra-ui/react';
import Imagem from '../Imagem';

const SelecaoImg = () => {
  return (
    <ChakraProvider>
      <Flex height={'450px'} position="relative">
        <Center
          position="absolute"
          top={0}
          right={0}
          left={0}
          bottom={0}
          margin="auto"
        >
          <Imagem src="/Images/predio1.jpg"></Imagem>
          <Imagem src="/Images/predio2.jpg"></Imagem>
          <Imagem src="/Images/predio3.jpg"></Imagem>
        </Center>
      </Flex>
    </ChakraProvider>
  );
};

export default SelecaoImg;
