import { Box, Container, Flex, Heading, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" justify="space-between" align="center" mb={8} p={4} bg="gray.900" color="white" borderRadius="md">
        <Heading size="lg">MusicStream</Heading>
        <Flex>
          <Text mx={4} cursor="pointer">Home</Text>
          <Text mx={4} cursor="pointer">Browse</Text>
          <Text mx={4} cursor="pointer">Library</Text>
        </Flex>
      </Flex>

      {/* Featured Playlists */}
      <Box mb={8}>
        <Heading size="md" mb={4}>Featured Playlists</Heading>
        <Flex wrap="wrap" justify="space-between">
          <Box w="30%" mb={4} p={4} bg="gray.100" borderRadius="md">
            <Image src="/images/playlist1.jpg" alt="Playlist 1" borderRadius="md" mb={2} />
            <Text fontWeight="bold">Top Hits</Text>
            <Text fontSize="sm">The latest and greatest hits.</Text>
          </Box>
          <Box w="30%" mb={4} p={4} bg="gray.100" borderRadius="md">
            <Image src="/images/playlist2.jpg" alt="Playlist 2" borderRadius="md" mb={2} />
            <Text fontWeight="bold">Chill Vibes</Text>
            <Text fontSize="sm">Relax and unwind with these tracks.</Text>
          </Box>
          <Box w="30%" mb={4} p={4} bg="gray.100" borderRadius="md">
            <Image src="/images/playlist3.jpg" alt="Playlist 3" borderRadius="md" mb={2} />
            <Text fontWeight="bold">Workout</Text>
            <Text fontSize="sm">Get pumped with these workout tunes.</Text>
          </Box>
        </Flex>
      </Box>

      {/* Player Interface */}
      <Box position="fixed" bottom={0} left={0} right={0} bg="gray.900" color="white" p={4}>
        <Flex justify="space-between" align="center">
          <Box>
            <Text fontWeight="bold">Now Playing</Text>
            <Text fontSize="sm">Song Title - Artist</Text>
          </Box>
          <Flex align="center">
            <IconButton aria-label="Previous" icon={<FaBackward />} mx={2} />
            <IconButton aria-label="Play/Pause" icon={<FaPlay />} mx={2} />
            <IconButton aria-label="Next" icon={<FaForward />} mx={2} />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;