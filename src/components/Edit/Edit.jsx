import { Box, Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const Edit = ({ getOneProduct, oneProduct, updateProduct }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  function handleSave() {
    let editedProduct = {
      title,
      price,
      image,
    };
    updateProduct(params.id, editedProduct);
    navigate("/");
    console.log(editedProduct);
  }
  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setImage(oneProduct.image);
    }
  }, [oneProduct]);
  return (
    <Container>
      {oneProduct ? (
        <>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <TextField
              value={title}
              onChange={e => setTitle(e.target.value)}
              label="Title"
              variant="filled"
            />
            <TextField
              value={price}
              onChange={e => setPrice(e.target.value)}
              label="Price"
              variant="filled"
            />
            <TextField
              value={image}
              onChange={e => setImage(e.target.value)}
              label="Image"
              variant="filled"
            />
            <Button onClick={() => handleSave()} variant="outlined">
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Edit;
