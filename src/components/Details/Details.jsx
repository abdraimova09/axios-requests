import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const Details = ({ getOneProduct, oneProduct }) => {
  console.log(oneProduct);
  const params = useParams();
  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  return (
    <Container>
      {oneProduct ? (
        <Box
          marginTop={"20px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}>
          <Typography variant="h5">{oneProduct.title}</Typography>
          <Typography variant="h5">{oneProduct.price}</Typography>
          <img width={"50%"} src={oneProduct.image} alt="" />
        </Box>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Details;
