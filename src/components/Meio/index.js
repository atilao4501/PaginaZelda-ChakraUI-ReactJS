import {
  Box,
  chakra,
  ChakraProvider,
  Heading,
  Image,
  Flex,
  Button,
  Text,
  Textarea,
} from '@chakra-ui/react';

const Meio = props => {
  return (
    <ChakraProvider>
      <Box
        backgroundColor={'white'}
        paddingLeft={'4rem'}
        paddingTop="4rem"
        height={'34rem'}
      >
        <Flex>
          <Image
            src="/Images/vertical1.jpg"
            alt="paisagem 1"
            height={'300px'}
          ></Image>
          <Image
            src="/Images/vertical2.jpg"
            alt="paisagem 2"
            height={'300px'}
            ml="1.5rem"
            mt={'4rem'}
          ></Image>
          <Box ml={'4rem'} mt={'4rem'}>
            <Heading color={'black'} fontSize="0.8rem">
              WHO WE ARE
            </Heading>
            <Heading
              mt={'12px'}
              color={'black'}
              fontSize="1.5rem"
              width={'12rem'}
            >
              ARCHITETURE STUDIO
            </Heading>
            <Text
              color={'black'}
              mt="12px"
              fontSize={'0.8rem'}
              fontWeight="bold"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </Text>
            <Text color={'black'} fontSize="0.8rem" mt={'12px'}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </Text>
            <Button
              mt={'20px'}
              ml="6px"
              pt={'4px'}
              border={'2px'}
              borderColor="rgba(0, 0, 0, 0.3)"
              borderRadius={''}
              width="150px"
            >
              <Text color={'black'}>READ MORE</Text>
            </Button>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Meio;
