import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { remove } from "../utils/Axios";


function FavoriteCard({ favorite, setFavoriteList }) {

  const onDeleteClick = async () => {
    try {
      const response = await remove(`/favorite/${favorite.id}`)
      if(response.status == 200) {
        setFavoriteList(value => {
          const newFavorite = value.filter(f => f.id != favorite.id)
          return newFavorite
        })
      } 
    } catch (error) {
      alert('error')
    }
  }

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
        <Box
          mt="1"
          fontWeight="bold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {favorite.description}
        </Box>
        <Box display="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="green.600" fontSize="md">
            {favorite.createdAt}
          </Box>
        </Box>
        <Link to={`/favorite/edit/${favorite.id}`} >
          <Button colorScheme="blue" marginTop="2em" size={"md"} mr="1em">
            Edit Favorite
          </Button>
        </Link>
        <Button colorScheme="red" marginTop="2em" size={"md"} onClick={onDeleteClick}>
          Delete Favorite
        </Button>
      </Box>
    </Box>
  );
}

export default FavoriteCard;
