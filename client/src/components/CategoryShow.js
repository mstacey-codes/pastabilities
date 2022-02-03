import React, { useState, useEffect } from "react";
import PastaTile from "./PastaTile.js";
import NewPastaForm from "./NewPastaForm.js";
import ErrorList from './ErrorList'
import translateServerErrors from '../services/translateServerErrors'

const CategoryShow = (props) => {
  const [category, setCategory] = useState({
    name: "",
    pastas: []
  });
  const [errors, setErrors] = useState([])
  
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

  const postPasta = async (newPastaData) => {
    try {
      const response = await fetch(`/api/v1/categories/${categoryId}/pastas`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newPastaData)
      })
      console.log(response)
      if (!response.ok) {
          if(response.status === 422) {
            const body = await response.json()
            const newErrors = translateServerErrors(body.errors)
            return setErrors(newErrors)
          } else {
            const errorMessage = `${response.status} (${response.statusText})`
            const error = new Error(errorMessage)
            throw(error)
          }
        } else {
          const body = await response.json()
          const updatedPastas = category.pastas.concat(body.pasta)
          setErrors([])
          setCategory({...category, pastas: updatedPastas})
        }
    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  let pastasList;
  if (!category.pastas[0]) {
    pastasList = `There are currently no pastas added to this category`;
  } else {
    pastasList = category.pastas.map(pastaObject => {
      return <PastaTile key={pastaObject.id} {...pastaObject} />;
    });
  }
  
  return (
    <>
      <div>
        <h1 className="category-title">{category.name} Pastas:</h1>
      </div>
      <div className="list-container">
        <div className="column-grid">{pastasList}</div>
      </div>
      <div>
        <ErrorList errors={errors} />
        <NewPastaForm 
          postPasta={postPasta}
        />
      </div>
    </>
  );
};

export default CategoryShow;
