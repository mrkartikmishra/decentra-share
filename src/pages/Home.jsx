import React, { useEffect } from "react";
import { isWallectConnected } from "../utils";

const Home = () => {
  useEffect(() => {
    isWallectConnected();
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
