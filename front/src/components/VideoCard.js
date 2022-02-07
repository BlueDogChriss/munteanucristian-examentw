import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { remove } from "../utils/Axios";

function VideoCard({ video, setVideoList, canEdit }) {
  const onDeleteClick = async () => {
    try {
      const response = await remove(`/video/${video.id}`);
      if (response.status == 200) {
        if (setVideoList) {
          setVideoList((oldVideos) => {
            const newVideos = oldVideos.filter((v) => v.id != video.id);
            return newVideos;
          });
        }
      }
    } catch (error) {
      alert("error");
    }
  };

  return (
    <Box
        maxW="md"
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        marginRight="3em"
        mt={"2em"}
    >
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Box
            color="white.500"
            fontWeight="bold"
            letterSpacing="wide"
            fontSize="sm"
            isTruncated
          >
            {video.url}
          </Box>
        </Box>

        <Box
          mt="2"
          fontWeight="bold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {video.title}
        </Box>
        <Box
          mt="2"
          lineHeight="tight"
          isTruncated
        >
          {video.description}
        </Box>
        {canEdit && (
          <Box>
            <Link to={`/video/edit/${video.id}`}>
              <Button colorScheme="blue" marginTop="2em" size={"lg"} mr="2em">
                Edit video
              </Button>
            </Link>
            <Button colorScheme="red" marginTop="2em" size={"lg"} onClick={onDeleteClick}>
              Delete video
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default VideoCard;
