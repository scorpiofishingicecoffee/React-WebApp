import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";

const Games = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    Axios.get(
      "https://api.rawg.io/api/games?key=3c53bed4350c498485c6ee01a33bc066"
    ).then((response) => {
      console.log(response.data.results);
      setUsers(response.data.results).catch((err) => {
        console.log(err);
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="Container">
      {users.map((users) => (
        <div className="Card">
          <img className="img" src={users.background_image} alt="icons" />
          <h3>Name: {users.name}</h3>
          <p>ID: {users.id}</p>
          <p>Rating: {users.rating}</p>
          <p>Ratings Count: {users.ratings_count}</p>
          <p>Metacritic Score Review: {users.metacritic}</p>
          <p>Playtime: {users.playtime} hrs</p>
          <p>Released Dates: {users.released}</p>
        </div>
      ))}
    </div>
  );
};

export default Games;
