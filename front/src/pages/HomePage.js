import {Box, Button, Heading, Input, Text,} from "@chakra-ui/react";
import React, { useState } from "react";
import {AddIcon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import FavoriteList from "../components/FavoriteList";

function Home({favoriteList, setFavoriteList})
{
    const [description, setDescription] = useState("");

    return (
        <Box>
        <Box textAlign="center" marginBottom="3em">
          <Heading>Favorite</Heading>
          <Box width="70vw" mx="auto" mt="2em">
            <Text as="h4">Filtrati dupa descriere</Text>
            <Input
              placeholder="Descriere"
              marginBottom={"1.5em"}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Box>
        </Box>
        <Link to="/favorite/add">
        <Button leftIcon={<AddIcon />} colorScheme="purple" size="lg" marginBottom="1em" >
            Add Favorite
          </Button>
        </Link>
  
        <FavoriteList
          favoriteList={favoriteList}
          setFavoriteList={setFavoriteList}
          description={description}
        />
      </Box>
    );

}

export default Home;

