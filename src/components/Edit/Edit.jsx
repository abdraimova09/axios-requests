import React from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  console.log(params);
  return <div>edit</div>;
};

export default Edit;
