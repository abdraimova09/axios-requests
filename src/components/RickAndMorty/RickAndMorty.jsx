import { Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

import "./style.css";

const RickAndMorty = () => {
  const API = "https://rickandmortyapi.com/api/character";
  const [data, setData] = useState([]);
  async function getData() {
    let res = await axios(API);
    setData(res.data.results);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h2>Rick and Morty</h2>
      <div className="list">
        {data.map(item => (
          <div className="card" key={item.id}>
            <h4>{item.name}</h4>
            <img src={item.image} alt="" />
            <br />
            <Rating name="simple-controlled" defaultValue={5} />
            <div>{item.status}</div>
            <div>{item.species}</div>
            <div>{item.gender}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RickAndMorty;
