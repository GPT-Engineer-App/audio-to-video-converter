// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Container, Heading, Input, Text, VStack, Image, Textarea, useToast } from "@chakra-ui/react";
import { FaUpload, FaVideo } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleFileUpload = () => {
    toast({
      title: "File uploaded.",
      description: "We are processing your audio file.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleConvert = () => {
    toast({
      title: "Conversion started.",
      description: "Your video will be ready soon.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Image src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMHdhdmVzJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3MTQxMDQ5ODR8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
        <Heading as="h1" size="xl">
          Podcast to Video Converter
        </Heading>
        <Text fontSize="lg">Convert your podcast episodes into engaging videos with audiograms and transcriptions.</Text>
        <Box w="full">
          <Input placeholder="Enter podcast title" mb={3} />
          <Input type="file" accept="audio/*" onChange={handleFileUpload} mb={3} />
          <Textarea placeholder="Optional: Enter transcription here" mb={3} />
          <Button leftIcon={<FaUpload />} colorScheme="blue" onClick={handleFileUpload}>
            Upload Audio
          </Button>
        </Box>
        <Button leftIcon={<FaVideo />} colorScheme="green" onClick={handleConvert} size="lg">
          Convert to Video
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
