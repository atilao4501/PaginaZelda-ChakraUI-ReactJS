import {
  Box,
  chakra,
  ChakraProvider,
  Heading,
  Image,
  Text,
  Textarea,
} from '@chakra-ui/react';

const Cartao = props => {
  return (
    <ChakraProvider>
      <Box
        border={'4px'}
        borderColor="whiteAlpha.300"
        boxShadow={'dark-lg'}
        boxSize={'21vw'}
        pl="1.5vw"
        pt={'2vw'}
      >
        <Image boxSize={'5vw'} src={props.imagem}></Image>
        <Heading fontSize={'1vw'} mt="1vw">
          {props.titulo}
        </Heading>
        <Text mt={'18px'} fontSize={'1.2vw'} lineHeight="1.4vw" width={'15vw'}>
          {props.texto}
        </Text>
      </Box>
    </ChakraProvider>
  );
};

export default Cartao;
