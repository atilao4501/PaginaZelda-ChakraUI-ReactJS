import {
  Box,
  chakra,
  ChakraProvider,
  Heading,
  Button,
  Image,
  Text,
  Textarea,
} from '@chakra-ui/react';

const Topo = props => {
  return (
    <ChakraProvider>
      <Box bgImage={'/Images/fundo1.jpg'} bgPosition="left">
        <Box
          bgPosition="right"
          height="100px"
          paddingTop={'36px'}
          paddingLeft="6rem"
        >
          <Heading fontSize={20}>Breath of the Wild</Heading>
        </Box>
        <Box paddingTop={'8rem'} paddingLeft="6rem" height={'28rem'}>
          <Heading fontSize={12}>AQUI TA o titulo / TITULO</Heading>
          <Text
            mt="8px"
            fontSize={'2.5rem'}
            width="25rem"
            letterSpacing={'1px'}
          >
            WE ARE BUILDING EXPERTS
          </Text>
          <Button
            borderColor={'white'}
            border="2px"
            textAlign={'center'}
            justifyContent="center"
            borderRadius={''}
            background="none"
            mt={'18px'}
          >
            <Text mt={'3px'} fontSize="12px" letterSpacing={'1.5px'}>
              OUR PROJECTS
            </Text>
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Topo;
