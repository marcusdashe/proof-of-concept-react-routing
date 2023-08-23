import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Welcome to the Home Page</div>
      <Link to="/products">Go to Product Details Page</Link>
    </>
  );
};

export default Home;
