import React from "react";
import CategoriesList from "./CategoriesList";

const HomePage = (props) => {
  return (
    <>
      <div className="header homepage">
        <h1>Welcome to Pastabilities! </h1>
      </div>
      <div className="tag-line homepage">
        <h3 >Where we let you review all pastas- from angel-hair to ziti!</h3>
      </div>
      <CategoriesList />
    </>
  );
};

export default HomePage;
