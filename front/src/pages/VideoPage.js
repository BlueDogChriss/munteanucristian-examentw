import { Box, Button, Heading, Text, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {AddIcon} from '@chakra-ui/icons';
import VideoList from "../components/VideoList";

function VideoPage({ videoList, setVideoList, canEdit }) {
  const [videoTitle, setVideoTitle] = useState("");

  return (
    <Box>
      <Box textAlign="center" marginBottom="3em">
        <Heading>Videos</Heading>
        <Box width="70vw" mx="auto" mt="2em">
          <Text as="h4">Filtrati dupa titlul video-ului</Text>
          <Input
            placeholder="Titlu Video"
            marginBottom={"1.5em"}
            value={videoTitle}
            onChange={(e) => setVideoTitle(e.target.value)}
          />
        </Box>
      </Box>
      <Link to="/video/add">
        <Button leftIcon={<AddIcon />} colorScheme="blue" size="lg" marginBottom="2em" >
          Add Video
        </Button>
      </Link>

      <VideoList
        videoList={videoList}
        setVideoList={setVideoList}
        videoTitle={videoTitle}
        canEdit={canEdit}
      />
    </Box>
  );
}

export default VideoPage;
