import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h2 className="homeh2">Welcome to the Video Game Database!</h2>
      <h3 className="homeh3">
        These are the data that I can provide at the moment.
      </h3>
      <p className="p">
        Please click on the specific button to know more about specific data
        that
      </p>
      <p className="p">
        has been fetched with the api used to develop this web-app.
      </p>
      <p className="p">
        It might take some time to load if you clicked on the button. Please wait.
      </p>
    </div>
  );
};

export default Home;

