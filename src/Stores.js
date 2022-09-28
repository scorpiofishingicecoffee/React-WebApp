import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";

const Stores = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    Axios.get(
      "https://api.rawg.io/api/stores?key=3c53bed4350c498485c6ee01a33bc066"
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
          <img className="img" src={users.image_background} alt="icons" />
          <h3>Name: {users.name}</h3>
          <p>ID: {users.id}</p>
          <p>Slug Name: {users.slug}</p>
          <p>Games Count: {users.games_count}</p>
          <p>Domain:</p>
          <p>
            <a href={users.domain} target="_blank">
              {users.domain}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stores;
