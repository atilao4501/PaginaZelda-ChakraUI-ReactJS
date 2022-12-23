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

const textopronto =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ';

const ConjuntoCartoes = () => {
  return (
    <ChakraProvider>
      <Flex
        height={'45vw'}
        alignItems="center"
        backgroundColor={'cyan.500'}
        position={'relative'}
      >
        <Center
          position="absolute"
          top={0}
          right={0}
          left={0}
          bottom={0}
          margin="auto"
        >
          <Box position={'absolute'} top="5vw" textAlign={'start'}>
            <Heading fontSize={'12px'} mb={'12px'} ml="32px">
              AQUI O TITULO
            </Heading>
            <Text
              fontSize={'20px'}
              fontWeight="bold"
              lineHeight={'22px'}
              width="200px"
              mb={'4vw'}
              ml="32px"
            >
              PROVIDE THE BEST SERVICES
            </Text>
            <Box>
              <HStack spacing={'24px'}>
                <Cartao
                  titulo="UM NOVO ZELDA"
                  imagem="/Images/logo1.png"
                  texto={textopronto}
                ></Cartao>
                <Cartao
                  titulo="NOVA ECONOMIA"
                  imagem="/Images/logo2.png"
                  texto={textopronto}
                ></Cartao>
                <Cartao
                  titulo="NOVOS ANIMAIS"
                  imagem="/Images/logo3.png"
                  texto={textopronto}
                ></Cartao>
                <Cartao
                  titulo="NOVAS FADAS"
                  imagem="/Images/logo4.png"
                  texto={textopronto}
                ></Cartao>
              </HStack>
            </Box>
          </Box>
        </Center>
      </Flex>
    </ChakraProvider>
  );
};

export default ConjuntoCartoes;
