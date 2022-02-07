import {Box, Button, Heading, Input} from "@chakra-ui/react";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { post } from "../utils/Axios";
  
  function AddFavorite({ setFavoriteList }) {
    const [description, setDescription] = useState("");
  
    const navigate = useNavigate();
  
    async function onAddClick() {
      const favorite = {
        description
      };
      try {
        const response = await post("/favorite/", { ...favorite });
        if (response.status === 201) {
          setFavoriteList((value) => [...value, response.data.favorite]);
          navigate("/");
        } else {
          alert("Invalid");
        }
      } catch (error) {
        alert("Invalid");
        console.log(error);
      }
    }
  
    return (
      <Box textAlign="center" marginBottom="2em">
        <Heading>Add Favorite</Heading>
        <Box width={"70vw"} marginX="auto" marginTop="3em">
          <Input
            placeholder="Favorite descritpion"
            marginBottom={"1.5em"}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>
        <Button colorScheme="blue" marginTop="2em" onClick={onAddClick}>
          Add Favorite
        </Button>
      </Box>
    );
  }
  
  export default AddFavorite;
  