import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CategoriesList = (props) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await fetch(`/api/v1/categories`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setCategories(body.categories);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const categoriesListItems = categories.map((category) => {
    return (
      <li key={category.id}>
        <Link to={`/categories/${category.id}`}>{category.name}</Link>
      </li>
    );
  });
  return (
    <div>
      <h3>Click on a Pasta Type to learn more!</h3>
      <ul>{categoriesListItems}</ul>
    </div>
  );
};

export default CategoriesList;
