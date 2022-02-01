import React, { useState, useEffect } from "react";
import PastaTile from "./PastaTile.js";

const CategoryShow = (props) => {
  const [category, setCategory] = useState({
    name: "",
    pastas: [null],
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
    pastasList = `Nothing has been added yet. Wouldn't it be great if there was a form that let you add pastas? Guess that's for another user story.`;
  } else {
    pastasList = category.pastas.map((pasta) => {
      return <PastaTile key={pasta.id} {...pasta} />;
    });
  }

  return (
    <>
      <div>
        <h1>Hello from category show page {category.name}</h1>
      </div>
      <div>
        <ul>{pastasList}</ul>
      </div>
    </>
  );
};

export default CategoryShow;
