import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, List, ListItem, Text } from "@chakra-ui/react";

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [song, setSong] = useState("");
  const [songs, setSongs] = useState([]);

  const handleAddSong = () => {
    if (song) {
      setSongs([...songs, song]);
      setSong("");
    }
  };

  const handleRemoveSong = (index) => {
    setSongs(songs.filter((_, i) => i !== index));
  };

  return (
    <Container maxW="container.md" p={4}>
      <Heading mb={4}>Create Playlist</Heading>
      <FormControl mb={4}>
        <FormLabel>Playlist Name</FormLabel>
        <Input
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          placeholder="Enter playlist name"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Song</FormLabel>
        <Flex>
          <Input
            value={song}
            onChange={(e) => setSong(e.target.value)}
            placeholder="Enter song name"
          />
          <Button ml={2} onClick={handleAddSong}>Add</Button>
        </Flex>
      </FormControl>
      <Box>
        <Heading size="md" mb={2}>Songs</Heading>
        <List spacing={3}>
          {songs.map((song, index) => (
            <ListItem key={index}>
              <Flex justify="space-between" align="center">
                <Text>{song}</Text>
                <Button size="sm" colorScheme="red" onClick={() => handleRemoveSong(index)}>Remove</Button>
              </Flex>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default CreatePlaylist;