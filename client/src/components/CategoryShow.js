import React, { useState, useEffect } from "react";
import PastaTile from "./PastaTile.js";

const CategoryShow = (props) => {
  const [category, setCategory] = useState({
    name: "",
    pastas: [],
  });

  const categoryId = props.match.params.id;

  const getCategory = async () => {
    try {
      const response = await fetch(`/api/v1/categories/${categoryId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setCategory(body.category);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  let pastasList;
  if (!category.pastas[0]) {
    pastasList = `There are currently no pastas added to this category`;
  } else {
    pastasList = category.pastas.map((pasta) => {
      return <PastaTile key={pasta.id} {...pasta} />;
    });
  }

  return (
    <>
      <div>
        <h1>{category.name} Pastas:</h1>
      </div>
      <div>{pastasList}</div>
    </>
  );
};

export default CategoryShow;
