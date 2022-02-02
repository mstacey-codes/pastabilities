import React from "react";
import CategoriesList from "./CategoriesList";

const HomePage = (props) => {
  return (
    <>
      <h1>Welcome to Pastabilities! </h1>
      <h2>Where we let you review all pastas- from angel-hair to ziti!</h2>
      <CategoriesList />
    </>
  );
};

export default HomePage;
