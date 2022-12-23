import Cartao from '../Cartao';
import {
  Box,
  Center,
  chakra,
  ChakraProvider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  Textarea,
} from '@chakra-ui/react';

const Imagem = props => {
  return (
    <ChakraProvider>
      <Flex position="relative" _hover={{ opacity: 0.5 }}>
        <Image
          src="/Images/cruz.png"
          boxSize={'50px'}
          top={0}
          right={0}
          left={0}
          bottom={0}
          margin="auto"
          position={'absolute'}
        ></Image>
        <Heading
          fontSize={''}
          position={'absolute'}
          bottom="8"
          left={'6'}
          width={'200px'}
        >
          ARCH BUILDING PROJECTS
        </Heading>
        <Image height={'450px'} src={props.src}></Image>
      </Flex>
    </ChakraProvider>
  );
};

export default Imagem;
